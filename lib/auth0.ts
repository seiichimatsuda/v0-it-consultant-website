import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"

const AUTH0_DOMAIN = process.env.AUTH0_ISSUER_BASE_URL?.replace("https://", "") || ""
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || ""
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET || ""
const AUTH0_SECRET = process.env.AUTH0_SECRET || "fallback-secret-change-me"
const BASE_URL = process.env.AUTH0_BASE_URL || "http://localhost:3000"

const secretKey = new TextEncoder().encode(AUTH0_SECRET)

export interface SessionUser {
  sub: string
  name?: string
  email?: string
  picture?: string
}

export interface Session {
  user: SessionUser
  accessToken?: string
  expiresAt: number
}

// Create a signed session token
export async function createSessionToken(session: Session): Promise<string> {
  return await new SignJWT({ ...session })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey)
}

// Verify and decode session token
export async function verifySessionToken(token: string): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey)
    return payload as unknown as Session
  } catch {
    return null
  }
}

// Get current session from cookies
export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("auth_session")

  if (!sessionCookie?.value) {
    return null
  }

  return await verifySessionToken(sessionCookie.value)
}

// Get current user from session
export async function getUser(): Promise<SessionUser | null> {
  const session = await getSession()
  return session?.user || null
}

// Generate Auth0 authorization URL
export function getAuthorizationUrl(state: string): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: AUTH0_CLIENT_ID,
    redirect_uri: `${BASE_URL}/api/auth/callback`,
    scope: "openid profile email",
    state,
  })

  return `https://${AUTH0_DOMAIN}/authorize?${params.toString()}`
}

// Exchange authorization code for tokens
export async function exchangeCodeForTokens(code: string): Promise<{
  access_token: string
  id_token: string
  expires_in: number
} | null> {
  try {
    const response = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: AUTH0_CLIENT_ID,
        client_secret: AUTH0_CLIENT_SECRET,
        code,
        redirect_uri: `${BASE_URL}/api/auth/callback`,
      }),
    })

    if (!response.ok) {
      console.error("Token exchange failed:", await response.text())
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Token exchange error:", error)
    return null
  }
}

// Get user info from Auth0
export async function getUserInfo(accessToken: string): Promise<SessionUser | null> {
  try {
    const response = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch {
    return null
  }
}

// Get logout URL
export function getLogoutUrl(): string {
  const params = new URLSearchParams({
    client_id: AUTH0_CLIENT_ID,
    returnTo: BASE_URL,
  })

  return `https://${AUTH0_DOMAIN}/v2/logout?${params.toString()}`
}

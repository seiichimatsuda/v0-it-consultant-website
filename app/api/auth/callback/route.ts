import { type NextRequest, NextResponse } from "next/server"
import { exchangeCodeForTokens, getUserInfo, createSessionToken } from "@/lib/auth0"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const state = searchParams.get("state")
  const error = searchParams.get("error")

  const baseUrl = process.env.AUTH0_BASE_URL || "http://localhost:3000"

  // Handle Auth0 errors
  if (error) {
    console.error("Auth0 error:", error, searchParams.get("error_description"))
    return NextResponse.redirect(`${baseUrl}?error=auth_failed`)
  }

  // Verify state
  const storedState = request.cookies.get("auth_state")?.value
  if (!state || state !== storedState) {
    return NextResponse.redirect(`${baseUrl}?error=invalid_state`)
  }

  if (!code) {
    return NextResponse.redirect(`${baseUrl}?error=no_code`)
  }

  // Exchange code for tokens
  const tokens = await exchangeCodeForTokens(code)
  if (!tokens) {
    return NextResponse.redirect(`${baseUrl}?error=token_exchange_failed`)
  }

  // Get user info
  const userInfo = await getUserInfo(tokens.access_token)
  if (!userInfo) {
    return NextResponse.redirect(`${baseUrl}?error=userinfo_failed`)
  }

  // Create session
  const session = {
    user: userInfo,
    accessToken: tokens.access_token,
    expiresAt: Date.now() + tokens.expires_in * 1000,
  }

  const sessionToken = await createSessionToken(session)

  // Redirect to home with session cookie
  const response = NextResponse.redirect(baseUrl)

  response.cookies.set("auth_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  // Clear state cookie
  response.cookies.delete("auth_state")

  return response
}

import { NextResponse } from "next/server"
import { getAuthorizationUrl } from "@/lib/auth0"

export async function GET() {
  // Generate a random state for CSRF protection
  const state = crypto.randomUUID()

  const authUrl = getAuthorizationUrl(state)

  const response = NextResponse.redirect(authUrl)

  // Store state in cookie for verification
  response.cookies.set("auth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10, // 10 minutes
  })

  return response
}

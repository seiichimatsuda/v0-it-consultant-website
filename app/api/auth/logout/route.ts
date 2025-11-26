import { NextResponse } from "next/server"
import { getLogoutUrl } from "@/lib/auth0"

export async function GET() {
  const logoutUrl = getLogoutUrl()

  const response = NextResponse.redirect(logoutUrl)

  // Clear session cookie
  response.cookies.delete("auth_session")

  return response
}

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token

    // Check if user is trying to access protected routes
    if (pathname.startsWith("/students") || pathname.startsWith("/resources")) {
      // If no token or user is not a student, redirect to sign in
      if (!token || !token.email?.endsWith("@tcetmumbai.in")) {
        const signInUrl = new URL("/auth/signin", req.url)
        signInUrl.searchParams.set("callbackUrl", req.url)
        return NextResponse.redirect(signInUrl)
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl
        
        // Allow access to public routes
        if (!pathname.startsWith("/students") && !pathname.startsWith("/resources")) {
          return true
        }

        // For protected routes, check if user has valid TCET email
        return !!(token?.email?.endsWith("@tcetmumbai.in"))
      },
    },
  }
)

export const config = {
  matcher: ["/students/:path*", "/resources/:path*"]
}
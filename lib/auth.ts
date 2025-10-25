import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the user's email domain is @tcetmumbai.in
      if (user.email && user.email.endsWith("@tcetmumbai.in")) {
        return true
      }
      // Deny access for users with other email domains
      return false
    },
    async session({ session, token }) {
      // Add any additional user information to the session
      if (session.user?.email) {
        session.user.isStudent = session.user.email.endsWith("@tcetmumbai.in")
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
      }
      return token
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
}
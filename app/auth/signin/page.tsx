"use client"

import { signIn, getSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Shield, Users } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function SignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/students"
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user is already signed in
    getSession().then((session) => {
      if (session?.user?.email?.endsWith("@tcetmumbai.in")) {
        router.push(callbackUrl)
      }
    })
  }, [callbackUrl, router])

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("google", {
        callbackUrl,
        redirect: true,
      })
    } catch (error) {
      console.error("Sign in error:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              <img
                src="/axios.jpeg"
                alt="AXIOS"
                className="rounded-lg object-contain shadow-sm"
                style={{ height: "50px", width: "50px" }}
              />
              <img
                src="/edic.jpeg"
                alt="EDIC"
                className="rounded-lg object-contain shadow-sm"
                style={{ height: "50px", width: "50px" }}
              />
              <img
                src="/tcet.jpg"
                alt="TCET"
                className="rounded-lg object-contain shadow-sm"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            EDIC TCET Student Portal
          </h1>
          <p className="text-muted-foreground">
            Access exclusive student resources and facilities
          </p>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Student Access Required
            </CardTitle>
            <CardDescription>
              Sign in with your TCET email (@tcetmumbai.in) to access student resources
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Only @tcetmumbai.in email addresses are allowed</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <Users className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Access to exclusive student resources and events</span>
              </div>
            </div>
            
            <Button
              onClick={handleSignIn}
              disabled={isLoading}
              size="lg"
              className="w-full"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Sign in with Google
                </div>
              )}
            </Button>

            <div className="text-center pt-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>
            By signing in, you agree to access student resources responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
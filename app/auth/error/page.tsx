"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "AccessDenied":
        return {
          title: "Access Denied",
          message: "Only students with @tcetmumbai.in email addresses can access the student portal.",
          suggestion: "Please sign in with your official TCET email address."
        }
      case "Configuration":
        return {
          title: "Configuration Error",
          message: "There's a problem with the authentication configuration.",
          suggestion: "Please contact the administrator if this problem persists."
        }
      default:
        return {
          title: "Authentication Error",
          message: "An unexpected error occurred during sign in.",
          suggestion: "Please try signing in again."
        }
    }
  }

  const errorInfo = getErrorMessage(error)

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
        </div>

        <Card className="shadow-lg border-destructive/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              {errorInfo.title}
            </CardTitle>
            <CardDescription>
              {errorInfo.message}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-destructive mb-1">
                    TCET Students Only
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {errorInfo.suggestion}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link href="/auth/signin">
                  Try Again
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>
            Need help? Contact the EDIC team at{" "}
            <a href="mailto:tcetedic@tcetmumbai.in" className="text-primary hover:underline">
              tcetedic@tcetmumbai.in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
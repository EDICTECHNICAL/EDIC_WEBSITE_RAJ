"use client"

import { useSession } from "next-auth/react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Lightbulb, Users, Wrench, Linkedin, Building, Shield, Mail, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"
import alumniData from "@/data/alumni.json"

const forms = [
  {
    id: 1,
    title: "EDIC Membership Form",
    description: "Join the EDIC community and get access to exclusive events, resources, and mentorship opportunities.",
    icon: Users,
    link: "https://forms.gle/f3BJF2shNn66bYX57",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Submit Startup Idea",
    description:
      "Share your innovative startup idea with our expert panel for feedback and potential incubation support.",
    icon: Lightbulb,
    link: "https://forms.gle/scWb3VR7HZPqMd6v7",
    color: "bg-accent",
  },
  {
    id: 3,
    title: "Request Mentorship",
    description: "Connect with industry experts and successful entrepreneurs for personalized guidance and mentorship.",
    icon: Users,
    link: "https://forms.gle/7mVizTDqVHzcnWdC9",
    color: "bg-primary",
  },
  {
    id: 4,
    title: "Request Lab Resources",
    description: "Access our state-of-the-art lab equipment and facilities for your innovative projects and research.",
    icon: Wrench,
    link: "https://forms.gle/yxzYjWATc5Fj9uuy8",
    color: "bg-accent",
  },
]

const studentFeatures = [
  {
    icon: BookOpen,
    title: "Exclusive Learning Materials",
    description: "Access curated entrepreneurship courses, case studies, and industry reports available only to TCET students."
  },
  {
    icon: Calendar,
    title: "Priority Event Registration",
    description: "Get early access to workshops, seminars, and networking events with guaranteed seats for registered students."
  },
  {
    icon: Users,
    title: "Mentor Connect Program",
    description: "Direct access to our network of successful alumni and industry mentors for personalized guidance."
  },
  {
    icon: Wrench,
    title: "Innovation Lab Access",
    description: "24/7 access to our state-of-the-art innovation labs, 3D printers, and prototyping facilities."
  }
]

export default function StudentsPage() {
  const { data: session, status } = useSession()
  
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading student portal...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Welcome Section for Authenticated Students */}
      {session?.user?.email?.endsWith("@tcetmumbai.in") && (
        <section className="py-6 bg-primary/5 border-b border-primary/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-primary">
                Welcome back, {session.user.name?.split(" ")[0]}! You're logged in with {session.user.email}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              {session?.user?.email?.endsWith("@tcetmumbai.in") ? "TCET Student Portal" : "Student's Corner"}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              {session?.user?.email?.endsWith("@tcetmumbai.in") 
                ? "Your Gateway to Innovation" 
                : "Student Access Required"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              {session?.user?.email?.endsWith("@tcetmumbai.in")
                ? "Access exclusive resources, connect with mentors, submit your ideas, and join a thriving community of student entrepreneurs and innovators."
                : "Sign in with your TCET email (@tcetmumbai.in) to access exclusive student resources and features."}
            </p>
          </div>
        </div>
      </section>

      {/* Student-Only Features Section */}
      {session?.user?.email?.endsWith("@tcetmumbai.in") && (
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Exclusive Student Benefits</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                These resources and services are available exclusively to authenticated TCET students
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {studentFeatures.map((feature, index) => (
                <Card key={index} className="border-primary/20 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mb-4">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Forms Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get Started Today</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Take the first step towards your entrepreneurial journey with these essential forms
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {forms.map((form) => (
              <Card key={form.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${form.color} flex-shrink-0`}
                    >
                      <form.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{form.title}</h3>
                      <p className="text-muted-foreground mb-4 text-pretty">{form.description}</p>
                      <Button
                        asChild
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <Link href={form.link} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />
                          Open Form
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Alumni Network</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Connect with successful entrepreneurs who started their journey at EDIC TCET
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {alumniData.alumni.map((alumni) => (
              <Card key={alumni.id} className="border-0 shadow-md hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{alumni.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-primary">{alumni.startup}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <Link href={alumni.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {alumni.industry}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Founded {alumni.foundedYear}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground text-pretty">{alumni.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Join thousands of students who have transformed their ideas into successful ventures through EDIC TCET.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link
                  href="https://forms.gle/f3BJF2shNn66bYX57"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

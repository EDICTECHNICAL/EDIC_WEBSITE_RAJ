import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import teamData from "@/data/team.json"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 border-b border-primary/20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/modern-office-collaboration.png"
            alt="EDIC Team Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-primary/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20 entrepreneurship-shadow"
            >
              Meet Our Team
            </Badge>
            <h1 className="responsive-text-5xl font-bold tracking-tight text-foreground text-balance">
              The Minds Behind <span className="text-primary">Innovation</span>
            </h1>
            <p className="mt-6 responsive-text-lg leading-8 text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our diverse team of faculty coordinators, student leaders, and passionate innovators work together to
              create an ecosystem where entrepreneurship thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="responsive-text-4xl font-bold tracking-tight text-foreground text-balance">
              Faculty <span className="text-primary">Coordinators</span>
            </h2>
            <p className="mt-4 responsive-text-lg leading-8 text-muted-foreground text-pretty">
              Experienced educators guiding our entrepreneurial initiatives
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.facultyCoordinators.map((faculty) => (
              <Card
                key={faculty.id}
                className="border border-primary/20 entrepreneurship-shadow-md hover:entrepreneurship-shadow-lg hover:border-primary/40 transition-all duration-300 group bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={
                        faculty.photo ||
                        "/placeholder.svg?height=128&width=128&query=professional faculty member portrait" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={faculty.name}
                      className="mx-auto h-32 w-32 rounded-full object-cover entrepreneurship-shadow border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    />
                  </div>
                  <h3 className="responsive-text-lg font-semibold text-foreground">{faculty.name}</h3>
                  <Badge variant="outline" className="mt-2 mb-4 border-primary/30 text-primary bg-primary/5">
                    {faculty.branch}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent entrepreneurship-shadow border-primary/30 text-primary hover:border-primary"
                  >
                    <Link href={faculty.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 sm:py-32 bg-primary/5 border-y border-primary/10 team-bg-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="responsive-text-4xl font-bold tracking-tight text-foreground text-balance">
              Core <span className="text-primary">Team</span>
            </h2>
            <p className="mt-4 responsive-text-lg leading-8 text-muted-foreground text-pretty">
              Student leaders driving innovation and entrepreneurship at TCET
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.coreTeam.map((member) => (
              <Card
                key={member.id}
                className="border border-primary/20 entrepreneurship-shadow-md hover:entrepreneurship-shadow-lg hover:border-primary/40 transition-all duration-300 group bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={
                        member.photo ||
                        "/placeholder.svg?height=96&width=96&query=professional student leader portrait" ||
                        "/placeholder.svg"
                      }
                      alt={member.name}
                      className="mx-auto h-24 w-24 rounded-full object-cover entrepreneurship-shadow border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    />
                  </div>
                  <h4 className="responsive-text-lg font-semibold text-foreground">{member.name}</h4>
                  <Badge className="mt-1 mb-2 bg-primary text-primary-foreground entrepreneurship-shadow">
                    {member.role}
                  </Badge>
                  <p className="responsive-text-sm text-muted-foreground mb-1">{member.branch}</p>
                  <p className="responsive-text-sm text-muted-foreground mb-3">{member.year}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent entrepreneurship-shadow border-primary/30 text-primary hover:border-primary"
                  >
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Core Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="responsive-text-4xl font-bold tracking-tight text-foreground text-balance">
              Junior Core <span className="text-primary">Team</span>
            </h2>
            <p className="mt-4 responsive-text-lg leading-8 text-muted-foreground text-pretty">
              Rising stars contributing to our mission with fresh perspectives
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.juniorCoreTeam.map((member) => (
              <Card
                key={member.id}
                className="border border-primary/20 entrepreneurship-shadow hover:entrepreneurship-shadow-md hover:border-primary/40 transition-all duration-300 group bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={
                        member.photo || "/placeholder.svg?height=96&width=96&query=young professional student portrait"
                      }
                      alt={member.name}
                      className="mx-auto h-24 w-24 rounded-full object-cover entrepreneurship-shadow border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    />
                  </div>
                  <h3 className="responsive-text-base font-semibold text-foreground">{member.name}</h3>
                  <Badge
                    variant="secondary"
                    className="mt-1 mb-2 text-xs entrepreneurship-shadow bg-primary/10 text-primary border-primary/20"
                  >
                    {member.role}
                  </Badge>
                  <p className="responsive-text-sm text-muted-foreground mb-1 truncate">{member.branch}</p>
                  <p className="responsive-text-sm text-muted-foreground mb-3">{member.year}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent entrepreneurship-shadow border-primary/30 text-primary hover:border-primary"
                  >
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-3 w-3 mr-1" />
                      <span className="text-xs">Connect</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="responsive-text-4xl font-bold tracking-tight text-foreground text-balance">
              Want to Join Our <span className="text-primary">Team</span>?
            </h2>
            <p className="mt-6 responsive-text-lg leading-8 text-muted-foreground text-pretty max-w-xl mx-auto">
              We're always looking for passionate individuals who want to make a difference in the entrepreneurship
              ecosystem.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 entrepreneurship-shadow w-full sm:w-auto"
              >
                <Link href="/students">
                  Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="entrepreneurship-shadow bg-transparent border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary w-full sm:w-auto"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
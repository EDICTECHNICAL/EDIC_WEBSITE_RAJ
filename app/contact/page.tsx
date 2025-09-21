import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"
import teamData from "@/data/team.json"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tcetedic@tcetmumbai.in",
    link: "mailto:tcetedic@tcetmumbai.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 22 6730 8000", // Updated phone number as per college website
    link: "tel:+912267308000",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Thakur College of Engineering and Technology, Kandivali East, Mumbai - 400101",
    // Corrected Google Maps link
    link: "https://maps.app.goo.gl/iBHEtMEnwzMh2c2w9",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday: 9:00 AM - 6:00 PM",
    link: null,
  },
]

// Assuming leadershipTeam logic is correct and teamData.json exists
const leadershipTeam = teamData.coreTeam.filter((member) =>
  ["CEO", "CTO", "CMO", "COO"].includes(member.role)
)

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Let's Build Something Amazing Together
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Have questions about EDIC TCET? Want to collaborate or need support for your entrepreneurial
              journey? We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Contact Information
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Multiple ways to reach us and get the support you need
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{info.label}</h3>
                      {info.link ? (
                        <Link
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors text-pretty"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground text-pretty">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Connect directly with our student leadership team
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((leader) => (
              <Card
                key={leader.id}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow group text-center"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={leader.photo || "/placeholder.svg"}
                      alt={leader.name}
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{leader.name}</h3>
                  <Badge className="mt-2 mb-3 bg-primary text-primary-foreground">{leader.role}</Badge>
                  <p className="text-sm text-muted-foreground mb-1">{leader.branch}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.year}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
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

      {/* Contact Us CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <CardContent className="p-12 text-center">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Ready to Get Started?
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                  Whether you have questions, want to join our community, or need support for your startup
                  idea, we're just one click away.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="mailto:tcetedic@tcetmumbai.in">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/students">
                      Join EDIC <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Visit Our Campus
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Located in the heart of Mumbai, easily accessible by public transport
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 shadow-lg overflow-hidden">
              {/* === MAP FIXED === */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.745839106585!2d72.8720306749808!3d19.206300282025317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1758461619999!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
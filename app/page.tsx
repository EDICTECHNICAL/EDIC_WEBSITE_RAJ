import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Eye, Users, Lightbulb, TrendingUp, Award, Rocket, Building2, Globe } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* === HERO SECTION MODIFIED === */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('/EDIC-CORE-IMAGE.jpg')`, // Assumes image is in /public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Relative container for all content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main text and CTA buttons - Centered within its left-aligned container */}
          <div className="max-w-3xl text-left"> {/* Kept text-left for overall alignment */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
              Entrepreneurship Development & Innovation Cell
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-2xl leading-relaxed">
              Empowering TCET students to transform innovative ideas into successful ventures through mentorship,
              resources, and industry connections.
            </p>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/students">Join EDIC Today</Link>
              </Button>
         <Button
  variant="outline"
  size="lg"
  asChild
  className="text-lg px-8 py-4 bg-transparent text-white border-white hover:bg-white/10"
>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* === REMOVED FLOATING "GLASSMORPHISM" CARD === */}
        </div>
      </section>

      {/* === STATS SECTION === */}
      {/* Adjusted top padding as the floating card is removed */}
      <section className="pt-24 pb-16 bg-primary/5 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students Mentored", icon: Users },
              { number: "50+", label: "Startups Launched", icon: Rocket },
              { number: "₹2Cr+", label: "Funding Raised", icon: TrendingUp },
              { number: "25+", label: "Industry Partners", icon: Globe },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 bg-background entrepreneurship-shadow-md entrepreneurship-hover border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4 entrepreneurship-shadow">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === MISSION & VISION SECTION === */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The core principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-background entrepreneurship-shadow-lg entrepreneurship-hover border-l-4 border-l-primary border-t border-r border-b border-primary/20">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary entrepreneurship-shadow">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="ml-6 text-2xl font-bold text-primary">MISSION</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  To foster entrepreneurship and innovation among students by providing comprehensive support,
                  mentorship, and resources that enable them to transform their ideas into viable business ventures and
                  contribute to economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background entrepreneurship-shadow-lg entrepreneurship-hover border-l-4 border-l-primary border-t border-r border-b border-primary/20">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary entrepreneurship-shadow">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="ml-6 text-2xl font-bold text-primary">VISION</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  To become a leading entrepreneurship development center that produces innovative entrepreneurs who
                  create sustainable businesses, generate employment, and drive technological advancement in society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE EDIC SECTION === */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-y border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose <span className="text-primary">EDIC?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to transform your ideas into successful ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Connect with industry experts and successful entrepreneurs who guide your journey.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Labs",
                description: "Access state-of-the-art facilities and resources to bring your ideas to life.",
              },
              {
                icon: TrendingUp,
                title: "Business Development",
                description: "Comprehensive support from ideation to market launch and scaling.",
              },
              {
                icon: Award,
                title: "Recognition Programs",
                description: "Showcase your innovations through competitions and recognition events.",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Join a thriving community of successful entrepreneurs and innovators worldwide.",
              },
              {
                icon: Building2,
                title: "Incubation Support",
                description: "Complete infrastructure and guidance to nurture your startup from concept to market.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-background entrepreneurship-shadow-md entrepreneurship-hover border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary mb-6 entrepreneurship-shadow">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 text-pretty">
            Join EDIC TCET today and transform your innovative ideas into successful ventures that change the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-12 py-4 bg-background text-primary hover:bg-background/90 entrepreneurship-shadow-lg"
            >
              <Link href="/students">
                Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-12 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
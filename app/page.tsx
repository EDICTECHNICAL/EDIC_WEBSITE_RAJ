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

      {/* === HERO SECTION OPTIMIZED === */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('every.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Adds parallax effect on desktop
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Mobile-first responsive container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left">
            {/* Responsive heading with better mobile sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 text-balance leading-tight">
              Entrepreneurship Development & Innovation Cell
            </h1>

            {/* Responsive description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-relaxed">
              Empowering TCET students to transform innovative ideas into successful ventures through mentorship,
              resources, and industry connections.
            </p>

            {/* Mobile-optimized button layout */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Link href="/students">Join EDIC Today</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* === STATS SECTION OPTIMIZED === */}
      <section className="pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 bg-primary/5 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "500+", label: "Students Mentored", icon: Users },
              { number: "50+", label: "Startups Launched", icon: Rocket },
              { number: "₹2Cr+", label: "Funding Raised", icon: TrendingUp },
              { number: "25+", label: "Industry Partners", icon: Globe },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-4 sm:p-6 lg:p-8 bg-background shadow-md hover:shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-xl mb-3 sm:mb-4 shadow-sm">
                    <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary-foreground" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium leading-tight">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === MISSION & VISION SECTION OPTIMIZED === */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Our <span className="text-primary">Mission & Vision</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The core principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <Card className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-primary border-t border-r border-b border-primary/20">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl bg-primary shadow-sm">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary-foreground" />
                  </div>
                  <h3 className="ml-4 sm:ml-6 text-xl sm:text-2xl font-bold text-primary">MISSION</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty">
                  To foster entrepreneurship and innovation among students by providing comprehensive support,
                  mentorship, and resources that enable them to transform their ideas into viable business ventures and
                  contribute to economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-primary border-t border-r border-b border-primary/20">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl bg-primary shadow-sm">
                    <Eye className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary-foreground" />
                  </div>
                  <h3 className="ml-4 sm:ml-6 text-xl sm:text-2xl font-bold text-primary">VISION</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground text-pretty">
                  To become a leading entrepreneurship development center that produces innovative entrepreneurs who
                  create sustainable businesses, generate employment, and drive technological advancement in society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE EDIC SECTION OPTIMIZED === */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-y border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Why Choose <span className="text-primary">EDIC?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to transform your ideas into successful ventures
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                className="bg-background shadow-md hover:shadow-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl bg-primary mb-4 sm:mb-6 shadow-sm">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION OPTIMIZED === */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto opacity-90 text-pretty">
            Join EDIC TCET today and transform your innovative ideas into successful ventures that change the world.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 w-full sm:w-auto bg-background text-primary hover:bg-background/90 shadow-lg"
            >
              <Link href="/students">
                Join the Revolution <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
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
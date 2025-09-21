"use client"

import { useState, useMemo } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import eventsData from "@/data/events.json"

type EventFilter = "all" | "upcoming" | "past"

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all")

  const allEvents = [...eventsData.upcomingEvents, ...eventsData.pastEvents]

  const filteredEvents = useMemo(() => {
    switch (activeFilter) {
      case "upcoming":
        return eventsData.upcomingEvents
      case "past":
        return eventsData.pastEvents
      default:
        return allEvents
    }
  }, [activeFilter])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isUpcoming = (event: any) => {
    return eventsData.upcomingEvents.some((e) => e.id === event.id)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 border-b border-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Events & Workshops
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Fuel Your <span className="text-primary">Entrepreneurial</span> Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Join us for exciting events, workshops, and networking opportunities designed to accelerate your path to
              entrepreneurial success.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value as EventFilter)}>
              <TabsList className="grid w-full grid-cols-3 bg-primary/5 border border-primary/20">
                <TabsTrigger
                  value="upcoming"
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Upcoming ({eventsData.upcomingEvents.length})
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Past ({eventsData.pastEvents.length})
                </TabsTrigger>
                <TabsTrigger
                  value="all"
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All Events ({allEvents.length})
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden border-b border-primary/10">
                  <img
                    src={event.poster || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={isUpcoming(event) ? "default" : "secondary"}
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {event.category}
                    </Badge>
                    {isUpcoming(event) && (
                      <Badge className="bg-primary text-primary-foreground text-xs">Upcoming</Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">{event.title}</h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    {!isUpcoming(event) && "attendees" in event && (
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 text-pretty">{event.description}</p>

                  {isUpcoming(event) && "registrationLink" in event && (
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 shadow-sm">
                      <Link href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {!isUpcoming(event) && (
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-primary/30 text-muted-foreground"
                      disabled
                    >
                      Event Completed
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Don't Miss Our Next <span className="text-primary">Event</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Stay updated with our latest events and workshops. Follow us on social media or join our newsletter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-sm">
                <Link href="/students">
                  Join EDIC <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
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

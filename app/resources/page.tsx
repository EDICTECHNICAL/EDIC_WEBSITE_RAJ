"use client"

import { useState, useMemo } from "react"
import { useSession } from "next-auth/react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Wrench, CheckCircle, Clock, Shield, Lock, BookOpen, Download, FileText } from "lucide-react"
import resourcesData from "@/data/resources.json"
import Link from "next/link"

const exclusiveResources = [
  {
    id: 1,
    title: "Entrepreneurship Masterclass Series",
    description: "20+ hours of recorded sessions with industry leaders and successful entrepreneurs.",
    type: "Video Course",
    icon: BookOpen
  },
  {
    id: 2,
    title: "Business Plan Templates",
    description: "Professional templates used by successful TCET alumni for their startups.",
    type: "Documents",
    icon: FileText
  },
  {
    id: 3,
    title: "Industry Reports & Case Studies",
    description: "Latest market research and startup case studies from various industries.",
    type: "Research",
    icon: Download
  },
  {
    id: 4,
    title: "Mentor Connect Directory",
    description: "Direct contact information and scheduling access to 50+ industry mentors.",
    type: "Directory",
    icon: Shield
  }
]

export default function ResourcesPage() {
  const { data: session, status } = useSession()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLab, setSelectedLab] = useState("all")

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading resources...</p>
        </div>
      </div>
    )
  }

  // Get unique labs for filter
  const labs = useMemo(() => {
    const uniqueLabs = [...new Set(resourcesData.labResources.map((resource) => resource.lab))]
    return uniqueLabs.sort()
  }, [])

  // Filter resources based on search and lab selection
  const filteredResources = useMemo(() => {
    return resourcesData.labResources.filter((resource) => {
      const matchesSearch =
        resource.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.lab.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesLab = selectedLab === "all" || resource.lab === selectedLab

      return matchesSearch && matchesLab
    })
  }, [searchTerm, selectedLab])

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case "Available":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "In Use":
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200"
      case "In Use":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
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
                Welcome back, {session.user.name?.split(" ")[0]}! You have full access to all resources.
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
              {session?.user?.email?.endsWith("@tcetmumbai.in") ? "TCET Student Resources" : "Lab Resources"}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              {session?.user?.email?.endsWith("@tcetmumbai.in") 
                ? "Complete Resource Access" 
                : "Limited Resource Access"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              {session?.user?.email?.endsWith("@tcetmumbai.in")
                ? "Access cutting-edge equipment and exclusive learning materials across our specialized labs to bring your innovative ideas to life."
                : "Sign in with your TCET email (@tcetmumbai.in) to access all resources including restricted materials and lab equipment."}
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive Resources Section - Only visible to authenticated students */}
      {session?.user?.email?.endsWith("@tcetmumbai.in") && (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                <Lock className="h-3 w-3 mr-1" />
                TCET Students Only
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Exclusive Learning Resources</h2>
              <p className="mt-4 text-muted-foreground">
                Premium content available only to authenticated TCET students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exclusiveResources.map((resource) => (
                <Card key={resource.id} className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mb-4">
                      <resource.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{resource.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-pretty">{resource.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Access Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search equipment, models, or labs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Lab Filter */}
              <div className="sm:w-64">
                <Select value={selectedLab} onValueChange={setSelectedLab}>
                  <SelectTrigger>
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by lab" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Labs</SelectItem>
                    {labs.map((lab) => (
                      <SelectItem key={lab} value={lab}>
                        {lab}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {filteredResources.length} of {resourcesData.labResources.length} resources
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Wrench className="h-5 w-5 text-primary" />
                        <Badge variant="outline" className="text-xs">
                          {resource.lab}
                        </Badge>
                      </div>
                      <div
                        className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs border ${getAvailabilityColor(resource.availability)}`}
                      >
                        {getAvailabilityIcon(resource.availability)}
                        <span>{resource.availability}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{resource.item}</h3>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Model:</span> {resource.model}
                      </div>
                      <div>
                        <span className="font-medium">Quantity:</span> {resource.quantity}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Wrench className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Resource Overview</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Comprehensive facilities across multiple specialized laboratories
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary">{labs.length}</div>
                <div className="mt-2 text-sm text-muted-foreground">Specialized Labs</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary">{resourcesData.labResources.length}</div>
                <div className="mt-2 text-sm text-muted-foreground">Total Equipment</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent">
                  {resourcesData.labResources.filter((r) => r.availability === "Available").length}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Available Now</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="mt-2 text-sm text-muted-foreground">Access Hours</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

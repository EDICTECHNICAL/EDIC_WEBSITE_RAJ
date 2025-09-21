"use client"

import { useState, useMemo } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Wrench, CheckCircle, Clock } from "lucide-react"
import resourcesData from "@/data/resources.json"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLab, setSelectedLab] = useState("all")

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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Lab Resources
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              State-of-the-Art Facilities
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Access cutting-edge equipment and resources across our specialized labs to bring your innovative ideas to
              life.
            </p>
          </div>
        </div>
      </section>

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

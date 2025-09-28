"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Student's Corner", href: "/students" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      } border-b border-border`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 lg:px-8 lg:py-6" aria-label="Global">
        {/* Logo Section - Optimized for mobile */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">EDIC TCET</span>
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Mobile-optimized logos */}
              <div className="flex space-x-1 sm:space-x-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="axios.jpeg"
                  alt="AXIOS"
                  className="rounded-lg object-contain shadow-sm"
                  style={{ height: "32px", width: "32px" }} // Smaller for mobile
                />
                <img
                  src="edic.jpeg"
                  alt="EDIC"
                  className="rounded-lg object-contain shadow-sm"
                  style={{ height: "32px", width: "32px" }}
                />
              </div>

              {/* Text logo - hidden on very small screens, shown on sm+ */}
              <div className="hidden xs:block sm:block">
                <div className="text-sm sm:text-lg lg:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                  EDIC TCET
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Innovation & Entrepreneurship</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md hover:bg-primary/10 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm xl:text-base font-semibold leading-7 text-foreground hover:text-primary transition-all duration-300 relative group py-2"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu overlay and panel */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-4 py-4 sm:max-w-sm sm:px-6 shadow-xl border-l border-border lg:hidden">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between mb-6">
              <Link 
                href="/" 
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">EDIC TCET</span>
                <div className="flex items-center space-x-3">
                  <img
                    src="axios.jpeg"
                    alt="AXIOS"
                    className="rounded-lg object-contain shadow-sm"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <img
                    src="edic.jpeg"
                    alt="EDIC"
                    className="rounded-lg object-contain shadow-sm"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <span className="text-lg font-bold text-foreground">EDIC TCET</span>
                </div>
              </Link>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile navigation links */}
            <div className="flow-root">
              <div className="divide-y divide-border">
                <div className="space-y-1 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Additional mobile menu content */}
                <div className="py-4">
                  <div className="px-3 py-2">
                    <p className="text-xs text-muted-foreground">
                      Innovation & Entrepreneurship Cell
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Thakur College of Engineering and Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

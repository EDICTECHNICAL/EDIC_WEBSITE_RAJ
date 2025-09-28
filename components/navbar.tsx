"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Students", href: "/students" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
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
      className={`sticky top-0 z-50 transition-all duration-300 navbar-slide-in ${
        scrolled
          ? "navbar-glass entrepreneurship-shadow-md"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      } border-b border-border`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">EDIC TCET</span>
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2 group-hover:scale-110 transition-transform duration-300 entrepreneurship-shadow">
                {/* Using inline styles for exact size */}
                <img
                  src="axios.jpeg"
                  alt="AXIOS"
                  className="rounded-lg object-contain"
                  style={{ height: "150px", width: "150px" }} // equivalent to h-16 w-16
                />
                <img
                  src="edic.jpeg"
                  alt="EDIC"
                  className="rounded-lg object-contain"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>

              <div className="hidden sm:block">
                <div className="responsive-text-xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                  EDIC TCET
                </div>
                <div className="text-sm text-muted-foreground">Innovation & Entrepreneurship</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-primary/10 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="responsive-text-md font-semibold leading-7 text-foreground hover:text-primary transition-all duration-300 relative group"
              style={{ fontSize: "1.125rem" }} // 18px size, bigger than default
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm entrepreneurship-shadow-lg border-l border-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EDIC TCET</span>
                <div className="flex items-center space-x-3">
                  {/* Larger logos in mobile menu */}
                  <img
                    src="axios.jpeg"
                    alt="AXIOS"
                    className="rounded-lg object-contain"
                    style={{ height: "48px", width: "48px" }}
                  />
                  <img
                    src="edic.jpeg"
                    alt="EDIC"
                    className="rounded-lg object-contain"
                    style={{ height: "48px", width: "48px" }}
                  />
                  <span className="text-xl font-bold text-foreground">EDIC TCET</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-medium leading-7 text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
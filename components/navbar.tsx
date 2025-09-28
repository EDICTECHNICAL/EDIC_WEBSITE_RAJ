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

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        } border-b border-border`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 lg:px-8 lg:py-6" aria-label="Global">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">EDIC TCET</span>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="axios.jpeg"
                    alt="AXIOS"
                    className="rounded-lg object-contain shadow-sm"
                    style={{ height: "28px", width: "28px" }}
                  />
                  <img
                    src="edic.jpeg"
                    alt="EDIC"
                    className="rounded-lg object-contain shadow-sm"
                    style={{ height: "28px", width: "28px" }}
                  />
                </div>
                <div className="hidden xs:block">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    EDIC
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
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
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
            >
              <span className="truncate w-full text-center leading-tight">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1 px-2 pb-2">
          {navigation.slice(4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
            >
              <span className="truncate w-full text-center leading-tight">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scrollable Navigation (Alternative Option) */}
      <div className="lg:hidden sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide px-4 py-3 space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex-shrink-0 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap py-1 px-2 rounded-md hover:bg-primary/5"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Add bottom padding to body content to account for bottom nav */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          body {
            padding-bottom: 80px;
          }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react"

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
  const { data: session, status } = useSession()
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
                <div className="flex space-x-2 group-hover:scale-105 transition-transform duration-300">
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
                  <img
                    src="tcet.jpg"
                    alt="TCET"
                    className="rounded-lg object-contain shadow-sm"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="hidden xs:block">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    EDIC TCET
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 lg:items-center">
            {navigation.map((item) => {
              // Show protected routes only to authenticated users
              if ((item.href === "/students" || item.href === "/resources") && !session?.user?.email?.endsWith("@tcetmumbai.in")) {
                return null
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base font-semibold leading-7 text-foreground hover:text-primary transition-all duration-300 relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            })}
            
            {/* Authentication Button */}
            <div className="ml-4">
              {status === "loading" ? (
                <div className="h-9 w-20 bg-muted animate-pulse rounded-md" />
              ) : session?.user?.email?.endsWith("@tcetmumbai.in") ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {session.user.name?.split(" ")[0] || "Student"}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => signOut()}
                    className="flex items-center gap-1"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => signIn()}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Student Login
                </Button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Horizontal Scrollable Navigation */}
      <div className="lg:hidden sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide px-4 py-3 space-x-6">
          {navigation.map((item) => {
            // Show protected routes only to authenticated users on mobile too
            if ((item.href === "/students" || item.href === "/resources") && !session?.user?.email?.endsWith("@tcetmumbai.in")) {
              return null
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex-shrink-0 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap py-1 px-2 rounded-md hover:bg-primary/5"
              >
                {item.name}
              </Link>
            )
          })}
          
          {/* Mobile Authentication */}
          {status !== "loading" && (
            <div className="flex-shrink-0">
              {session?.user?.email?.endsWith("@tcetmumbai.in") ? (
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap py-1 px-2 rounded-md hover:bg-primary/5"
                >
                  <LogOut className="h-3 w-3" />
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap py-1 px-2 rounded-md hover:bg-primary/5"
                >
                  <User className="h-3 w-3" />
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
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
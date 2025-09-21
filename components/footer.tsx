import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Student's Corner", href: "/students" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/edic-tcet",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:tcetedic@tcetmumbai.in",
      icon: Mail,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <Button key={item.name} variant="ghost" size="sm" asChild>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">EDIC TCET</div>
              <div className="text-xs text-muted-foreground">Innovation & Entrepreneurship</div>
            </div>
          </div>
          <p className="text-center text-xs leading-5 text-muted-foreground md:text-left">
            &copy; 2024 EDIC TCET. Fostering innovation and entrepreneurship at Thakur College of Engineering and
            Technology.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

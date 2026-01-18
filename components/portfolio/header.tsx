"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Briefcase, Award, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Experiências", href: "#experiencias", icon: Briefcase },
  { label: "GitHub", href: "#github", icon: Github },
  { label: "Certificados", href: "#certificados", icon: Award },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullName = "Mateus Juan"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/169060996?s=400&u=60b4809998126d5a22c843c47396eaacd9b326a9&v=4"
                alt="Mateus Juan"
                className="w-10 h-10 rounded-full ring-2 ring-primary/50"
              />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              {typedText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

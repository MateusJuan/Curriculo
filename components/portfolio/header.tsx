"use client"

type HeaderProps = {
  locale: "pt" | "en"
}

import { useState, useEffect } from "react"
import { Menu, X, Home, Briefcase, Award, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Experiências", href: "#experiencias", icon: Briefcase },
  { label: "GitHub", href: "#github", icon: Github },
  { label: "Certificados", href: "#certificados", icon: Award },
]

const languages = [
  { code: "pt", label: "Português", flag: "/flags/br.png" },
  { code: "en", label: "English", flag: "/flags/us.png" },
]

export function Header({ locale }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [langOpen, setLangOpen] = useState(false)

  const fullName = "Mateus Juan"

  const router = useRouter()
  const pathname = usePathname()

  const currentLang: "pt" | "en" = locale ?? "pt"
  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ================= TYPING ================= */
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullName.length) {
        setTypedText(fullName.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const changeLanguage = (lang: "pt" | "en") => {
    const segments = pathname.split("/")
    segments[1] = lang
    router.push(segments.join("/"))
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="https://avatars.githubusercontent.com/u/169060996"
            alt="Mateus Juan"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-primary/50"
          />
          <span className="text-lg font-semibold">
            {typedText}
            <span className="text-primary animate-pulse">|</span>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-secondary/50"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* LANGUAGE SWITCH */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50"
            >
              <Image
                src={
                  currentLang === "pt"
                    ? "/flags/br.png"
                    : "/flags/us.png"
                }
                alt="Idioma"
                width={20}
                height={14}
              />
              <span className="text-sm">{currentLang.toUpperCase()}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-background border rounded-lg shadow-lg overflow-hidden">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code as "pt" | "en")
                      setLangOpen(false)
                    }}
                    className={cn(
                      "flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-secondary",
                      currentLang === lang.code && "bg-secondary"
                    )}
                  >
                    <Image
                      src={lang.flag}
                      alt={lang.label}
                      width={20}
                      height={14}
                    />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

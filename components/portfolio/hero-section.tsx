"use client"

import { useEffect, useState } from "react"
import { ArrowDown, MapPin } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function HeroSection() {
  const [age, setAge] = useState(0)
  const { t, lang } = useTranslation()

  useEffect(() => {
    const birthDate = new Date("2008-01-24")
    const today = new Date()

    let calculatedAge = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--
    }

    setAge(calculatedAge)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Avatar */}
        <div className="relative inline-block mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/169060996"
            alt="Mateus Juan"
            className="w-32 h-32 rounded-full ring-4 ring-primary/30 shadow-2xl mx-auto"
          />
        </div>

        {/* Nome */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-foreground">{t.apresentacao}</span>{" "}
          <span className="gradient-text glow-text">{t.nome}</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-6">
          {t.cargo}
        </p>

        <div className="flex justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span>
            {age} {t.anos} • {t.pais}
          </span>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          {t.bio}
        </p>

        <a
          href="#experiencias"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:scale-105 transition"
        >
          {t.cta}
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

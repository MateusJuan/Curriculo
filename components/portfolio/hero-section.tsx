"use client"

import { useEffect, useState } from "react"
import { ArrowDown, MapPin } from "lucide-react"

export function HeroSection() {
  const [age, setAge] = useState(0)

  useEffect(() => {
    const birthDate = new Date("2008-01-24")
    const today = new Date()
    let calculatedAge = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--
    }
    setAge(calculatedAge)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 grid-pattern"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
          <img
            src="https://avatars.githubusercontent.com/u/169060996?s=400&u=60b4809998126d5a22c843c47396eaacd9b326a9&v=4"
            alt="Mateus Juan"
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full ring-4 ring-primary/30 shadow-2xl"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full ring-4 ring-background flex items-center justify-center">
            <span className="text-xs">✓</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-foreground">Olá, sou </span>
          <span className="gradient-text glow-text">Mateus Juan</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
          Full Stack Developer
        </p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{age} anos • Brasil</span>
        </div>

        {/* Bio */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Desenvolvedor apaixonado por criar experiências digitais incríveis. 
          Atualmente focado em desenvolvimento mobile com React Native e backend com Node.js.
        </p>

        {/* CTA */}
        <a
          href="#experiencias"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:scale-105 glow"
        >
          Ver meus projetos
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

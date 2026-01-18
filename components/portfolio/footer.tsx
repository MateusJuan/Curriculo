"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MateusJuan",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mateus-juan-09b9b2298",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:devmatewx@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold gradient-text">Mateus Juan</span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Todos os direitos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Made with */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>e muita paciência</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

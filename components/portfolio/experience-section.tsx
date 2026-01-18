"use client"

import { ExternalLink, Github, Smartphone, Globe, Server } from "lucide-react"

const projects = [
  {
    title: "Sistema de Escalas",
    description:
      "Aplicativo para dispositivos móveis (iOS e Android) e aplicação WEB que facilita a comunicação e organização de eventos e cultos para membros da igreja. Projeto desenvolvido de forma independente para criar experiências aprofundadas em desenvolvimento FrontEnd e BackEnd.",
    technologies: [
      { name: "React Native", icon: Smartphone },
      { name: "Node.js", icon: Server },
      { name: "Supabase", icon: Globe },
    ],
    links: {
      github: "https://github.com/MateusJuan/EscalasIASD",
      live: "https://escalasiasdweb-1.onrender.com/"
    },
    status: "Em desenvolvimento",
    highlights: [
      "Backend hospedado no Render",
      "Banco de dados Supabase",
      "Builds via EAS",
      "Testado por usuários reais",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencias" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Experiências</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos que desenvolvi para aprimorar minhas habilidades e criar soluções reais
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary" />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Ver Site</span>
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg"
                    >
                      <tech.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { ExternalLink, Github, Smartphone, Globe, Server } from "lucide-react"

import { useTranslation } from "@/hooks/useTranslation"

export function ExperienceSection() {
  const { t, lang } = useTranslation()

  const projects = [
  {
    title: t.expeciencias.Escalas.titulo,
    description:
      t.expeciencias.Escalas.descricao,
    technologies: [
      { name: "React Native", icon: Smartphone },
      { name: "Node.js", icon: Globe },
      { name: "supabase", icon: Server },
    ],
    links: {
      github: "https://github.com/MateusJuan/EscalasIASD",
      live: "https://escalas-web.vercel.app/"
    },
    status: t.expeciencias.Escalas.status,
    contributors: [],
    highlights: [
      t.expeciencias.Escalas.highlights[0],
      t.expeciencias.Escalas.highlights[1],
      t.expeciencias.Escalas.highlights[2],
      t.expeciencias.Escalas.highlights[3],
      t.expeciencias.Escalas.highlights[4],
      t.expeciencias.Escalas.highlights[5],
    ],
  },
  {
    title: t.expeciencias["Portifólio Pessoal"].titulo,
    description:
      t.expeciencias["Portifólio Pessoal"].descricao,
    technologies: [
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Globe },
      { name: "TypeScript", icon: Globe },
    ],
    links: {
      github:"https://github.com/MateusJuan/curriculo",
      live: "/"
    },
    status: t.expeciencias["Portifólio Pessoal"].status,
    contributors: [],
    highlights: [
      t.expeciencias["Portifólio Pessoal"].highlights[0],
      t.expeciencias["Portifólio Pessoal"].highlights[1],
      t.expeciencias["Portifólio Pessoal"].highlights[2],
      t.expeciencias["Portifólio Pessoal"].highlights[3],
      t.expeciencias["Portifólio Pessoal"].highlights[4],
    ],
  },
  {
    title: t.expeciencias["App de vendas de E-commerce"].titulo,
    description:
      t.expeciencias["App de vendas de E-commerce"].descricao,
    technologies: [
      { name: "React Native", icon: Smartphone },
      { name: "Node.js", icon: Globe },
      { name: "supabase", icon: Server },
    ],
    links: {
      github: "https://github.com/onnMarket/on-Markett",
      live: null
    },
    status: t.expeciencias["App de vendas de E-commerce"].status,
    contributors: [
      {
        name: "Eliel Peixoto",
        role: t.expeciencias["App de vendas de E-commerce"].Eliel,
        github: "https://github.com/eliel-peixoto",
      },
      {
      name: "Efraim Negreiros",
      role: t.expeciencias["App de vendas de E-commerce"].Efraim,
      github: "https://github.com/efraimjnegreiros",
      }
    ],
    highlights: [
      t.expeciencias["App de vendas de E-commerce"].highlights[0],
      t.expeciencias["App de vendas de E-commerce"].highlights[1],
      t.expeciencias["App de vendas de E-commerce"].highlights[2],
      t.expeciencias["App de vendas de E-commerce"].highlights[3],
    ],
  },
  {
    title: t.expeciencias["Quiz online de Biologia"].titulo,
    description:
      t.expeciencias["Quiz online de Biologia"].descricao,
    technologies: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Globe },
      { name: "EJS", icon: Globe },
      { name: "JavaScript", icon: Globe },
      { name: "HTML & CSS", icon: Globe },
    ],
    links: {
      github: "https://github.com/MateusJuan/Trabalho-de-Biologia-Quiz",
      live: "https://trabalho-de-biologia-quiz.vercel.app/"
    },
    status: t.expeciencias["Quiz online de Biologia"].status,
    contributors: [],
    highlights: [
      t.expeciencias["Quiz online de Biologia"].highlights[0],
      t.expeciencias["Quiz online de Biologia"].highlights[1],
      t.expeciencias["Quiz online de Biologia"].highlights[2],
      t.expeciencias["Quiz online de Biologia"].highlights[3],
      t.expeciencias["Quiz online de Biologia"].highlights[4],
    ],
  },
]
  return (
    <section id="experiencias" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.expeciencias.titulo}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.expeciencias.descricao}
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

                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.expeciencias.ver}</span>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg cursor-not-allowed opacity-60"
                      title="Site não disponível"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.expeciencias.ver}</span>
                    </div>
                  )}
                </div> {/* Fecha Links */}
              </div> {/* ✅ Fecha Header */}

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
                {/* Contributors */}
                {project.contributors && project.contributors.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      {t.expeciencias.Contribuidores}
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {project.contributors.map((person, i) => (
                        <a
                          key={i}
                          href={person.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <Github className="w-4 h-4 text-primary" />
                          <div className="flex flex-col leading-tight">
                            <span className="text-sm font-medium">{person.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {person.role}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Github, ExternalLink } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export function GithubSection() {
  const { t, lang } = useTranslation()
  return (
    
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Github className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">GitHub Stats</span>
          </h2>
          <p className="text-muted-foreground">
            {t.Github.estatisticas}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-card rounded-2xl border border-border p-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=MateusJuan&layout=compact&langs_count=7&theme=transparent&title_color=22d3ee&text_color=94a3b8&bg_color=111827&border_color=1e293b"
              alt="Top Languages"
              className="rounded-xl"
            />
          </div>
          <div className="bg-card rounded-2xl border border-border p-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <img
              src="https://github-readme-stats.vercel.app/api?username=MateusJuan&show_icons=true&theme=transparent&title_color=22d3ee&text_color=94a3b8&bg_color=111827&border_color=1e293b&icon_color=22d3ee"
              alt="GitHub Stats"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/MateusJuan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-all hover:scale-105"
          >
            <Github className="w-5 h-5" />
            {t.Github.perfil}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

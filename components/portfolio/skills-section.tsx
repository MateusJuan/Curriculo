"use client"

import { Code2, Layers, Sparkles } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"


const currentlyLearning = [
  { name: "Kotlin", icon: "https://mmcgbl.com/wp-content/uploads/2025/03/img-49.webp" },
]

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "EJS", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ejs.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
]

const frameworks = [
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
]

function SkillCard({ name, icon }: { name: string; icon: string }) {

  return (
    <div className="group relative flex flex-col items-center justify-center p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
      <img
        src={icon || "/placeholder.svg"}
        alt={name}
        className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
      />
      <span className="mt-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  )
}

export function SkillsSection() {

  const { t, lang } = useTranslation()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Currently Learning */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{t.skils.Estudando}</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {currentlyLearning.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-4 py-3 bg-primary/10 rounded-full border border-primary/30"
              >
                <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-8 h-8 object-contain" />
                <span className="text-primary font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{t.skils.Linguagens}</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{t.skils.Frameworks_Ferramentas}</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {frameworks.map((framework) => (
              <SkillCard key={framework.name} {...framework} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

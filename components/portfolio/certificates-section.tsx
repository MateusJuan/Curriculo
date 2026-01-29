"use client"

import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

const certificates = [
  {
    title: "Redes de Computadores",
    institution: "CISCO",
    institutionUrl: "https://www.netacad.com/",
    image: "/certificates/redes-cisco.jpg",
    pdfUrl: "/certificates/redes-cisco.pdf",
  },
  {
    title: "Introdução à Segurança Cibernética",
    institution: "CISCO",
    institutionUrl: "https://www.netacad.com/",
    image: "/certificates/Introduction_to_Cybersecurity_certificate_mjhs2-discente-ifpe-edu-br_c33b850d-4ef0-4b2d-9e6d-d9a2a9f53839.jpg",
    pdfUrl: "/certificates/Introduction_to_Cybersecurity_certificate_mjhs2-discente-ifpe-edu-br_c33b850d-4ef0-4b2d-9e6d-d9a2a9f53839.pdf",
  },
  {
    title: "Python – Projeto e Prática 2",
    institution: "CISCO",
    institutionUrl: "https://www.netacad.com/",
    image: "/certificates/python-cisco.jpg",
    pdfUrl: "/certificates/python-cisco.pdf",
  },
  {
    title: "21ª SNCT",
    institution: "IFPE",
    institutionUrl: "#",
    image: "/certificates/snct.jpg",
    pdfUrl: "/certificates/snct.pdf",
  },
  {
    title: "FrontEnd",
    institution: "IATec Academy",
    institutionUrl: "#",
    image: "/certificates/frontend-iatec.jpg",
    pdfUrl: "/certificates/frontend-iatec.pdf",
  },
  {
    title: "Menção Honrosa – Maratona Tech",
    institution: "Maratona Tech",
    institutionUrl: "#",
    image: "/certificates/maratona-tech.jpg",
    pdfUrl: "/certificates/maratona-tech.pdf",
  },
  {
    title: "Algoritmo 40 Horas",
    institution: "Curso em Video",
    institutionUrl: "https://www.cursoemvideo.com/",
    image: "/certificates/algoritmo-cev.jpg",
    pdfUrl: "/certificates/algoritmo-cev.pdf",
  },
  {
    title: "JavaScript 40 Horas",
    institution: "Curso em Video",
    institutionUrl: "https://www.cursoemvideo.com/",
    image: "/certificates/javascript-cev.jpg",
    pdfUrl: "/certificates/javascript-cev.pdf",
  },
]

export function CertificatesSection() {
  const { t, lang } = useTranslation()

  return (
    <section id="certificados" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Award className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.certificados}</span>
          </h2>
          <p className="text-muted-foreground">
            {t.cert_descrcao}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
            >
              {/* Certificate Image Background */}
              <Image
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Icon */}
                <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">
                    {cert.institution}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Ver PDF
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/30 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

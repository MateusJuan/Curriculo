"use client"

import { usePathname } from "next/navigation"
import pt from "@/public/locales/pt/common.json"
import en from "@/public/locales/en/common.json"

const dictionaries = {
  pt,
  en,
}

export function useTranslation() {
  const pathname = usePathname()

  const lang = pathname.startsWith("/en") ? "en" : "pt"

  const t = dictionaries[lang]

  return { t, lang }
}

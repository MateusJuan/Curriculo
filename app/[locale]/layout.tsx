import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mateus Juan | Full Stack Developer",
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div lang={locale}>
      {children}
    </div>
  )
}


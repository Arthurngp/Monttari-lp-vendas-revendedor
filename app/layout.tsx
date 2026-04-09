import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Seja um Revendedor Monttari | Gôndolas e Mobiliário Comercial Direto da Fábrica",
  description:
    "Torne-se um revendedor oficial Monttari e venda gôndolas, expositores e balcões direto da fábrica. 22 anos de mercado, margens atrativas, suporte completo e produtos de alta qualidade. Cadastre-se!",
  keywords:
    "revendedor de gôndolas, distribuidor mobiliário comercial, representante comercial gôndolas, revender expositores, parceria Monttari, programa de revenda, fábrica de gôndolas, atacado mobiliário varejo",
  authors: [{ name: "Monttari" }],
  creator: "Monttari",
  publisher: "Monttari",
  robots: "index, follow",
  openGraph: {
    title: "Seja um Revendedor Monttari - Gôndolas Direto da Fábrica",
    description:
      "Programa de revenda Monttari: margens atrativas, suporte comercial e produtos de alta qualidade com 22 anos de tradição. Cadastre-se e amplie seus ganhos.",
    type: "website",
    locale: "pt_BR",
    siteName: "Monttari",
    images: [
      {
        url: "/monttari-building-new.png",
        width: 1200,
        height: 630,
        alt: "Monttari - Fábrica de Gôndolas e Mobiliário Comercial para Revendedores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seja um Revendedor Monttari - Gôndolas Direto da Fábrica",
    description: "Programa oficial de revenda Monttari. Margens atrativas, suporte e produtos de alta qualidade. Cadastre-se!",
    images: ["/monttari-building-new.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
  other: {
    "theme-color": "#e9672d",
    "color-scheme": "light",
    "format-detection": "telephone=yes",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFTGVWP5');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <meta name="theme-color" content="#e9672d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preload" href="/warehouse-industrial-bg.png" as="image" type="image/png" />
        <link rel="preload" href="/modern-pharmacy-shelving-units-with-blue-accents.png" as="image" type="image/png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFTGVWP5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

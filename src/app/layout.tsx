import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blankdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "blankdigital — AI-агентство разработки платформ и экосистем",
    template: "%s — blankdigital",
  },
  description:
    "Создаём платформы, мобильные приложения и цифровые экосистемы для бизнеса, усиленные искусственным интеллектом. AI-агентство полного цикла.",
  keywords: [
    "AI агентство",
    "разработка платформ",
    "мобильные приложения",
    "цифровые экосистемы",
    "искусственный интеллект",
    "blankdigital",
  ],
  authors: [{ name: "blankdigital", url: siteUrl }],
  creator: "blankdigital",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "blankdigital",
    title: "blankdigital — AI-агентство разработки платформ и экосистем",
    description:
      "Создаём платформы, мобильные приложения и цифровые экосистемы для бизнеса, усиленные искусственным интеллектом.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "blankdigital — AI-агентство",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "blankdigital — AI-агентство разработки платформ и экосистем",
    description:
      "Создаём платформы, мобильные приложения и цифровые экосистемы для бизнеса, усиленные искусственным интеллектом.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=104252609','ym');
            ym(104252609,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104252609"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}

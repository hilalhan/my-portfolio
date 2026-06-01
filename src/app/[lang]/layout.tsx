import type { Metadata } from "next";
import { Poppins, Montserrat, Aboreto, Bubblegum_Sans } from "next/font/google";
import "@/app/globals.css";
import { configMetadata } from "../../config";
import { ThemeProvider } from "@/providers/Theme";

const { metaData } = configMetadata;

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aboreto",
});

const bubblegumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bubblegum-sans",
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  icons: [
    { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
    { rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: metaData.url,
    title: metaData.title,
    description: metaData.description,
    images: [
      {
        url: metaData.image,
        width: 1200,
        height: 630,
        alt: metaData.title,
      },
    ],
  },
  twitter: {
    title: metaData.title,
    description: metaData.description,
    site: metaData.url,
    images: {
      url: metaData.image,
      alt: metaData.title,
    },
  },
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en-US" | "id" }>;
}>) {
  return (
    <html lang={(await params).lang} suppressHydrationWarning>
      <body
        className={`${bubblegumSans.variable} ${poppins.variable} ${montserrat.variable} ${aboreto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

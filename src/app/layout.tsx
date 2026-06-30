import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruben Schneider – Webdesign für Handwerk & Bau",
  description:
    "Moderne Websites für Bau- und Handwerksbetriebe in der Deutschschweiz – vom Onepager bis zur Web-App.",
  metadataBase: new URL("https://ruben-schneider.ch"),
  openGraph: {
    title: "Ruben Schneider – Webdesign für Handwerk & Bau",
    description:
      "Moderne Websites für Bau- und Handwerksbetriebe in der Deutschschweiz – vom Onepager bis zur Web-App.",
    url: "https://ruben-schneider.ch",
    siteName: "Ruben Schneider Webdesign",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

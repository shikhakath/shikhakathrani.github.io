import type { Metadata } from "next";
import { NavTabs } from "./components/NavTabs";
import Link from "next/link";
import { SparkleCursor } from "./components/SparkleCursor";


import {
  Geist,
  Geist_Mono,
  Inter,
  Pacifico,
  Roboto_Slab,
  Merriweather,
  Fira_Sans,
  Inconsolata,
  PT_Serif,
  Heebo,
  EB_Garamond,
  Arvo,
  Sanchez,
  Newsreader,
  Sawarabi_Mincho,
  Homemade_Apple,
  PT_Serif_Caption,
  Love_Ya_Like_A_Sister,
  Platypi,
  Galada,
  Lobster,
  Cookie,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ variable: "--font-roboto-slab", subsets: ["latin"] });
const merriweather = Merriweather({ variable: "--font-merriweather", subsets: ["latin"] });
const firaSans = Fira_Sans({ variable: "--font-fira-sans", subsets: ["latin"], weight: ["500", "700", "800", "900"] });
const inconsolata = Inconsolata({ variable: "--font-inconsolata", subsets: ["latin"] });
const ptSerif = PT_Serif({ variable: "--font-pt-serif", subsets: ["latin"], weight: ["400", "700"]});
const heebo = Heebo({ variable: "--font-heebo", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ variable: "--font-eb-garamond", subsets: ["latin"] });
const arvo = Arvo({variable: "--font-arvo", subsets: ["latin"], weight: "400"}); //must define weights for Arvo!! 

const sanchez = Sanchez({ variable: "--font-sanchez", subsets: ["latin"], weight: "400" });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"] });
const sawarabiMincho = Sawarabi_Mincho({ variable: "--font-sawarabi-mincho", subsets: ["latin"], weight: "400" });
const homemadeApple = Homemade_Apple({ variable: "--font-homemade-apple", subsets: ["latin"], weight: "400"});
const ptSerifCaption = PT_Serif_Caption({ variable: "--font-pt-serif-caption", subsets: ["latin"], weight: "400"});
const loveYa = Love_Ya_Like_A_Sister({ variable: "--font-love-ya", subsets: ["latin"], weight: "400"});
const platypi = Platypi({ variable: "--font-platypi", subsets: ["latin"] });
const galada = Galada({ variable: "--font-galada", subsets: ["latin"], weight: "400" });
const lobster = Lobster({ variable: "--font-lobster", subsets: ["latin"], weight: "400"});
const cookie = Cookie({ variable: "--font-cookie", subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({variable: "--font-pacifico", subsets: ["latin"], weight: "400"}); 

export const metadata: Metadata = {
  title: "Shikha's Website",
  description: "A compilation of what Shikha has been up to and some of her thoughts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          robotoSlab.variable,
          merriweather.variable,
          firaSans.variable,
          inconsolata.variable,
          ptSerif.variable,
          heebo.variable,
          ebGaramond.variable,
          arvo.variable,
          sanchez.variable,
          newsreader.variable,
          sawarabiMincho.variable,
          homemadeApple.variable,
          ptSerifCaption.variable,
          loveYa.variable,
          platypi.variable,
          galada.variable,
          lobster.variable,
          cookie.variable,
          "antialiased",
        ].join(" ")}
      >
        <div className="min-h-screen 
        bg-slate-700
        ">
          {/*sparkle cursor overlay */}
          <SparkleCursor/>

          {/* sticky top bar */}
          <header className="sticky top-0 z-20 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/80 dark:bg-black/80 backdrop-blur">
            <div className="flex items-center justify-between px-6 sm:px-10 py-4">
              {/* mini logo / signature */}
              <Link
                href="/"
                className="font-homemade text-xl hover:opacity-80 transition-opacity"
              >
                Shikha
              </Link>
              <NavTabs />
            </div>
          </header>


          {/* page content */}
        <main className="flex justify-center px-4 pt-10 pb-16">
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </main>
        </div>
      </body>
    </html>
  );
}


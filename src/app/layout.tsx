'use client';

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const navItems = [
  { href: "/dashboard/overview", icon: "dashboard", label: "Genel Özet" },
  { href: "/dashboard/batch-processing", icon: "stacks", label: "Toplu Ses İşleme" },
  { href: "/dashboard/voice-search", icon: "troubleshoot", label: "Ses Arama" },
  { href: "/dashboard/speaker-profile", icon: "article_person", label: "Kişi Ses Profili" },
  { href: "/dashboard/voice-comparison", icon: "text_compare", label: "Ses Karşılaştırma" },
  { href: "/dashboard/monitoring", icon: "monitor_heart", label: "Ses Servisi İzleme" },
  { href: "/dashboard/settings", icon: "settings", label: "Ayarlar" },
  { href: "/dashboard/authorization", icon: "passkey", label: "Yetkilendirme" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300"
          rel="stylesheet"
        />
        <link
          href="https://vercel.com/font/geist-sans"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="layout">
          <aside className="layout__sidebar">
            <nav className="layout__nav">
              <div className="nav">
                <div className="nav__logo">
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={184}
                    height={104}
                    priority
                  />
                </div>
                <div className="nav__menu">
                  {navItems.map(({ href, icon, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`nav__link ${pathname === href ? "nav__link--active" : ""}`}>
                      <span className="material-symbols-outlined">{icon}</span>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </aside>
          <main className="layout__main">
            <div className="layout__topbar">
              <div className="profile">
                <Image
                  src="/profile.png"
                  alt="Profil Fotoğrafı"
                  width={40}
                  height={40}
                  className="profile__image"
                />
                <div className="profile__info">
                  <span className="profile__name">Adam Smith</span>
                  <span className="profile__title">Administrator</span>
                </div>
              </div>
            </div>
            <div className="layout__content">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

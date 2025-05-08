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
      </head>
      <body>
        <div className="main-container">
          <aside>
            <nav>
              <div className="nav-top">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={184}
                  height={104}
                  priority
                />
              </div>
              <div className="nav-middle">
                {navItems.map(({ href, icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`${pathname === href ? "active" : ""}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                    {label}
                  </Link>
                ))}
              </div>
              <div className="nav-bottom">{/* Footer içeriği */}</div>
            </nav>
          </aside>
          <main>
            <div className="top-bar">
              <div className="top-bar-profile-container">
                <Image
                  src="/profile.png"
                  alt="Profil Fotoğrafı"
                  width={40}
                  height={40}
                />
                <div className="top-bar-profile-container-name">
                  <span>Adam Smith</span>
                  <span className="title">Administrator</span>
                </div>
              </div>
            </div>
            <div className="content">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

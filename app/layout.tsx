import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Envi للحلول البرمجية — أعمال أكبر. تعقيد أقل.",
  description: "حلول Envi البرمجية للتعليم والتجارة الإلكترونية وإدارة الأعمال والزراعة الذكية، وخدمات تصميم وتطوير المواقع.",
  metadataBase: new URL("https://envi-software-experience.exoticglass.chatgpt.site"),
  openGraph: { title: "Envi — أعمال أكبر. تعقيد أقل.", description: "حلول برمجية متكاملة تساعد أعمالك على التقدم.", locale: "ar_LY", type: "website", images: ["/assets/hero.png"] },
  icons: {
    icon: "/assets/envi-logo-transparent.png",
    shortcut: "/assets/envi-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}

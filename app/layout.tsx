import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIRVAANA - DJS IEEE X GDG DJSCE",
  description: "Back to the 90s - A Retro Tech Fest featuring Ideathon and TheCipher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-vintage-cream">
        {children}
      </body>
    </html>
  );
}

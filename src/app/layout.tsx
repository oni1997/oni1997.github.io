import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onesmus Dzidzai Maenzanise | Cloud Infrastructure Engineer",
  description:
    "Production systems engineer. I build and maintain systems that cannot afford to fail across fintech and telecom platforms.",
  openGraph: {
    title: "Onesmus Dzidzai Maenzanise | Cloud Infrastructure Engineer",
    description:
      "Production systems engineer. I build and maintain systems that cannot afford to fail.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}

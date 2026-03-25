import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jingjing",
  description:
    "Developer & designer. Part portfolio, part playground, part organized curiosity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">{children}</body>
    </html>
  );
}

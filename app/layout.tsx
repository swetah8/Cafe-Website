import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblio Kaffee | Coffee & Literature",
  description:
    "Biblio Kaffee is a cozy café in Kathmandu, Nepal, bringing together thoughtfully crafted coffee, literature, and a welcoming space for meaningful moments.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeanBloom Café & Bakery | Fresh Coffee, Delicious Moments",
  description:
    "BeanBloom is a neighborhood café and bakery serving great coffee, fresh food and a welcoming space in Kathmandu, Nepal.",
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

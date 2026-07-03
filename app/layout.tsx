import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TopoStitch",
  description:
    "An open framework for stitching digital context to the physical world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sample",
  description: "これはsampleです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

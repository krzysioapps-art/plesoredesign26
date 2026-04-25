import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Psycholog i psychoterapeuta online | psychoterapia w pleso",
  description:
    "Psycholog online – wsparcie, gdziekolwiek jesteś. Psychoterapia dopasowana do Twoich potrzeb. Znajdź psychoterapeutę na pleso.me.",

  icons: {
    icon: "/plesologo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  );
}
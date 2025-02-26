import "./globals.css";
import { Header } from '../components/header'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrigoMotion",
  description: 'Seu parceiro de motion que cria identidades, sistemas, e aplicações.',
  openGraph:{
    title: 'GrigoMotion - Henrique Grigoletto',
    description: 'Seu parceiro de motion que cria identidades, sistemas, e aplicações.',
    images: ['https://mir-s3-cdn-cf.behance.net/c0f6163eceea483c7688517e31bf912f/817e3060-5f84-4095-b7dc-98b33e424397_rwc_8x0x3184x410x3200.png?h=e524acc7b4499f54ce4c33f593964cd9'],
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`} 
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

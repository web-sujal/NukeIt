"use client";

import { useEffect } from "react";
import { Lato } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import useTaskStore from "@/hooks/useTaskStore";
import useTheme from "@/hooks/useTheme";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDarkMode } = useTheme();
  const { fetchAndSetTasks } = useTaskStore();

  useEffect(() => {
    fetchAndSetTasks();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content={isDarkMode ? "#121215" : "#ffffff"} />
        <title>Nuke It</title>
      </head>
      <body className={lato.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

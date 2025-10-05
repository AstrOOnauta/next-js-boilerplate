import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
import type { Metadata } from "next";

import GlobalContext from "~/shared/contexts/globalContext";
import { Flex } from "@chakra-ui/react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "Boilerplate Next JS",
  description:
    "Boilerplate Next JS + Typescript + Chakra UI + Prettier + ESLint + Pre-commit (Husky + Lint-staged) + Cypress (e2e + component)",
  openGraph: {
    title: "Next JS Boilerplate",
    type: "website",
    images: [
      {
        url: "/images/dev-libraries.jpg",
        width: 1200,
        height: 630,
        alt: "Boilerplate Next JS + Typescript + Chakra UI + Prettier + ESLint + Pre-commit (Husky + Lint-staged) + Cypress (e2e + component)",
      },
    ],
    url: "https://github.com/AstrOOnauta/next-js-boilerplate",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon-180.png", type: "image/png" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-128.png", type: "image/png", sizes: "128x128" },
      { url: "/favicon-180.png", type: "image/png", sizes: "180x180" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/favicon-180.png", type: "image/png" }],
    shortcut: [{ url: "/favicon-192.png", type: "image/png" }],
  },
  metadataBase: new URL("https://github.com/AstrOOnauta/next-js-boilerplate"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="rating" content="general" />
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="AstrOOnauta (https://github.com/AstrOOnauta)"
        />
      </head>
      <body className={poppins.className}>
        <GlobalContext>
          <Flex flexDir="column" minH="100vh" w="100%" p={6}>
            <Header title="" />
            {children}
            <Footer />
          </Flex>
        </GlobalContext>
      </body>
    </html>
  );
}

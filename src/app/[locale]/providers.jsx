"use client";

import Fonts from "@/components/fonts";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import "../globals.css";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    // body: "var(--font-rubik)",
  },
});

export function Providers({ children, messages, locale }) {
  return (
    <>
      <Fonts />
      <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
        <NextIntlClientProvider
          timeZone="Europe/Moscow"
          now={new Date()}
          locale={locale}
          messages={messages}
        >
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  );
}

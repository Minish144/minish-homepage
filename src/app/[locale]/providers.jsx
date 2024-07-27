"use client";

import Fonts from "@/components/fonts";
import Theme from "@/components/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlClientProvider } from "next-intl";

export function Providers({ children, messages, locale }) {
  return (
    <>
      <Fonts />
      <NextIntlClientProvider
        timeZone="Europe/Moscow"
        now={new Date()}
        locale={locale}
        messages={messages}
      >
        <ChakraProvider theme={Theme}>{children}</ChakraProvider>
      </NextIntlClientProvider>
    </>
  );
}

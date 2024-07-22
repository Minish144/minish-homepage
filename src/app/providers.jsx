"use client";

import Fonts from "@/components/fonts";
import Theme from "@/components/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <>
      <Fonts />
      <ChakraProvider theme={Theme}>{children}</ChakraProvider>
    </>
  );
}

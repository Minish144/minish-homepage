"use client";

import Fonts from "@/components/Fonts";
import Theme from "@/components/Theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <>
      <Fonts />
      <ChakraProvider theme={Theme}>{children}</ChakraProvider>
    </>
  );
}

"use client";

import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Hackathons from "@/components/Hackathons";
import Hello from "@/components/Hello";
import Love from "@/components/Love";
import Menu from "@/components/Menu";
import Personal from "@/components/Personal";
import Web from "@/components/Web";
import Work from "@/components/Work";
import { Box } from "@chakra-ui/react";
import Gopher from "@/components/Gopher";

export default function Home() {
  return (
    <Box as="main">
      <Box className="flex flex-col items-center justify-between">
        <Menu />
      </Box>

      <Box className="flex flex-col items-center justify-between animate-appear">
        <Gopher />
        <Hello />
        <Personal />
        <Work />
        <Bio />
        <Hackathons />
        <Love />
        <Web />
        <Footer />
      </Box>
    </Box>
  );
}

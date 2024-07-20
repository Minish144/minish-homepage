"use client";

import Bio from "@/components/Bio";
import Dog from "@/components/Dog";
import Footer from "@/components/Footer";
import Hello from "@/components/Hello";
import Love from "@/components/Love";
import Menu from "@/components/Menu";
import Personal from "@/components/Personal";
import Web from "@/components/Web";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Menu />
      <Dog />
      <Hello />
      <Personal />
      <Work />
      <Bio />
      <Love />
      <Web />
      <Footer />
    </main>
  );
}

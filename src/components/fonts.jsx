import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const PreloadedFontsData = {
  rubik,
};

function Fonts() {
  return (
    <style jsx global>
      {`
        :root {
          --font-rubik: ${PreloadedFontsData.rubik.style.fontFamily};
        }
      `}
    </style>
  );
}

export default Fonts;

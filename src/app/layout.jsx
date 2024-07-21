import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Nikolay Varlamov - Homepage",
  description: "Nikolay's homepage",
  authors: [{ name: "Nikolay Varlamov" }, { name: "minish" }],
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    title: "Nikolay Varlamov",
    card: "summary_large_image",
    site: "@minish144",
    creator: "@minish144",
    image: "https://www.minish.ru/images/card.png",
  },
  openGraph: {
    siteName: "Nikolay Varlamov",
    title: "Nikolay Varlamov",
    type: "website",
    images: [
      {
        url: "https://www.minish.ru/images/card.pngg",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const gaId = process.env.GOOGLE_MEASUREMENT_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-base text-base`}>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}

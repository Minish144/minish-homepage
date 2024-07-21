import GoogleAnalytics from "@/components/Analytics";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-base text-base`}>
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

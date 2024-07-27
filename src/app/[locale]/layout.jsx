import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import { Providers } from "./providers";
import { getMessages } from "next-intl/server";

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
  robots: "index, follow",
  keywords: [
    "Nikolay Varlamov",
    "Homepage",
    "Software Engineer",
    "Portfolio",
    "Golang",
    "Go",
    "Backend",
    "Nextjs",
    "Senior developer",
  ],
  alternates: {
    canonical: "https://www.minish.ru",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const gaId = process.env.GOOGLE_MEASUREMENT_ID;

async function RootLayout({ children, params }) {
  const locale = params.locale;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`bg-base text-base`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}

export default RootLayout;

import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-base text-base`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

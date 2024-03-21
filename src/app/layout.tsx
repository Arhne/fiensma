import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import GoogleAnalytics from "../common/components/GoogleAnalytics/googleAnalytics";
import App from "@/common/components/App";
import { Providers } from "@/redux/provider";
import ToastProvider from "@/common/Utils/toast";
import { WEBSITE_HOST_URL } from "@/api/baseUrl";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const manrope = Manrope({
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  // display: "swap",
});

const meta = {
  title: "Ibx Exchange",
  description:
    "A P2P marketplace for currecy exchange, anytime and at your terms",
  // image: `${WEBSITE_HOST_URL}/some-image.png`
};

export const metadata: Metadata = {
  title: {
    template: "%s - Ibx Exchange",
    default: meta.title,
  },
  description:
    "A P2P marketplace for currecy exchange, anytime and at your terms",
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    locale: "en-US",
    type: "website",
    // images: [
    //   {
    //     url: meta.image
    //   }
    // ]
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    card: "summary_large_image",
    // images: meta.image
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={manrope.className}>
        <Providers>
          <App>{children}</App>
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}

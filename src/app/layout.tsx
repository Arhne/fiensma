import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import GoogleAnalytics from "./googleAnalytics";
import App from "@/common/components/App";
import { Providers } from "@/redux/provider";
import ToastProvider from "@/common/Utils/toast";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const manrope = Manrope({
  weight: ["400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Ibx Exchange",
  description: "A P2P fiat-crypto trading platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <App>{children}</App>
          <ToastProvider />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  );
}

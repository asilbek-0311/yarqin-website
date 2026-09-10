import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PartnerDialog } from "@/components/partner-dialog";
import { PrelineLoader } from "@/components/preline-loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "YARQINPAY — Payment infrastructure for modern Afghanistan.",
  description: "Payment technology connecting banks, businesses, service providers, agents, and communities across Afghanistan.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="theme-yarqinpay">
      <body>
        <PrelineLoader />
        {children}
        <PartnerDialog />
      </body>
    </html>
  );
}

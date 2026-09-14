import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PartnerDialog } from "@/components/partner-dialog";
import { PrelineLoader } from "@/components/preline-loader";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "YARQINPAY — More ways to move forward",
    template: "%s | YARQINPAY",
  },
  description:
    "Payment technology connecting banks, businesses, service providers, agents, and communities across Afghanistan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="theme-yarqinpay" data-scroll-behavior="smooth">
      <body>
        <PrelineLoader />
        <MotionProvider>
          {children}
          <PartnerDialog />
        </MotionProvider>
      </body>
    </html>
  );
}

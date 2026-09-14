import type { Icon } from "@phosphor-icons/react";
import {
  Bank,
  Buildings,
  DeviceMobile,
  Handshake,
  IdentificationCard,
  QrCode,
  Storefront,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export type Product = {
  id: string;
  title: string;
  description: string;
  href: `#${string}`;
  image: string;
  icon: Icon;
};

export const products: Product[] = [
  {
    id: "pos-terminals",
    title: "POS Terminals",
    description: "Accept card and QR payments with connected device management.",
    href: "#pos-terminals",
    image: "/images/product-pos.png",
    icon: IdentificationCard,
  },
  {
    id: "atm-solutions",
    title: "ATM Solutions",
    description: "Extend financial access with integrated monitoring and reporting.",
    href: "#atm-solutions",
    image: "/images/product-atm.png",
    icon: Bank,
  },
  {
    id: "self-service-terminals",
    title: "Self-Service Terminals",
    description: "Enable 24/7 bill payments, account services, and printed receipts.",
    href: "#self-service-terminals",
    image: "/images/product-kiosk.png",
    icon: DeviceMobile,
  },
  {
    id: "qr-payments",
    title: "QR Payments",
    description: "Connect simple, secure QR payments and cash-out experiences.",
    href: "#qr-payments",
    image: "/images/product-qr.png",
    icon: QrCode,
  },
  {
    id: "agent-network",
    title: "Agent Network",
    description: "Bring trusted payments and cash services closer to communities.",
    href: "#agent-network",
    image: "/images/product-agent.png",
    icon: UsersThree,
  },
];

export type Audience = {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: Icon;
};

export const audiences: Audience[] = [
  {
    title: "For Banks",
    description: "Expand service channels without rebuilding infrastructure from zero.",
    href: "#for-business",
    image: "/images/audience-banks.png",
    icon: Bank,
  },
  {
    title: "For Merchants",
    description: "Accept card and QR payments through one reliable platform.",
    href: "#for-business",
    image: "/images/audience-merchants.png",
    icon: Storefront,
  },
  {
    title: "For Payment Agents",
    description: "Serve your community with connected payments and local support.",
    href: "#for-business",
    image: "/images/audience-agents.png",
    icon: UsersThree,
  },
  {
    title: "For Service Providers",
    description: "Connect billing systems to agents, devices, and digital channels.",
    href: "#for-business",
    image: "/images/audience-providers.png",
    icon: Buildings,
  },
];

export const ecosystemColumns = [
  { title: "Customers", items: ["Individuals", "Businesses", "Communities"] },
  { title: "Channels", items: ["Agents", "POS Terminals", "ATM", "Self-Service", "QR Payments"] },
  { title: "YARQINPAY", items: ["Payment platform", "Switching · Clearing · Settlement", "APIs · Risk · Monitoring"] },
  { title: "Connected partners", items: ["APS", "Banks", "Billers", "Service Providers"] },
] as const;

export const audienceStrip = [
  { label: "Banks", icon: Bank },
  { label: "Merchants", icon: Storefront },
  { label: "Agents", icon: UsersThree },
  { label: "Service Providers", icon: Buildings },
  { label: "Government", icon: Bank },
  { label: "Communities", icon: Handshake },
] as const;

export const languages = [
  { code: "EN", label: "English", flag: "🇬🇧", available: true },
  { code: "DR", label: "Dari", flag: "🇦🇫", available: false },
  { code: "PS", label: "Pashto", flag: "🇦🇫", available: false },
] as const;

export const footerGroups = [
  { title: "Products", links: products.map(({ title, href }) => ({ label: title, href })) },
  { title: "For Business", links: audiences.map(({ title, href }) => ({ label: title.replace("For ", ""), href })) },
  { title: "Company", links: [{ label: "About us", href: "#about" }, { label: "Technology", href: "#technology" }, { label: "Security", href: "#security" }] },
  { title: "Support", links: [{ label: "Help center", href: "#support" }, { label: "Integration support", href: "#support" }, { label: "Partner inquiries", href: "#partner" }] },
] as const;

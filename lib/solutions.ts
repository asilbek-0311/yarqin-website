export const solutions = [
  {
    slug: "pos-terminals",
    name: "POS Terminals",
    short: "POS",
    number: "01",
    headline: "Good business.\nGreat payments.",
    description:
      "At the counter or on the move. Accept card and QR payments with a terminal that keeps your business connected.",
    image: "/images/chrome-pos.png",
    audience: "Made for merchants",
    features: [
      "Card & QR acceptance",
      "Connected device management",
      "Transaction reporting",
    ],
    detail:
      "Give customers more ways to pay, while bringing your payment operations into one connected system.",
    steps: [
      "Choose your setup",
      "Connect your terminal",
      "Start accepting payments",
    ],
    explanations: [
      "Tell us about your business, locations, and payment needs. We’ll help you scope the right terminal setup.",
      "Plan onboarding, configuration, and integration with the YARQINPAY team.",
      "Bring in-person transactions, device oversight, and reporting into your payment workflow.",
    ],
  },
  {
    slug: "qr-payments",
    name: "QR Payments",
    short: "QR payments",
    number: "02",
    headline: "A small code.\nA big possibility.",
    description:
      "Turn a simple scan into a payment. Bring an accessible digital checkout to your counter, service point, or community.",
    image: "/images/chrome-qr.png",
    audience: "Made for everyday commerce",
    features: [
      "Simple scan-to-pay",
      "Merchant acceptance",
      "Connected payment records",
    ],
    detail:
      "Make digital payments part of everyday life, with a straightforward experience for customers and merchants.",
    steps: ["Find your use case", "Set up acceptance", "Connect every payment"],
    explanations: [
      "Choose where QR payments can make life simpler for your customers.",
      "Work with our team on merchant onboarding and the acceptance setup.",
      "Connect QR transactions with your wider payment and reporting workflow.",
    ],
  },
  {
    slug: "atm-solutions",
    name: "ATM Solutions",
    short: "ATMs",
    number: "03",
    headline: "Your bank.\nBeyond the branch.",
    description:
      "Extend access to cash and banking services with connected ATMs, supported by integrated monitoring and reporting.",
    image: "/images/chrome-atm.png",
    audience: "Made for banks",
    features: [
      "Expanded service access",
      "Integrated monitoring",
      "Operational reporting",
    ],
    detail:
      "Connect physical access points to your banking infrastructure and serve customers in more places.",
    steps: [
      "Map your network",
      "Connect the infrastructure",
      "Manage with visibility",
    ],
    explanations: [
      "Identify service locations and the needs of your customers.",
      "Scope interoperability and integration with your existing banking systems.",
      "Bring transaction oversight and device monitoring into a connected operating model.",
    ],
  },
  {
    slug: "self-service-terminals",
    name: "Self-Service Terminals",
    short: "Self-service",
    number: "04",
    headline: "On their time.\nOn your network.",
    description:
      "Give people a convenient way to pay bills and access account services, with self-service terminals designed for everyday use.",
    image: "/images/chrome-kiosk.png",
    audience: "Made for service providers",
    features: ["Bill payments", "Account services", "Printed receipts"],
    detail:
      "Bring more services into everyday locations, with an intuitive touchpoint connected to your systems.",
    steps: [
      "Choose the services",
      "Connect your systems",
      "Bring services closer",
    ],
    explanations: [
      "Define the bills, account services, and customer journeys you want to offer.",
      "Plan the integration between your services and the terminal experience.",
      "Deploy at suitable locations and support customers through a connected service channel.",
    ],
  },
  {
    slug: "agent-network",
    name: "Agent Network",
    short: "Agent network",
    number: "05",
    headline: "Closer to people.\nFurther together.",
    description:
      "Bring payments and cash services into the neighborhood, with local agents connecting communities to financial services.",
    image: "/images/chrome-network.png",
    audience: "Made for communities",
    features: [
      "Local service points",
      "Cash services",
      "Connected agent operations",
    ],
    detail:
      "Make financial services more approachable through people and places customers already know.",
    steps: [
      "Find your opportunity",
      "Join the network",
      "Serve your community",
    ],
    explanations: [
      "Tell us about your location, business, and the community you serve.",
      "Explore eligibility, onboarding, and the services your agent point can offer.",
      "Connect local customers to payment and cash services with support from YARQINPAY.",
    ],
  },
] as const;

export const businessStories = [
  {
    name: "Banks",
    title: "Grow your reach.\nNot your complexity.",
    copy: "Connect new payment channels to your existing infrastructure. Bring banking to more counters, neighborhoods, and communities.",
    slug: "atm-solutions",
    link: "Explore ATM solutions",
  },
  {
    name: "Merchants",
    title: "More ways to pay.\nMore room to grow.",
    copy: "From your first counter to your next location, make accepting payments a simple part of doing business.",
    slug: "pos-terminals",
    link: "Explore merchant payments",
  },
  {
    name: "Payment agents",
    title: "Your neighborhood.\nNew possibilities.",
    copy: "Become a local connection to financial services. Help people make payments and access cash, closer to home.",
    slug: "agent-network",
    link: "Explore the agent network",
  },
  {
    name: "Service providers",
    title: "Your services.\nWithin easy reach.",
    copy: "Connect billing and account services to digital and physical channels, so your customers can choose how they pay.",
    slug: "self-service-terminals",
    link: "Explore self-service",
  },
] as const;

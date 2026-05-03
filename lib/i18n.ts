// All user-facing UI strings live here. English is the MVP; the same shape
// will be mirrored for Hausa once translations land.

export const strings = {
  brand: {
    name: "Dignity Works",
    tagline: "Honest work. Real dignity.",
  },
  nav: {
    home: "Home",
    services: "Services",
    requests: "Requests",
    profile: "Profile",
    help: "Help",
  },
  landing: {
    heroEyebrow: "A community service marketplace",
    heroHeadline: "Honest work.\nReal dignity.",
    heroSubhead:
      "Hire a trusted helper, or earn through honest work near you.",
    ctaPrimary: "Request a Helper",
    ctaSecondary: "Become a Worker",
    trust: {
      vetted: "Vetted workers",
      escrow: "Escrow protected",
      community: "Community verified",
    },
    storiesTitle: "Stories from the network",
    storiesSubtitle:
      "Real people, real work. A few of the families and helpers who have built trust together.",
    imamQuote:
      "“Lawful earnings restore dignity. This is the work the Prophet ﷺ honoured.”",
    imamAttribution: "— Sheikh Aminu, Kano",
    whatsapp: "Chat on WhatsApp",
    footer: {
      mission: "Building halal livelihoods, one honest job at a time.",
      links: {
        how: "How it works",
        stories: "Community stories",
        worker: "For workers",
        help: "Help & safety",
      },
      rights: "© Dignity Works Initiative",
    },
  },
  stories: [
    {
      id: "halima",
      name: "Halima",
      role: "Home cleaning, Kano",
      headline: "From the roadside to a steady home income.",
      excerpt:
        "Three families in her area now book Halima every week. Her sons are back in school.",
    },
    {
      id: "musa",
      name: "Musa",
      role: "Errands & deliveries, Kaduna",
      headline: "A guarantor's word, and a fair first job.",
      excerpt:
        "Musa was vouched for by his neighbourhood imam. Six months later, he is training two others.",
    },
    {
      id: "fatima",
      name: "Fatima",
      role: "Cooking, Zaria",
      headline: "Her grandmother's recipes, paid honestly.",
      excerpt:
        "Fatima cooks tuwo and miyan kuka for working families. Each payment is held safely until the meal is delivered.",
    },
  ],
} as const;

export type Strings = typeof strings;

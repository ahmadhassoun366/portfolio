interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  technologies?: string[];
}
export const projects: Project[] = [
  {
    slug: "pwr-labs-website",
    title: "PWR Labs",
    description:
      "The official website of PWR Labs, showcasing our blockchain-driven innovations, community projects, and cutting-edge technology solutions. Discover our latest advancements in Web3, decentralized applications, and more.",
    tags: ["Blockchain", "Web3", "Innovation", "Community"],
    liveUrl: "https://www.pwrlabs.io/",
    image: "/images/projects-images/pwrlabs.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-wallet",
    title: "PWR Wallet",
    description:
      "Track the latest PWR Wallet releases and updates. Stay informed about new features and improvements.",
    tags: ["Wallet", "Blockchain", "Releases"],
    liveUrl:
      "https://chromewebstore.google.com/detail/pwr-wallet/kennjipeijpeengjlogfdjkiiadhbmjl",
    image: "/images/projects-images/wallet.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-explorer",
    title: "PWR Explorer",
    description:
      "Explore the latest blockchain data with PWR Explorer, powered by our robust backend services.",
    tags: ["Blockchain", "Explorer", "Data"],
    liveUrl: "https://explorer.pwrlabs.io/",
    image: "/images/projects-images/explorer.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-staking",
    title: "PWR Staking",
    description:
      "Stake your assets with PWR Staking to earn rewards securely on our platform. Join the staking ecosystem today.",
    tags: ["Staking", "Blockchain", "Rewards"],
    liveUrl: "https://staking.pwrlabs.io/",
    image: "/images/projects-images/staking.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-community",
    title: "PWR Community",
    description:
      "Join the PWR Community to connect, collaborate, and share ideas with others passionate about blockchain.",
    tags: ["Community", "Collaboration", "Blockchain"],
    liveUrl: "https://community.pwrlabs.io/",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-governance",
    title: "PWR Governance",
    description:
      "Engage with decentralized governance on the PWR platform. Participate in decision-making processes for the ecosystem.",
    tags: ["Governance", "Blockchain", "Decentralized"],
    liveUrl: "https://governance.pwrlabs.io/",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-dapps",
    title: "PWR Dapps",
    description:
      "Explore and interact with decentralized applications (Dapps) on the PWR platform.",
    tags: ["Dapps", "Blockchain", "Applications"],
    liveUrl: "https://pwr-dapps.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "risk-runner",
    title: "Risk Runner",
    description:
      "Risk Runner provides a risk assessment and mitigation tool for blockchain assets in development.",
    tags: ["Risk Assessment", "Blockchain", "Security"],
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-bridge",
    title: "PWR Bridge",
    description:
      "Transfer assets seamlessly between chains with PWR Bridge, enabling cross-chain transactions.",
    tags: ["Cross-chain", "Blockchain", "Bridge"],
    liveUrl: "https://prod-pwrbridge.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "pwr-js",
    title: "PWR JS",
    description:
      "PWR JS is a JavaScript library designed to simplify blockchain development on the PWR platform.",
    tags: ["JavaScript", "Blockchain", "Library"],
    githubUrl: "https://github.com/pwrlabs/pwrjs",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
];

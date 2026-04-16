export interface Episode {
  number: number;
  title: string;
  description: string;
  guests: string;
  duration: string;
  durationMinutes: number;
  date: string;
  listenUrl: string;
  youtubeUrl: string;
  topic: string;
  isNew: boolean;
}

export const SHOW = {
  name: "Let's Talk About ETH",
  subtitle: 'Around the World',
  tagline: 'Three voices. One chain. No filter.',
  credit: 'A We Them Media x The ZAO production',
  coverImage: '', // TODO: add cover art URL
  channelUrl: 'https://farcaster.xyz/~/channel/ethereum',
  youtubeUrl: 'https://www.youtube.com/@thezaodao',
  xUrl: 'https://x.com/WeThemMediaHQ',
  podsMediaUrl: 'https://pods.media/lets-talk-about-web3/',
};

export const BACKSTORY = {
  predecessor: "Let's Talk About Web3 (LTAW3)",
  seasons: 3,
  totalEpisodes: 19,
  runDates: 'Apr - Sep 2025',
  originalHosts: 'Ohnahji B, EZinCrypto, BetterCallZaal',
  notableGuests: 'Will T, DuoDoMusica, Pichi, HURRIC4N3IKE, GESD1',
  archive: 'https://pods.media/lets-talk-about-web3/',
  evolution:
    'After 3 seasons and 19 episodes, LTAW3 ended. EZ stepped back. Maceo (We Them Media) joined. The show narrowed from all of Web3 to Ethereum - the chain that connects everything we do.',
  whyItWorks:
    'LTAW3 was too broad. LTAE goes deep on one chain. Three hosts, three angles: artist rights, HBCU education, independent BIPOC media. First podcast snap on Farcaster.',
};

// Season 1: Around the World - most recent first
export const episodes: Episode[] = [
  {
    number: 4,
    title: 'Fidesio - Blockchain in Africa',
    description:
      'Fidesio (Hustle Yang) on how blockchain functions as real economic infrastructure in Kenya, Ethiopia, and Nigeria. Mobile money, stablecoin savings, diaspora remittances, and what adoption actually looks like on the ground.',
    guests: 'Fidesio, @zaal, @ohnahji, @wethemniggas',
    duration: '1h 6m',
    durationMinutes: 66,
    date: '2026-04-09',
    listenUrl: '',
    youtubeUrl: 'https://youtube.com/watch?v=agtNstnokG8',
    topic: 'Africa',
    isNew: true,
  },
  {
    number: 3,
    title: 'Pablo - AI Meets Blockchain',
    description:
      'Ghana-based educator Pablo on the shift from blockchain-first to AI-integrated systems. Cross-border payments, infrastructure gaps, account abstraction, and how different ecosystems are converging.',
    guests: 'Pablo, @zaal, @ohnahji, @wethemniggas',
    duration: '1h 6m',
    durationMinutes: 66,
    date: '2026-04-09',
    listenUrl: '',
    youtubeUrl: 'https://youtube.com/watch?v=Ua86acr_f8k',
    topic: 'AI + ETH',
    isNew: false,
  },
  {
    number: 2,
    title: 'Swarthy Hatter - Decentralized Governance',
    description:
      'Nouns Builder ops team member on grassroots organizing meets decentralized governance. Political activism to systems architecture, the Fourth Estate, ODOs, and grading Ethereum as sufficiently decentralized.',
    guests: 'Swarthy Hatter, @zaal, @ohnahji, @wethemniggas',
    duration: '1h 14m',
    durationMinutes: 74,
    date: '2026-04-09',
    listenUrl: '',
    youtubeUrl: 'https://youtube.com/watch?v=K79nO_nHL8U',
    topic: 'Governance',
    isNew: false,
  },
  {
    number: 1,
    title: 'Kenny from Poidh - Decentralized Bounties',
    description:
      'Early Bitcoin journalist and poidh builder on decentralized bounties, Bitcoin vs Ethereum, and what crypto is actually for. Accepted BTC at his waffle truck in 2013. Wrote alongside Vitalik at Bitcoin Magazine.',
    guests: 'Kenny, @zaal, @ohnahji, @wethemniggas',
    duration: '1h 4m',
    durationMinutes: 64,
    date: '2026-03-07',
    listenUrl: '',
    youtubeUrl: 'https://youtube.com/watch?v=3hjDxLC7k1o',
    topic: 'Bounties',
    isNew: false,
  },
];

export interface Episode {
  number: number;
  title: string;
  description: string;
  guests: string;
  duration: string;
  durationMinutes: number;
  date: string;
  listenUrl: string;
  topic: string;
  isNew: boolean;
}

export const SHOW = {
  name: "Let's Talk About ETH",
  tagline: 'Three voices. One chain. No filter.',
  coverImage: '', // TODO: add cover art URL
  channelUrl: 'https://farcaster.xyz/~/channel/ethereum',
  youtubeUrl: 'https://www.youtube.com/@thezaodao',
  podsMediaUrl: 'https://pods.media/lets-talk-about-web3/',
};

// The story: LTAW3 ran 19 episodes (Ep 0-18) from Apr-Sep 2025
// Hosts: Ohnahji, EZinCrypto, BetterCallZaal
// Guests included Will T, DuoDoMusica, Pichi, HURRIC4N3IKE, GESD1
// 3 full seasons. Archived on pods.media.
// Maceo joined as guest, connected with the crew.
// That chemistry sparked the idea for a focused Ethereum show:
// "Let's Talk About ETH" - Zaal, Ohnahji, and Maceo (wethemniggas.eth / We Them Media)
export const BACKSTORY = {
  predecessor: "Let's Talk About Web3 (LTAW3)",
  seasons: 3,
  totalEpisodes: 19,
  runDates: 'Apr - Sep 2025',
  originalHosts: 'Ohnahji, EZinCrypto, BetterCallZaal',
  archive: 'https://pods.media/lets-talk-about-web3/',
  evolution:
    'LTAW3 covered all of Web3. After 3 seasons and 19 episodes, the crew narrowed the focus to Ethereum - the chain that started it all. Maceo (We Them Media) joined as a host, bringing independent media and BIPOC voices to the table.',
};

// Add new episodes at the top - most recent first
export const episodes: Episode[] = [
  {
    number: 1,
    title: 'Why ETH?',
    description:
      'The crew behind 3 seasons of LTAW3 (19 episodes) returns with a new focus: Ethereum. Why narrow it down? What changed? And what does ETH mean for independent artists, educators, and media builders?',
    guests: '@zaal @ohnahji @wethemniggas',
    duration: '45 min',
    durationMinutes: 45,
    date: '2026-04-16',
    listenUrl: '', // TODO: add Spotify/hosting URL
    topic: 'ETH',
    isNew: true,
  },
];

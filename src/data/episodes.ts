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
  credit: 'A We Them Media x The ZAO production',
  coverImage: '', // TODO: add cover art URL
  channelUrl: 'https://farcaster.xyz/~/channel/ethereum',
  youtubeUrl: 'https://www.youtube.com/@thezaodao',
  xUrl: 'https://x.com/WeThemMediaHQ',
  podsMediaUrl: 'https://pods.media/lets-talk-about-web3/',
};

// LTAW3 ran 19 episodes (Ep 0-18), Apr-Sep 2025
// Hosts: Ohnahji B, EZinCrypto, BetterCallZaal
// 3 full seasons on Twitch, archived on pods.media
// Guests: Will T, DuoDoMusica, Pichi, HURRIC4N3IKE, GESD1
//
// After LTAW3 ended, EZ stepped back. Maceo Whatley (We Them Media,
// a metalabel centering BIPOC voices, founded '21) joined as co-host.
// The show narrowed from all of Web3 to Ethereum specifically.
// Three clear angles: artist rights (Zaal), education (Ohnahji),
// independent media (Maceo).
//
// LTAE = first podcast distributed as a Farcaster Snap.
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

// Add new episodes at the top - most recent first
export const episodes: Episode[] = [
  {
    number: 1,
    title: 'Why ETH?',
    description:
      'The crew behind 3 seasons of LTAW3 (19 episodes) returns with a new focus. Why Ethereum? What changed? Three perspectives: artist rights, education, and independent media.',
    guests: '@zaal @ohnahji @wethemniggas',
    duration: '45 min',
    durationMinutes: 45,
    date: '2026-04-16',
    listenUrl: '', // TODO: add Spotify/hosting URL
    topic: 'ETH',
    isNew: true,
  },
];

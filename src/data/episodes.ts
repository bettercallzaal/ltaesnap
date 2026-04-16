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
};

// Add new episodes at the top - most recent first
export const episodes: Episode[] = [
  {
    number: 1,
    title: 'Pilot Episode',
    description:
      'Introducing the show - three perspectives on Ethereum, from artist rights to HBCU education to independent media.',
    guests: '@zaal @ohnahji @wethemniggas',
    duration: '45 min',
    durationMinutes: 45,
    date: '2026-04-16',
    listenUrl: '', // TODO: add Spotify/hosting URL
    topic: 'ETH',
    isNew: true,
  },
];

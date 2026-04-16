export interface Host {
  username: string;
  displayName: string;
  fid: number;
  pfpUrl: string;
  bio: string;
  angle: string;
}

export const hosts: Host[] = [
  {
    username: 'zaal',
    displayName: 'Zaal',
    fid: 19640,
    pfpUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f9277373-2f85-411b-5d94-d8e11a43de00/original',
    bio: 'Founder of The ZAO',
    angle: 'Artist rights & IP',
  },
  {
    username: 'ohnahji',
    displayName: 'Ohnahji',
    fid: 262222,
    pfpUrl:
      'https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/25bd25c2-a096-47cc-9143-6a08b7a40100/original',
    bio: "Web3's first HBCU",
    angle: 'Education & HBCUs',
  },
  {
    username: 'wethemniggas',
    displayName: 'Maceo',
    fid: 361974,
    pfpUrl: 'https://i.imgur.com/DHt8XDN.jpg',
    bio: 'Founder of We Them Media',
    angle: 'Independent media & BIPOC voices',
  },
];

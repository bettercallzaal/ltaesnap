# Let's Talk About ETH - Farcaster Snap

A Farcaster Snap for sharing podcast episodes directly in the feed.

## The Story

**Let's Talk About Web3 (LTAW3)** ran 19 episodes across 3 seasons (Apr-Sep 2025), hosted by Ohnahji, EZinCrypto, and BetterCallZaal. Streamed live on Twitch every Wednesday at 6 PM EST. Featured guests like Will T, DuoDoMusica, Pichi, HURRIC4N3IKE, and GESD1. Archived on [pods.media](https://pods.media/lets-talk-about-web3/).

After 3 seasons covering all of Web3, the crew narrowed the focus. Maceo (We Them Media) joined as a host. **Let's Talk About ETH** was born - same energy, one chain, three perspectives.

## Hosts

- **Zaal** (@zaal, FID 19640) - Founder of The ZAO, independent artist rights
- **Ohnahji** (@ohnahji, FID 262222) - Web3's first HBCU, blockchain & AI education
- **wethemniggas.eth** (@wethemniggas, FID 361974) - We Them Media, BIPOC voices in web3

## Development

```bash
npm install
npm run dev
# Snap running at http://localhost:3006
```

Test with curl:
```bash
curl -H "Accept: application/vnd.farcaster.snap+json" http://localhost:3006
```

Or use the Farcaster Snap emulator at farcaster.xyz.

## Pages

- `/` - Latest episode card with listen, share, hosts, story, episodes
- `/episodes` - Recent episode list
- `/hosts` - Host profiles with view_profile links
- `/story` - Origin story: LTAW3 legacy, 19 episodes, 3 seasons, the evolution

## Adding Episodes

Edit `src/data/episodes.ts` - add new episodes at the top of the array.

## Deploy

Deploy to Vercel or `host.neynar.app`. Set `SNAP_PUBLIC_BASE_URL` env var to your production URL.

## Links

- [LTAW3 Archive (pods.media)](https://pods.media/lets-talk-about-web3/)
- [The ZAO YouTube](https://www.youtube.com/@thezaodao)
- [Farcaster Snap Docs](https://docs.farcaster.xyz/snap)

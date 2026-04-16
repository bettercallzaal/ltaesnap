# Let's Talk About ETH - Farcaster Snap

A Farcaster Snap for sharing podcast episodes of "Let's Talk About ETH" directly in the feed.

## Hosts

- **Zaal** (@zaal) - Founder of The ZAO, independent artist rights
- **Ohnahji** (@ohnahji) - Web3's first HBCU, blockchain & AI education
- **wethemniggas.eth** (@wethemniggas) - We Them Media, BIPOC voices in web3

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

- `/` - Latest episode card with listen, share, hosts, episodes buttons
- `/episodes` - Recent episode list
- `/hosts` - Host profiles with view_profile links

## Adding Episodes

Edit `src/data/episodes.ts` - add new episodes at the top of the array.

## Deploy

Deploy to Vercel or `host.neynar.app`. Set `SNAP_PUBLIC_BASE_URL` env var to your production URL.

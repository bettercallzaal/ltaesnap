import { Hono } from 'hono';
import { registerSnapHandler } from '@farcaster/snap-hono';
import { buildEpisodePage } from './pages/episode.js';
import { buildEpisodesPage } from './pages/episodes.js';
import { buildHostsPage } from './pages/hosts.js';
import { buildStoryPage } from './pages/story.js';
import { episodes } from './data/episodes.js';
import { getBaseUrl } from './utils.js';

const app = new Hono();

// Landing: latest episode card
registerSnapHandler(app, async (ctx) => {
  const baseUrl = getBaseUrl(ctx.request);
  const latest = episodes[0];
  return buildEpisodePage(latest, baseUrl);
});

// Episode list
registerSnapHandler(
  app,
  async (ctx) => {
    const baseUrl = getBaseUrl(ctx.request);
    return buildEpisodesPage(episodes.slice(0, 5), baseUrl);
  },
  { path: '/episodes' },
);

// Hosts page
registerSnapHandler(
  app,
  async (ctx) => {
    const baseUrl = getBaseUrl(ctx.request);
    return buildHostsPage(baseUrl);
  },
  { path: '/hosts' },
);

// Origin story page
registerSnapHandler(
  app,
  async (ctx) => {
    const baseUrl = getBaseUrl(ctx.request);
    return buildStoryPage(baseUrl);
  },
  { path: '/story' },
);

export default app;

import { serve } from '@hono/node-server';
import app from './app.js';

const port = Number(process.env.PORT ?? 3006);

console.log(`LTAE Snap running at http://localhost:${port}`);
serve({ fetch: app.fetch, port });

import { Hono } from 'hono';
import apiRoute from './routes';


const port = +(Bun.env.PORT ?? 3000);

console.log('Initializing API server on port', port);

const app = new Hono();

app.route('/api',apiRoute)

app.use('*', async (c) => {
  c.notFound();
});

export default {
  port,
  fetch: app.fetch,
};

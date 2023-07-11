import { Hono } from 'hono';
import { fetchUserProfile } from '../lib/fetch'

const port = +(Bun.env.PORT ?? 3000)

console.log('Initializing API server on port', port)

const app = new Hono()

app.get('/api/users/:userId', async (context) => {
  const userId = context.req.param('userId')
  const data = await fetchUserProfile({ userId })
  return context.json(data)
})

app.use('*', async (c, next) => {
  c.json({ error: 'Not found', status: 404 })
})

export default {
  port,
  fetch: app.fetch,
}
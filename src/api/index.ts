import { Hono } from 'hono';
import { fetchUserProfile } from '../lib/fetch'

const port = +(Bun.env.PORT ?? 1234)

const app = new Hono()

app.get('/api/users/:userId', async (context) => {
  const userId = context.req.param('userId')
  const data = await fetchUserProfile({ userId })
  return context.json(data)
})

export default {
  port,
  fetch: app.fetch,
}
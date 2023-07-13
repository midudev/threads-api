import { Hono } from 'hono'
import  threadsRoute from './threads'
import  usersRoute from './users'

const apiRoute = new Hono();

apiRoute.route('/users', usersRoute)
apiRoute.route('/threads', threadsRoute)

export default apiRoute;

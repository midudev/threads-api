import { Hono } from 'hono';
import { fetchThreadReplies, fetchUserProfile, fetchUserProfileThreads } from '../lib/fetch';

const port = +(Bun.env.PORT ?? 3000);

console.log('Initializing API server on port', port);

const app = new Hono();



// Endpoint to get user profiles based on userName
app.get('/api/users', async (context) => {
  try {
    // Extract the userName query parameter from the request
    const userName = context.req.query('userName');

    // If the userName is missing, return a "Missing userName" error response with status code 400
    if (!userName) return context.text('Missing userName', 400);

    // Fetch the user profile using the provided userName
    const data = await fetchUserProfile({ userName });

    // Return the fetched data as a JSON response
    return context.json(data);
  } catch (error) {
    // If an error occurs, respond with a 500 status code and an "Internal Server Error" message
    return context.text('Internal Server Error', 500);
  }
});

// Endpoint to get a specific user profile based on userId
app.get('/api/users/:userId', async (context) => {
  try {
    // Extract the userId from the request parameters
    const userId = context.req.param('userId');

    // If the userName is missing, return a "Missing userId" error response with status code 400
    if (!userId) return context.text('Missing userId', 400);

    // Fetch the user profile using the provided userId
    const data = await fetchUserProfile({ userId });

    // Return the fetched data as a JSON response
    return context.json(data);
  } catch (error) {
    // If an error occurs, respond with a 500 status code and an "Internal Server Error" message
    return context.text('Internal Server Error', 500);
  }
});

// Endpoint to get replies from a specific thread
app.get('/api/threads/:threadId/replies', async (context) => {
  try {
    // Extract the threadId from the request parameters
    const threadId = context.req.param('threadId');

    // If the userName is missing, return a "Missing threadId" error response with status code 400
    if (!threadId) return context.text('Missing threadId', 400);

    // Fetch the thread replies using the provided threadId
    const data = await fetchThreadReplies({ threadId });

    // Return the fetched data as a JSON response
    return context.json(data);
  } catch (error) {
    // If an error occurs, respond with a 500 status code and an "Internal Server Error" message
    return context.text('Internal Server Error', 500);
  }
});


// Endpoint to get user profile threads
app.get('/api/users/:userId/threads', async (context) => {
  try {
    // Extract the userId from the request parameters
    const userId = context.req.param('userId');

    // If the userName is missing, return a "Missing userId" error response with status code 400
    if (!userId) return context.text('Missing userId', 400);

    // Fetch the user profile threads using the provided userId
    const data = await fetchUserProfileThreads({ userId });

    // Return the fetched data as a JSON response
    return context.json(data);
  } catch (error) {
    // If an error occurs, respond with a 500 status code and an "Internal Server Error" message
    return context.text('Internal Server Error', 500);
  }
});





app.use('*', async (c) => {
  c.notFound();
});

export default {
  port,
  fetch: app.fetch,
};

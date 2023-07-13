import { Hono } from "hono";
import { fetchUserProfile, fetchUserProfileThreads } from "../../lib";

const route = new Hono();

// Endpoint to get user profiles based on userName
route.get('/', async (context) => {
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
route.get('/:userId', async (context) => {
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

// Endpoint to get user profile threads
route.get('/:userId/threads', async (context) => {
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

export default route
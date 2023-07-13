import { Hono } from "hono";
import { fetchThreadReplies, fetchUserProfileThreads } from "../../lib";

const route = new Hono();

// Endpoint to get replies for a thread
route.get('/threads/:threadId/replies', async (context) => {
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
  
  


export default route;
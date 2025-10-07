import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

const port = 3000;

serve({
  fetch: app.fetch,
  port,
});

console.log(`Server is running on http://localhost:${port}`);

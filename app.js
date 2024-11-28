import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js";

const app = new Hono();

app.get("/feedbacks/:id", async (c) => {
    const range = c.req.param("id");
    const count = await feedbacks.getFeedbacks(range);
    return c.text(`Feedback ${range}: (${count})`);
});

app.post("/feedbacks/:id", async (c) => {
    const range = c.req.param("id");
    await feedbacks.incrementFeedbacks(range);
});

export default app;
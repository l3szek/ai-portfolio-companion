import { Router, Request, Response } from "express";

const router = Router();

const MOCK_RESPONSE =
  "Based on your portfolio, you're heavily concentrated in the technology sector " +
  "with strong performers like NVDA and MSFT leading your gains. " +
  "Your total unrealized gain is looking healthy. " +
  "However, I'd recommend considering some diversification into other sectors " +
  "such as healthcare or consumer staples to reduce concentration risk. " +
  "Overall, your portfolio shows solid long-term growth potential.";

// Note: req.body is not parsed here. This route is registered before
// express.json() in index.ts to prevent Express 5's body-parser from
// buffering the request and blocking the response stream. The mock
// response is hardcoded, so the request body is not needed.
router.post("/stream", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const words = MOCK_RESPONSE.split(" ");
  let index = 0;

  const interval = setInterval(() => {
    if (index < words.length) {
      const chunk = index === 0 ? words[index] : " " + words[index];
      res.write(`data: ${chunk}\n\n`);
      index++;
    } else {
      res.write("data: [DONE]\n\n");
      clearInterval(interval);
      res.end();
    }
  }, 80);

  req.on("close", () => {
    clearInterval(interval);
  });
});

export default router;

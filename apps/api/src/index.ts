import express from "express";
import cors from "cors";
import healthRouter from "./routes/health";
import portfolioRouter from "./routes/portfolio";
import insightsRouter from "./routes/insights";
import chatRouter from "./routes/chat";

const app = express();
const PORT = process.env["PORT"] ?? 3000;

app.use(
  cors({
    origin: "http://localhost:8100",
  })
);

// Register chat/stream before express.json() so the body parser does not
// buffer the request body and delay response flushing (Express 5 behavior).
app.use("/api/chat", chatRouter);

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/insights", insightsRouter);

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

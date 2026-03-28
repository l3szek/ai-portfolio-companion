import express from "express";
import cors from "cors";
import healthRouter from "./routes/health";
import portfolioRouter from "./routes/portfolio";
import insightsRouter from "./routes/insights";
import chatRouter from "./routes/chat";

const app = express();
const PORT = process.env["PORT"] ?? 3000;

// Allow browser dev server and Capacitor iOS (which uses capacitor://localhost origin)
app.use(
  cors({
    origin: ["http://localhost:8100", "capacitor://localhost"],
  })
);

// Register chat/stream before express.json() so the body parser does not
// buffer the request body and delay response flushing (Express 5 behavior).
app.use("/api/chat", chatRouter);

app.use(express.json());
app.use("/health", healthRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/insights", insightsRouter);

// Bind to 0.0.0.0 so the iOS simulator (which is a separate network interface)
// can reach this server via the host machine's LAN IP.
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`API server running on http://0.0.0.0:${PORT}`);
});

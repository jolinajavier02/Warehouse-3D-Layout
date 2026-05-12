import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import locationsRouter from './routes/locations.js';

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api/locations', locationsRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Warehouse API listening on http://localhost:${port}`);
});

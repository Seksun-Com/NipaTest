import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ip from 'ip';
import ticketRouter from './src/presentation/routers/ticketRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({ message: "Ticket Server is online!" });
});

app.use(ticketRouter);

app.listen(PORT, () => {
  console.log(`Ticket Server running on port ${ip.address()}:${PORT}`);
});
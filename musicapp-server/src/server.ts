import 'reflect-metadata';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { dataSource } from './infrastructure/data-access/databases/database.ts';

const app = new Hono();

// CORS config for now
app.use('*', cors());

// Health check
app.get('/', (c) => c.json({ status: 'ok', message: 'musicapp-server running' }));


// --- Database + Server bootstrap ---
const PORT = parseInt(Deno.env.get('PORT') ?? '3000');

dataSource.initialize()
  .then(() => {
    console.log('Database connected');
    Deno.serve({ port: PORT }, app.fetch);
    console.log(`Server listening on port ${PORT}`);
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    Deno.exit(1);
  });
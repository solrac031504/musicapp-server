import { DataSource } from 'typeorm';

export const Database = new DataSource({
  type: 'postgres',
  host: Deno.env.get('DB_HOST'),
  port: parseInt(Deno.env.get('DB_PORT')!),
  username: Deno.env.get('DB_USER'),
  password: Deno.env.get('DB_PASSWORD'),
  database: Deno.env.get('DB_NAME'),
  synchronize: false,
  logging: true,
  entities: [
    "../entities/*.ts"
  ],
  ssl: {
    rejectUnauthorized: false
  }
});
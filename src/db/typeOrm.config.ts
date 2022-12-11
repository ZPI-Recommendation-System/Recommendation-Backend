import { DataSource } from 'typeorm';
import process from "process";

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  entities: ["src/db/entities/*.entity.ts"],
  migrations: ["src/db/migrations/*.ts"],
});
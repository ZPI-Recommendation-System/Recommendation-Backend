
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import process from "process";

// config();
//
// const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  // url: configService.get('DB_URL'),
  // url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB,
  entities: ["src/db/entities/*.entity.ts"],
  migrations: ["src/db/migrations/*.ts"],
});
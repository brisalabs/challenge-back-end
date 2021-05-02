import 'dotenv/config';

export default {
  type: 'postgres',
  host: 'localhost',
  logging: true,
  port: process.env.POSTGRES_PORT_EXTERNAL,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['./src/modules/**/domain/*.ts'],
  migrations: ['./src/infra/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infra/database/migrations',
  },
};

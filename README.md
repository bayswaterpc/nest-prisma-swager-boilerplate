## Blog-Backend-REST-API-NestJS-Prisma

A simple backend REST API for a blog built using NestJS, Prisma, PostgreSQL and Swagger.
Started from this excellent [prisma blog](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0), & [repo](https://github.com/TasinIshmam/blog-backend-rest-api-nestjs-prisma). Big kudos to [TasinIshmam](https://github.com/TasinIshmam).

### Installation

1. Install dependencies: `npm install`
2. Setup and customize your own env file: `cp .env.example .env`
3. Start a PostgreSQL database with docker using: `docker-compose up -d`.
   - If you have a local instance of PostgreSQL running, you can skip this step. In this case, you will need to change the `DATABASE_URL` inside the `.env` file with a valid [PostgreSQL connection string](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-details) for your database.
   - To generate initial data: `npx prisma db seed`
4. Apply database migrations: `npx prisma migrate dev`
5. Start the project: `npm run start:dev`
6. Access the project at http://localhost:3000/api

### Creating A New Model and Module

1. Add your model in `schema.prisma`
2. Apply migration: `npx prisma migrate dev --name "{Your Migration Name}"`
3. To seed with any new data make modifications to `prisma/seed.ts` and run `npx prisma db seed`
4. Generate nest CRUD with `npx nest generate resource`

## Blog-Backend-REST-API-NestJS-Prisma

A simple backend REST API for a blog built using NestJS, Prisma, PostgreSQL and Swagger.
Started from this excellent [prisma blog](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0), & [repo](https://github.com/TasinIshmam/blog-backend-rest-api-nestjs-prisma). Big kudos to [TasinIshmam](https://github.com/TasinIshmam).

### Installation

1. Install dependencies: `npm install`
2. Start a PostgreSQL database with docker using: `docker-compose up -d`.
   - If you have a local instance of PostgreSQL running, you can skip this step. In this case, you will need to change the `DATABASE_URL` inside the `.env` file with a valid [PostgreSQL connection string](https://www.prisma.io/docs/concepts/database-connectors/postgresql#connection-details) for your database.
   - To generate initial data: `npx prisma db seed`
3. Apply database migrations: `npx prisma migrate dev`
4. Start the project: `npm run start:dev`
5. Access the project at http://localhost:3000/api

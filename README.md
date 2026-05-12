# Warehouse 3D Layout

Browser-based 3D warehouse layout prototype using React, TypeScript, Three.js, Node.js, Express, and PostgreSQL.

## Run Locally

```bash
npm install
npm run dev
```

The Vite client runs on `http://localhost:5173` and proxies API calls to the Express server on `http://localhost:3001`.

If no PostgreSQL environment variables are set, the server returns a built-in sample mini-layout. To use PostgreSQL, set `DATABASE_URL` or the standard `PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER`, and `PGPASSWORD` variables.

## Database Schema

```sql
create table locations (
  id text primary key,
  name text not null,
  type text not null,
  x_min numeric not null,
  y_min numeric not null,
  x_max numeric not null,
  y_max numeric not null,
  z_min numeric not null,
  z_max numeric not null,
  description text
);
```

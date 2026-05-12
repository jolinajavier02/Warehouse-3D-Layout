create table if not exists locations (
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

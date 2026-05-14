# Warehouse 3D Layout

Warehouse 3D Layout is a browser-based warehouse and shop layout planner. It displays CSV or Excel data as an interactive 3D map with zones, blocks, ways, signs, dimensions, decorations, and editable uploaded data.

The app uses React, TypeScript, Vite, Three.js, and an optional Express/PostgreSQL API.

## Features

- Interactive 3D warehouse map with zoom, rotation, solid blocks, surfaces, boundaries, ways, signs, and dimension guides.
- Default 3-zone warehouse layout based on `location-30-shops.csv`.
- Counted rack/block layout:
  - Green rack rows with 13 blocks each.
  - Yellow rack row with 15 blocks.
  - Green side row with 7 blocks.
  - Bottom yellow rack groups with 3, 24, 24, and 12 blocks.
- Purple dashed planning outline beside the 7-block green row.
- Data Governance page for uploading, editing, adding, and deleting CSV/XLS/XLSX data.
- Layout Strategy page with a saved map view and an `Add Layout` builder.
- Builder tools for zones, shapes, signs, labels, colors, decorations, delete, undo, and save.
- Zone-aware placement so added layouts can be placed inside a selected zone.
- Added blocks and ways avoid existing blocks/ways where possible.
- Decorations include tree, animal character, person walking, person standing, and chair setup.

## Requirements

- Node.js 20 or newer
- npm

PostgreSQL is optional. The client can run from local CSV files and browser uploads without a database.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

The optional Express API runs on:

```text
http://localhost:3001
```

## Build

```bash
npm run build
```

Generated output goes to `client/dist/` and `server/dist/`. These folders are ignored by git and should not be edited directly.

## Type Check

```bash
npm run typecheck
```

## Project Structure

```text
.
├── client/
│   ├── public/
│   │   ├── data/                 # Source CSV layout files
│   │   └── vendor/sheetjs/       # Browser Excel parser
│   ├── src/
│   │   ├── components/map/       # Three.js map rendering
│   │   ├── hooks/                # Data-loading hooks
│   │   ├── services/             # CSV, Excel, and API parsing
│   │   ├── styles/               # App and map styles
│   │   ├── types/                # Shared TypeScript types
│   │   └── App.tsx               # Main app shell and builder tools
│   └── dist/                     # Generated build output, ignored
├── server/
│   ├── src/                      # Optional Express API
│   └── dist/                     # Generated build output, ignored
├── package.json                  # Workspace scripts
└── README.md
```

## Data Files

The source data folder is:

```text
client/public/data/
```

Current sample files:

```text
client/public/data/location.csv
client/public/data/location-v2.csv
client/public/data/location-v3.csv
client/public/data/location-30-shops.csv
```

`location-30-shops.csv` is the main default layout. It contains the 3-zone warehouse, counted rack blocks, ways, signs, boundary, surface, and planning outline.

Do not edit `client/dist/data/`; it is generated during build.

## Upload Schema

CSV and Excel uploads should use:

```text
id,type,name,xmin,ymin,xmax,ymax,zmin,zmax,description
```

The parser also accepts variants such as `xMin`, `x_min`, and `X Min`.

Supported `type` values include:

```text
Boundary
Layout Zone
Shop
Path
Gate
Rack
Office
Wall
Dock
```

Use `description` metadata for colors and special rendering:

```text
Color: #facc15
Dashed Outline Only
Zone: Zone C Right Storage
Shape: Animal
Decoration: Person walking
```

## Data Governance

1. Open `Data Governance`.
2. Click `Upload Data`.
3. Select a `.csv`, `.xls`, or `.xlsx` file.
4. The table updates and becomes the source for the map.
5. Editing rows updates the map.
6. Deleting rows removes them from the map.

Uploaded data is stored in browser `localStorage`, so each browser can keep a separate current layout.

## Layout Builder

Open `Layout Strategy`, then click `+ Add Layout`.

Builder tools:

- `Zones`: apply the 3-zone layout and add ways inside the selected zone.
- `Shapes`: add square, rectangle, long rectangle, circle, oblong, animal shape, custom block, custom boundary, and custom surface.
- `Signs`: add entrance, exit, CR, fire exit, fire extinguisher, gate, way, partition, and gap signs.
- `Label`: rename the selected block.
- `Color`: color selected blocks, all blocks, lines, boundary, or surface.
- `Decorations`: add tree, animal character, person walking, person standing, or chair setup.
- `Delete`: select a block and delete it.
- `Undo`: restore the last builder change.
- `Save`: return to Layout Strategy with the updated 3D map.

Use the `Add layout in zone` dropdown before adding shapes, signs, ways, or decorations. This helps place new items inside the selected zone and avoids crowding.

## Browser Notes

Chrome, Safari, Edge, and VS Code preview should load the same layout from the same source CSV. The app uses cache-busted CSV URLs and versioned localStorage keys so new layouts replace older saved previews.

If a browser still shows an old layout:

```text
Hard refresh the page
```

or clear site data/localStorage for `localhost:5173`.

In Chrome, you can also open DevTools, right-click reload, and choose:

```text
Empty Cache and Hard Reload
```

## Optional Database

The server can read locations from PostgreSQL when database environment variables are set. Without PostgreSQL, the client still works with CSV files and browser uploads.

Table schema:

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

Environment options:

```text
DATABASE_URL
PGHOST
PGPORT
PGDATABASE
PGUSER
PGPASSWORD
```

## Troubleshooting

- If blocks do not appear after upload, check the file headers and numeric coordinates.
- If added blocks overlap, choose a target zone before adding and make sure enough space exists in that zone.
- If ways appear too close to blocks, add them through the zone-aware `Add Way In Zone` control.
- If the browser shows stale output, hard refresh or clear localStorage.
- If ports are busy, stop the old dev server and run `npm run dev` again.
- If `client/dist/` or `server/dist/` appears, it is generated output. It can be deleted and rebuilt with `npm run build`.

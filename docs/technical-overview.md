# Technical Overview

## Purpose

This website displays warehouse/shop layout data as a 3D map. Users can upload CSV or Excel files, edit data, add layout blocks, assign zones, add signs, and save the updated map in the browser.

## Main Tools

| Tool | Used For |
| --- | --- |
| React | User interface |
| TypeScript | Type-safe frontend and backend code |
| Vite | Frontend dev server and production build |
| Three.js | 3D warehouse map rendering |
| Express | Optional backend API |
| PostgreSQL / pg | Optional database support |
| SheetJS browser bundle | Excel `.xls` / `.xlsx` parsing |
| npm workspaces | Manage `client` and `server` packages together |

## Main Packages

Root:

- `concurrently`: runs client and server dev commands together.

Client:

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `three`
- `typescript`
- `@types/react`
- `@types/react-dom`
- `@types/three`

Server:

- `express`
- `cors`
- `dotenv`
- `pg`
- `tsx`
- `typescript`
- `@types/express`
- `@types/cors`
- `@types/node`
- `@types/pg`

## Important Files

| File | Purpose |
| --- | --- |
| `client/src/App.tsx` | Main app pages, Data Governance, Layout Strategy, builder tools |
| `client/src/components/map/ThreeMapCanvas.tsx` | Three.js canvas, camera, zoom, rotation, selection |
| `client/src/components/map/MapObjects.ts` | 3D blocks, zones, signs, decorations, dimensions |
| `client/src/components/map/MapContainer.tsx` | Map wrapper and hover details |
| `client/src/services/csvLocations.ts` | CSV loading and parsing |
| `client/src/services/workbookLocations.ts` | Excel loading and parsing |
| `client/src/types/location.ts` | Shared layout data type |
| `client/public/data/location-30-shops.csv` | Main default warehouse zone layout |

## Run Commands

Install:

```bash
npm install
```

Start website:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

Type check:

```bash
npm run typecheck
```

Build:

```bash
npm run build
```

## Browser Notes

The website should work in Chrome, Safari, Edge, and VS Code preview.

If a browser shows an old layout, clear local site data or hard refresh. The app stores uploaded/current data in `localStorage`, so each browser can have its own saved layout.


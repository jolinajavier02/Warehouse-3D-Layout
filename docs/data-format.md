# Data Format

## Source Data Folder

All source CSV files are stored here:

```text
client/public/data/
```

Main default file:

```text
client/public/data/location-30-shops.csv
```

Do not edit generated build files inside `client/dist/`.

## Required Columns

CSV and Excel files should use:

```text
id,type,name,xMin,yMin,xMax,yMax,zMin,zMax,description
```

Accepted header variants include:

```text
xmin
x_min
xMin
X Min
```

## Supported Types

Commonly used types:

| Type | Meaning |
| --- | --- |
| `Boundary` | Outer warehouse boundary |
| `Layout Zone` | Colored zone/surface area |
| `Shop` | Block, rack, decoration, or placed object |
| `Path` | Way, lane, gap, or outline |
| `Gate` | Sign such as entrance, exit, CR |

## Coordinates

Each row is drawn from:

```text
xMin, yMin, xMax, yMax, zMin, zMax
```

Meaning:

- `xMin` / `xMax`: horizontal width position
- `yMin` / `yMax`: depth position
- `zMin` / `zMax`: height position

## Description Metadata

The `description` field can control rendering:

```text
Color: #facc15
Dashed Outline Only
Zone: Zone C Right Storage
Shape: Animal
Decoration: Person walking
```

Examples:

```csv
rack_01,Shop,Rack 01,25,86.5,27.2,88.9,0.2,2.4,"Assigned rack block; Color: #facc15"
zone_receiving,Layout Zone,Zone A Receiving,0,0,50,28,0.13,0.18,"Color: #dcf5d2"
outline_01,Path,Purple Outline,88,62,99,82,0.28,0.32,"Color: #7c3aed; Dashed Outline Only"
```


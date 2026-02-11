# Raleigh Crash Visualization

Interactive map visualization of vehicle crash data in Raleigh, NC. Built with React, Leaflet, and Vite.

## Features

- Interactive map powered by Leaflet and react-leaflet
- CSV crash data parsing with PapaParse
- Date-based filtering with date-fns
- Responsive UI with Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Leaflet / react-leaflet** - Interactive maps
- **PapaParse** - CSV data parsing
- **Tailwind CSS** - Utility-first styling
- **date-fns** - Date manipulation

## Project Structure

```
raleigh-crash-viz/
├── public/             # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Entry point
│   ├── App.css         # Component styles
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json
```

## License

MIT

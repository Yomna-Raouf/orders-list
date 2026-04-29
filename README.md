# Orders List

A responsive orders dashboard built with React, TypeScript, and Vite.

The app lets you:
- browse orders in both table and card layouts
- filter by status
- search by customer name or order ID
- sort by date (newest/oldest)
- toggle light/dark theme

## Run locally

### Prerequisites
- Node.js 20+ recommended
- npm

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Test and quality checks

### Unit tests (Vitest)
```bash
npm test
```

### Unit tests once with coverage
```bash
npm run test:run
```

### End-to-end tests (Playwright)
```bash
npm run e2e
```

### End-to-end test UI mode
```bash
npm run e2e:ui
```

### Lint
```bash
npm run lint
```

### Format
```bash
npm run format
```

### Check formatting only
```bash
npm run format:check
```

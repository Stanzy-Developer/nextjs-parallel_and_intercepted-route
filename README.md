# Next.js Project with Parallel Routing

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Parallel Routing

This project demonstrates Next.js 15's parallel routing capabilities, which allows multiple pages to be simultaneously rendered in the same layout. Parallel routes are created using named slots that start with `@`, enabling independent route segments to be rendered in parallel.

### Implementation

In our project, we have implemented parallel routing with two slots:
- `@team` - For team-related pages
- `@analytics` - For analytics-related content

The parallel routes are defined in the following structure:
```
app/
├── @team/
│   ├── page.tsx        # Team dashboard
│   └── setting/
│       ├── page.tsx    # Team settings
│       └── loading.tsx # Team settings loading state
├── @analytics/
│   ├── page.tsx        # Analytics dashboard
│   └── default.tsx     # Default analytics view
├── layout.tsx          # Root layout handling parallel routes
└── page.tsx           # Main dashboard
```

### Root Layout

The root layout (`app/layout.tsx`) is configured to accept and render these parallel routes:

```typescript
export default function RootLayout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <div className="flex gap-4 py-2">
          {analytics}
          {team}
        </div>
      </body>
    </html>
  );
}
```

### Benefits

- **Independent Loading States**: Each parallel route can load independently, improving the user experience
- **Isolated Error Handling**: Errors in one route don't affect the others
- **Colocated Related Features**: Team-specific features are grouped in the `@team` directory
- **Conditional Rendering**: Different segments can be shown or hidden based on conditions

### Example Implementations

1. **Team Dashboard (`@team/page.tsx`)**:
```typescript
const Team = async () => {
  await pause();
  return (
    <div className="card bg-blue-500">
      <h1 className="text-2xl font-bold text-white">Team</h1>
    </div>
  );
};
```

2. **Analytics Dashboard (`@analytics/page.tsx`)**:
```typescript
const Analytics = async () => {
  await pause();
  return (
    <div className="card bg-violet-500">
      <h1 className="text-2xl font-bold text-white">Analytics</h1>
    </div>
  );
};
```

3. **Loading State Example (`@team/setting/loading.tsx`)**:
```typescript
export default function Loading() {
  return <Skeleton className="card bg-gray-400"></Skeleton>;
}
```

### Error Handling

Each parallel route has its own error boundary. For example, if the team settings page throws an error, it will be contained within the team section:

```typescript
export default async function Setting() {
  await pause();
  throw new Error("Error");
  return (
    <div className="card bg-orange-500">
      <h1 className="text-2xl font-bold text-white">Team Settings</h1>
    </div>
  );
}
```

## Learn More

To learn more about Next.js and Parallel Routing, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Parallel Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) - learn about parallel routing in Next.js
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

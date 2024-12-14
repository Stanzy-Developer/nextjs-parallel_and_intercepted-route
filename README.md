# Next.js Dialog Component with Parallel Routes

A comprehensive guide to creating a dialog component using Next.js 13+ parallel and intercepting routes with smooth animations.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Getting Started](#getting-started)
- [Implementation Guide](#implementation-guide)
- [Usage Examples](#usage-examples)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Create a new Next.js project** (skip if you have an existing project)
```bash
npx create-next-app@latest my-dialog-app
cd my-dialog-app
```

2. **Install required dependencies**
```bash
npm install @radix-ui/react-dialog
npm install tailwindcss @tailwindcss/forms
npm install framer-motion
```

3. **Clone this repository** (if you want to use it as a template)
```bash
git clone https://github.com/yourusername/nextjs-dialog-component.git
cd nextjs-dialog-component
npm install
```

## Features

- 🎨 Smooth animations for open/close transitions
- 🛣️ Integration with Next.js parallel routes
- ⌨️ Keyboard accessible
- 🔒 Controlled modal behavior
- 🎭 Animation-aware navigation
- 📱 Responsive design
- 🎯 TypeScript support
- 🎨 Tailwind CSS integration

## Getting Started

### Prerequisites
- Node.js 16.8 or later
- Next.js 13 or later
- Basic knowledge of React and TypeScript

### Configuration

1. **Update your `tailwind.config.js`**
```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
        'fade-out': 'fadeOut 200ms ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
```

2. **Configure your `tsconfig.json`**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Implementation Guide

### 1. File Structure Setup 🗂️

Create the following folder structure:
```bash
app/
  ├── @modal/
  │   ├── (.)photo/
  │   │   └── [id]/
  │   │       ├── page.tsx
  │   │       └── Photo-dialog.tsx
  │   └── default.tsx
  ├── components/
  │   └── ui/
  │       └── dialog.tsx
  └── page.tsx
```

### 2. Component Implementation 🎨

#### Dialog Component (Photo-dialog.tsx)
```typescript
"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const PhotoDialog = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      setOpen(open);
      if (!open) {
        setTimeout(() => {
          router.back();
        }, 300);
      }
    },
    [router]
  );

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        className="card"
        side="left"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>Photo</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default PhotoDialog;
```

### 3. Component Breakdown 🔍

#### State Management
```typescript
const [open, setOpen] = useState(true);
```
- Controls dialog visibility
- Manages animation states
- Initializes as open

#### Animation Handler
```typescript
const handleOpenChange = useCallback((open: boolean) => {
  setOpen(open);
  if (!open) {
    setTimeout(() => {
      router.back();
    }, 300);
  }
}, [router]);
```
- Coordinates animations with navigation
- Ensures smooth transitions
- Matches animation duration

#### Event Prevention
```typescript
onPointerDownOutside={(e) => e.preventDefault()}
onEscapeKeyDown={(e) => e.preventDefault()}
```
- Maintains modal behavior
- Prevents unwanted closures
- Ensures intentional user interaction

### 4. Integration with Next.js 🛠️

#### Page Component
```typescript
// app/@modal/(.)photo/[id]/page.tsx
import PhotoDialog from "./Photo-dialog";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <PhotoDialog>
      <div>{params.id}</div>
    </PhotoDialog>
  );
};

export default Page;
```

#### Default Modal Component
```typescript
// app/@modal/default.tsx
export default function Default() {
  return null;
}
```

### 5. Usage Example 💡

```typescript
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/photo/123">
      Open Photo Dialog
    </Link>
  );
}
```

## Usage Examples

### Basic Dialog
```typescript
import { Dialog } from '@/components/ui/dialog'

export default function MyPage() {
  return (
    <Link href="/photo/123" className="button">
      Open Photo
    </Link>
  )
}
```

### With Custom Content
```typescript
<Dialog>
  <div className="p-4">
    <h2>Custom Content</h2>
    <p>Add any content here!</p>
  </div>
</Dialog>
```

## Advanced Features

### Custom Animations
```typescript
// In your CSS
.dialog-enter {
  opacity: 0;
  transform: scale(0.95);
}

.dialog-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 300ms, transform 300ms;
}
```

### Nested Dialogs
```typescript
<Dialog>
  <Dialog>
    <div>Nested content</div>
  </Dialog>
</Dialog>
```

## API Reference

### Dialog Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | false | Controls dialog visibility |
| onOpenChange | (open: boolean) => void | - | Called when open state changes |
| children | ReactNode | - | Dialog content |

## Performance Tips

1. **Lazy Loading**
```typescript
const Dialog = dynamic(() => import('@/components/ui/dialog'), {
  loading: () => <div>Loading...</div>,
})
```

2. **Image Optimization**
```typescript
<Image
  src="/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
  priority
/>
```

## Troubleshooting

### Common Issues

1. **Dialog Closes Too Fast**
   - Increase timeout duration
   - Check CSS animation duration
   - Verify state management

2. **No Animation on Close**
   - Check state updates
   - Verify CSS classes
   - Confirm timeout execution

3. **Navigation Issues**
   - Check route configuration
   - Verify parallel routes setup
   - Ensure default.tsx exists

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

- 📫 Email: support@example.com
- 💬 Discord: [Join our community](https://discord.gg/example)
- 📝 Issues: [GitHub Issues](https://github.com/yourusername/nextjs-dialog-component/issues)

## Acknowledgments

- Next.js team for the amazing framework
- Radix UI for accessible components
- Tailwind CSS for styling utilities


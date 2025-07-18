# Auth Me

A modern, Persian-language authentication application built with Next.js 15, featuring phone number authentication, user management, and a beautiful dark-themed UI.

## 🌟 Features

-   **Phone Number Authentication**: Secure login with Iranian phone number validation
-   **Persian Language Support**: Full RTL support with custom Iran Yekan X font
-   **Modern UI/UX**: Dark theme with beautiful, responsive design
-   **Form Validation**: Robust form validation using Zod and React Hook Form
-   **User Management**: Complete user authentication flow with localStorage and cookies
-   **Dashboard**: Protected dashboard with user profile information
-   **Toast Notifications**: User-friendly success and error notifications
-   **TypeScript**: Fully typed for better development experience

## 🚀 Tech Stack

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**: SCSS with CSS custom properties
-   **Form Management**: React Hook Form + Zod validation
-   **State Management**: TanStack Query for server state
-   **UI Components**: Custom component library
-   **Icons**: Lucide React
-   **Animations**: Motion (Framer Motion)
-   **Notifications**: React Hot Toast
-   **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/           # Authentication route group
│   │   ├── auth/         # Login page
│   │   └── styles.auth.scss
│   ├── (dashboard)/      # Dashboard route group
│   │   ├── dashboard/    # Dashboard pages
│   │   └── styles.dashboard.scss
│   └── globals.scss      # Global styles
├── components/
│   ├── auth-guard.tsx    # Authentication protection
│   ├── providers/        # React providers
│   └── ui/              # Reusable UI components
├── hooks/
│   ├── use-auth.ts      # Authentication utilities
│   └── use-user.ts      # User data fetching
├── types/
│   └── use.d.ts         # TypeScript definitions
└── constants/
    ├── font.ts          # Font configurations
    └── navigation-items.tsx
```

## 🎨 Design System

### Colors

-   **Primary**: Gray scale (100-1000)
-   **Success**: Green (#10b981)
-   **Error**: Red scale (#b92134, #4e1c23)
-   **Background**: Dark theme (#18191a)

### Typography

-   **Font**: Iran Yekan X (Persian) with English numerals support
-   **Weights**: 100-1000 (Thin to Heavy)
-   **Responsive**: px-to-rem conversion function

### Components

-   **Button**: Custom button with loading states
-   **Input**: Form inputs with validation display
-   **AuthGuard**: Route protection component

## 🔧 Getting Started

### Prerequisites

-   Node.js 18+
-   pnpm (recommended) or npm

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd auth-me-test-project
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Run the development server**

    ```bash
    pnpm dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

-   `pnpm dev` - Start development server with Turbopack
-   `pnpm build` - Build for production
-   `pnpm start` - Start production server
-   `pnpm lint` - Run ESLint

## 📱 Usage

### Authentication Flow

1. **Visit `/auth`** - Phone number login page
2. **Enter phone number** - Supports Iranian phone number formats
3. **Validation** - Real-time phone number validation
4. **Login** - Automatic user creation with random user data
5. **Redirect** - Successfully authenticated users are redirected to dashboard

### Phone Number Formats Supported

-   `0912 345 6789`
-   `+989123456789`
-   `989123456789`
-   Persian numerals (۰۱۲۳۴۵۶۷۸۹)

### Dashboard Features

-   **Welcome message** with user's first name
-   **Protected routes** - Only accessible to authenticated users
-   **User profile** - Display user information and avatar

## 🔒 Authentication

The app uses a combination of:

-   **localStorage** for user data persistence
-   **Cookies** for session management (7-day expiration)
-   **Route protection** with AuthGuard component

### User Data Structure

```typescript
{
    token: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    picture: string;
}
```

## 🎯 Key Features Explained

### Phone Number Validation

-   Real-time formatting (0912 345 6789)
-   Persian/Arabic numeral support
-   Iranian mobile number validation
-   Automatic country code addition (+98)

### Form Handling

-   React Hook Form for performance
-   Zod schema validation
-   Error message display
-   Loading states

### Responsive Design

-   Mobile-first approach
-   CSS custom properties for theming
-   Flexible grid layouts
-   Touch-friendly interactions

## 🌐 Internationalization

-   **RTL Support**: Full right-to-left layout support
-   **Persian Fonts**: Custom Iran Yekan X font family
-   **Localized Messages**: Persian error and success messages
-   **Number Formatting**: Support for Persian numerals

## 🔧 Development

### Adding New Features

1. **Components**: Add to `src/components/ui/`
2. **Pages**: Create in appropriate route group
3. **Hooks**: Add to `src/hooks/`
4. **Types**: Define in `src/types/`
5. **Styles**: Use SCSS with CSS custom properties

### Styling Guidelines

-   Use CSS custom properties for theming
-   Follow the established color palette
-   Use the `px-to-rem()` function for responsive sizing
-   Maintain RTL support for Persian content

## 📦 Dependencies

### Core Dependencies

-   `next@15.4.1` - React framework
-   `react@19.1.0` - UI library
-   `typescript@5` - Type safety
-   `sass@1.89.2` - CSS preprocessing

### Form & Validation

-   `react-hook-form@7.60.0` - Form management
-   `@hookform/resolvers@5.1.1` - Validation resolvers
-   `zod@4.0.5` - Schema validation

### UI & UX

-   `lucide-react@0.525.0` - Icons
-   `motion@12.23.6` - Animations
-   `react-hot-toast@2.5.2` - Notifications
-   `classnames@2.5.1` - Conditional classes

### Data Management

-   `@tanstack/react-query@5.83.0` - Server state management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

-   **Iran Yekan X Font**: Beautiful Persian typography
-   **RandomUser.me API**: For demo user data
-   **Next.js Team**: Amazing React framework
-   **TanStack**: Excellent React Query library

---

**Built with ❤️ for Dekamond**

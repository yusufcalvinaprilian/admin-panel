# 🎯 Admin Panel - Modern Dashboard

A modern, responsive admin panel built with **Next.js 15**, **Shadcn UI**, and **Tailwind CSS**. Features dark/light mode, interactive charts, and a professional design.

## ✨ Features

- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 📊 **Interactive Charts** - Beautiful data visualization with Recharts
- 🎨 **Modern UI** - Built with Shadcn UI components
- ⚡ **Fast Performance** - Optimized with Next.js 15 and Turbopack
- 🔧 **TypeScript** - Full type safety
- 📋 **Data Tables** - Sortable and filterable data tables
- 🧭 **Navigation** - Collapsible sidebar with smooth animations

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Charts**: Recharts
- **Icons**: Tabler Icons
- **Theme**: next-themes
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/admin-panel.git
   cd admin-panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   │   ├── analytics/     # Analytics page
│   │   ├── users/         # Users management
│   │   ├── settings/      # Settings page
│   │   └── ...
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── app-sidebar.tsx   # Main sidebar
│   ├── theme-toggle.tsx  # Theme switcher
│   └── ...
└── hooks/                # Custom hooks
    └── use-mobile.ts     # Mobile detection
```

## 🎨 Theme System

The admin panel supports three theme modes:

- **Light Mode** - Clean, bright interface
- **Dark Mode** - Easy on the eyes
- **System** - Follows your OS preference

Toggle themes using the sun/moon icon in the header.

## 📊 Dashboard Features

### **Main Dashboard**
- Overview cards with key metrics
- Interactive area chart
- Recent activity table

### **Analytics**
- Traffic overview charts
- User demographics
- Performance metrics

### **User Management**
- User list with search
- Role management
- Status indicators

### **Settings**
- General settings
- Security configuration
- Notification preferences

## 🔧 Customization

### **Adding New Pages**
1. Create a new folder in `src/app/dashboard/`
2. Add a `page.tsx` file
3. Update the sidebar navigation in `src/components/app-sidebar.tsx`

### **Modifying Themes**
Edit color variables in `src/app/globals.css`:
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode variables */
}
```

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### **Deploy to Other Platforms**

The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Shadcn UI**

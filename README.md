# Countries App

This project is the front-end project for the Worktable's Full Stack Developer hiring test.

## ✨ Features

- List countries info form Monday.com
- Filter countries list by any row info through a search bar
- Display row data in a modal.
- Fetch and display country's current weather data.

## 🚀 Tech Stack

**Frontend:** React, Vite, TypeScript, Vibe Design System  
**State Management:** React Context
**Other Libraries:** TanStack Query, dayjs.

## 📦 Getting Started

Clone the project and install dependencies:

```bash
git clone https://github.com/joao-tripoli/countries-app.git
cd countries-app
pnpm i
```

Start the development server:

```bash
pnpm dev
```

## 📁 Folder Structure

```
src/
├── context/        # App context (includes ToastContext for global toasts)
├── pages/          # Application pages
│   └── countries/  # All logic related to the countries page (components, hooks, etc.)
├── hooks/          # Custom hooks
├── providers/      # Wrappers that add functionality to the whole application
├── utils/          # Reusable functions
├── App.tsx
├── types.d.ts      # Global types
└── main.tsx
```

## 🔍 What I Focused On

- Clean and readable code
- Reusable and modular components
- Proper error handling and loading states

## 🙋‍♂️ About Me

This project was built as part of a technical interview challenge.  
If you have any questions or want to discuss it further, feel free to reach out:

[João Matheus Tripoli] – [[LinkedIn](https://www.linkedin.com/in/joao-tripoli/)]

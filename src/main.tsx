import '@vibe/core/tokens';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import VibeThemeProvider from './providers/VibeThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VibeThemeProvider>
      <App />
    </VibeThemeProvider>
  </StrictMode>
);

'use client';

import { ThemeProvider } from '@vibe/core';
import mondaySdk from 'monday-sdk-js';
import { useEffect, useState } from 'react';

const monday = mondaySdk();

export function VibeThemeProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = useState<any>({});

  useEffect(() => {
    monday.listen('context', (res) => {
      setContext(res.data);
    });
  }, []);

  return (
    <ThemeProvider
      themeConfig={context?.themeConfig}
      systemTheme={context?.theme}
    >
      <>{children}</>
    </ThemeProvider>
  );
}

export default VibeThemeProvider;

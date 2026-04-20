import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('mcc-theme', 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#0f1117';
      document.body.style.color = '#e4e7f0';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#1e293b';
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return { theme, setTheme, toggleTheme };
}

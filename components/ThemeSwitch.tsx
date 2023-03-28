'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-8 w-8 rounded-md bg-slate-300 ring-slate-600 transition hover:ring-2 dark:bg-slate-600 dark:ring-slate-300"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} size="sm" className="text-gray-900" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="sm" className="dark:text-gray-100" />
      )}
    </button>
  );
}

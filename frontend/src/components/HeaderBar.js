import React, { useState, useEffect } from 'react';

// Split nav links into primary and secondary for better layout
const PRIMARY_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Diseases', id: 'diseases' },
  { label: 'Predict', id: 'predict' },
  { label: 'How It Works', id: 'how-it-works' },
];
const SECONDARY_LINKS = [
  { label: 'FAQ', id: 'faq' },
  { label: 'About / Team', id: 'about' },
  { label: 'Contact / Feedback', id: 'contact' },
  { label: 'Model Info', id: 'model-info' },
];

const HeaderBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark mode if no theme is set
    const stored = localStorage.getItem('theme');
    if (stored === null) return true;
    return stored === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="w-full bg-gradient-to-r from-gray-100/90 via-white/90 to-gray-200/90 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 backdrop-blur shadow-lg sticky top-0 z-50 transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 text-white rounded-full font-bold text-xl shadow">VA</span>
          <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight">Vision AI</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <div className="flex gap-6">
            {PRIMARY_LINKS.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200 px-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4 ml-8 pl-8 border-l border-gray-300 dark:border-gray-700 text-sm opacity-80">
            {SECONDARY_LINKS.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 px-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="flex items-center gap-2">
          {/* Theme toggle button - always visible on mobile, left of Sign In on desktop */}
          <button
            className="inline-flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 mr-2 md:mr-0 border border-gray-300 dark:border-gray-700"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>
          <button className="hidden md:inline-block px-4 py-2 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 text-white rounded-lg font-semibold shadow hover:from-gray-800 hover:to-gray-900 transition-colors duration-200 border border-gray-300 dark:border-gray-700">Sign In</button>
          {/* Mobile menu button */}
          <button
            className="inline-flex md:hidden items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-300 dark:border-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-b from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 animate-fade-in-down">
          <div className="flex flex-col gap-2 px-6 py-4">
            {[...PRIMARY_LINKS, ...SECONDARY_LINKS].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-2 px-4 py-2 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-700 text-white rounded-lg font-semibold shadow hover:from-gray-800 hover:to-gray-900 transition-colors duration-200 border border-gray-300 dark:border-gray-700">Sign In</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderBar;

function toggleTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
}

if (!document.documentElement.getAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
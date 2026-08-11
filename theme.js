const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

const setTheme = (isDark) => {
  root.classList.toggle('darkmode', isDark);
  localStorage.setItem('darkmode', isDark ? 'active' : 'inactive');
};

const savedTheme = localStorage.getItem('darkmode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

setTheme(savedTheme ? savedTheme === 'active' : prefersDark);

themeToggle.addEventListener('click', () => {
  const isDark = !root.classList.contains('darkmode');
  setTheme(isDark);
});
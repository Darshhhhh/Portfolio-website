export default function ChnageTheme(Theme) {
  sessionStorage.setItem("CurrentTheme", Theme);
  const root = document.documentElement;
  const themeMap = {
    Dark: {
      "--TextColor": "#FFFFFF",
      "--MainBackgroundColor": "#141414",
    },
    Light: {
      "--TextColor": "#000000",
      "--MainBackgroundColor": "#f5f5f5",
    },
  };

  Object.entries(themeMap[Theme]).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

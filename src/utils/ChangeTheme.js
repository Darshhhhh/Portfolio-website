export default function ChnageTheme(Theme) {
  sessionStorage.setItem("CurrentTheme", Theme);
  const root = document.documentElement;
  const themeMap = {
    Dark: {
      "--TextColor": "#FFFFFF",
    },
    Light: {
      "--TextColor": "#000000",
    },
  };

  Object.entries(themeMap[Theme]).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}

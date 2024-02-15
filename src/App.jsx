import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
}
export default App;
  
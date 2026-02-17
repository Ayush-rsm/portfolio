import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Toaster } from "./components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/react";



function App() {
  return (
    <>
     <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
}

export default App;
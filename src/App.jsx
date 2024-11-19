import React from "react";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="m-auto w-[80%]">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

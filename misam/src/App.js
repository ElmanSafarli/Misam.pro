import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigate, ScrollToTop } from "./modules";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigate />
    </BrowserRouter>
  );
}

export default App;

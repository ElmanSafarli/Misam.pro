import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigate, ScrollToTop, LanguageProvider } from "./modules";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navigate />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router";
import { Navigate } from "./modules";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
      </BrowserRouter>
    </div>
  );
}

export default App;

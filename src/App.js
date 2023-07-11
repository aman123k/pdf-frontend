import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage.js";
import History from "./component/History.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

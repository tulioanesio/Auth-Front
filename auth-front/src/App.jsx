import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Signin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

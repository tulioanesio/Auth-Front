import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import ListUsers from "./pages/list-users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/List-users" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

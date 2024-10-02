import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";
import SignIn from "./components/login/signin";
import SignUp from "./components/login/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

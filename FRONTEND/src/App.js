import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";
import SignIn from "./Pages/forms/Login.jsx";
import SignUp from "./Pages/forms/Register.jsx";
import PostsPage from "./Pages/posts/PostsPage.jsx";
import CreatePost from "./Pages/create-post/CreatePost.jsx";
import Error from "./Pages/404/error.jsx";
import AdminDashbord from './Pages/Admin/AdminDashbord';
import PostDetail from "./Pages/posts/PostDetail.jsx";
import ForgotPassword from "./components/login/forgotpassword.jsx";
import ResetPassword from "./components/login/resetpassword.jsx";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/create-post" element={<CreatePost />} />
        <Route path="/posts/details/:id" element={<PostDetail />} />

        <Route path="/admin" element={<AdminDashbord />} />
        
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

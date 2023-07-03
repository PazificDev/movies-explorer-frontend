import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import style from "./App.module.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

function App() {
    return (
      <div className={style.root}>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route 
            path="/profile" 
            element={<Profile />} 
          />
          <Route 
            path="/signup"
            element={<Register />}
          />  
          <Route 
            path="/signin"
            element={<Login />}
          />
          <Route
            path="/movies"
            element={<Movies />}
          />
          <Route 
            path="*" 
            element={<NotFound />}
          />  
        </Routes>
      </div>
    );
}

export default App;

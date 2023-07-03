import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
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
        </Routes>
      </div>
    );
}

export default App;

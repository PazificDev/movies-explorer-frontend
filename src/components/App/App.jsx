import Main from "../Main/Main";
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
        </Routes>
      </div>
    );
}

export default App;

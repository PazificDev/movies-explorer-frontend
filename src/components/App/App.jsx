import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getUserData, getContent } from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import token from "../../utils/Token";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false)



  const tokenCheck = () => {
    const jwt = token.getAccessToken();
    if (jwt) {
      getContent(jwt)
        .then((res) => {
          if (res) {
            setIsLogged(true);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isLogged) {
      setIsLoading(true);
      Promise.all([getUserData(), getMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setMovies(moviesData);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
    // eslint-disable-next-line
  }, [isLogged]);

  return (
    <div className={style.root}>
      <CurrentUserContext.Provider value={currentUser}>
        { !isLoading && <Routes>
          <Route
            path="/"
            element={<Main isLogged={isLogged} />}
          />
          <Route 
            path="/profile" 
            element={<Profile isLogged={isLogged} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />} 
          />
          <Route 
            path="/signup"
            element={<Register />}
          />  
          <Route 
            path="/signin"
            element={<Login setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/movies"
            element={<Movies isLogged={isLogged} movies={movies} />}
          />
          <Route
            path="/saved-movies"
            element={<SavedMovies isLogged={isLogged} />}
          />
          <Route 
            path="*" 
            element={<NotFound />}
          />  
        </Routes>}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

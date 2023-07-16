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
import { getUserData, getContent, getSavedMovies } from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";
import token from "../../utils/Token";
import ProtectedRoute from "../ProtectedRoute.jsx/ProtectedRoute";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState({});
  const [savedMovies, setSavedMovies] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false)
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
        .then(() => {
          setIsTokenChecked(true);
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
      Promise.all([getUserData(), getMovies(), getSavedMovies()])
        .then(([userData, moviesData, savedMoviesData]) => {
          setCurrentUser(userData);
          setMovies(moviesData);
          setSavedMovies(savedMoviesData);
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
          {!isLoading && <Routes>
            <Route
              path="/"
              element={<Main isLogged={isLogged} />}
            />
            {isTokenChecked && <Route 
              path="/profile" 
              element={<ProtectedRoute path="/profile" element={Profile} isLogged={isLogged} setIsLogged={setIsLogged} setCurrentUser={setCurrentUser} />} 
            />}
            <Route 
              path="/signup"
              element={<Register setIsLogged={setIsLogged} />}
            />  
            <Route 
              path="/signin"
              element={<Login setIsLogged={setIsLogged} />}
            />
            {isTokenChecked && <Route
              path="/movies"
              element={<ProtectedRoute path="/movies" element={Movies} isLogged={isLogged} movies={movies} savedMovies={savedMovies} />}
            />}
            {isTokenChecked && <Route
              path="/saved-movies"
              element={<ProtectedRoute path="/saved-movies" element={SavedMovies} isLogged={isLogged} savedMovies={savedMovies} setSavedMovies={setSavedMovies} />}
            />}
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

import { useLocation } from "react-router-dom";
import style from "./MoviesCard.module.css"
import { createSavedMovie, deleteSavedMovie, getSavedMovies } from "../../utils/MainApi";
import { useState } from "react";

const MoviesCard = ({ poster, trailer, title, time, movie, savedMovies, render, setRender }) => {

  const [isSaved, setIsSaved] = useState(false);
  const [state, setState] = useState(true)


  const location = useLocation();

  const handleSave = () => {
    setIsSaved(true)
    setState(true)
    createSavedMovie(movie.country, movie.director, movie.duration, movie.year, movie.description, `https://api.nomoreparties.co${movie.image.url}`, movie.trailerLink, `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`, movie.id, movie.nameRU, movie.nameEN)
  }

  const handleDelete = () => {
    location.pathname === '/movies'
    ? getSavedMovies().then((data) => deleteSavedMovie(data.find(item => item.movieId === movie.id)._id).then(() => {setIsSaved(false); setState(false)}))
    : deleteSavedMovie(movie._id).then(() => setRender(!render));
  }

  return ( 
    <div className={style.moviesCard}>
      <div className={style.moviesCard__item}>
        <a className={style.moviesCard__link} href={trailer} target="_blank" rel="noreferrer">
        <img className={style.moviesCard__poster} src={poster} alt="Постер фильма" />
        </a>
          {location.pathname === "/movies" && (!state || (!isSaved && (savedMovies.length > 0 ? !savedMovies.some(item => item.movieId === movie.id) : true))) && <button onClick={handleSave} className={style.moviesCard__saveButton}>Сохранить</button>}
          {location.pathname === "/movies" && state && ((savedMovies.length > 0 && savedMovies.some(item => item.movieId === movie.id)) || isSaved) && <button className={style.moviesCard__savedButton} onClick={handleDelete} />}
          {location.pathname === "/saved-movies" ? <button className={style.moviesCard__savedButton_page_saved} onClick={handleDelete} /> : ""}
      </div>
      <div className={style.moviesCard__info}>
        <h2 className={style.moviesCard__infoTitle}>{title}</h2>
        <p className={style.moviesCard__infoDuration}>{time}</p>
      </div>
    </div>
   );
}

export default MoviesCard;
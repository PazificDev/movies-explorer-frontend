import { useLocation } from "react-router-dom";
import style from "./MoviesCard.module.css"
import { createSavedMovie, deleteSavedMovie } from "../../utils/MainApi";

const MoviesCard = ({ poster, trailer, title, time, movie, savedMovies }) => {


  const location = useLocation();

  const handleSave = () => {
    createSavedMovie(movie.country, movie.director, movie.duration, movie.year, movie.description, `https://api.nomoreparties.co${movie.image.url}`, movie.trailerLink, `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`, movie.id, movie.nameRU, movie.nameEN)
  }

  const handleDelete = () => {
    deleteSavedMovie(movie._id);
  }

  return ( 
    <div className={style.moviesCard}>
      <div className={style.moviesCard__item}>
        <a className={style.moviesCard__link} href={trailer} target="_blank" rel="noreferrer">
        <img className={style.moviesCard__poster} src={poster} alt="Постер фильма" />
        </a>
          {location.pathname === "/movies" && <button onClick={handleSave} className={style.moviesCard__saveButton}>Сохранить</button>}
          {location.pathname === "/movies" && <button className={style.moviesCard__savedButton} />}
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
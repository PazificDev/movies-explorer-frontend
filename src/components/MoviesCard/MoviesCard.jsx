import { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./MoviesCard.module.css"

const MoviesCard = ({ poster, title, time }) => {

  const location = useLocation();

  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(!isSaved);
  }

  return ( 
    <div className={style.moviesCard}>
      <div className={style.moviesCard__item}>
        <img className={style.moviesCard__poster} src={poster} alt="Постер фильма" />
          {location.pathname === "/movies" ? isSaved ? ""  : <button onClick={handleSave} className={style.moviesCard__saveButton}>Сохранить</button> : ""}
          {/* Добавить на функционале проверку на isSaved, сейчас удалил */}
          {<button onClick={handleSave} className={location.pathname === "/movies" ? style.moviesCard__savedButton : style.moviesCard__savedButton_page_saved}></button>}
      </div>
      <div className={style.moviesCard__info}>
        <h2 className={style.moviesCard__infoTitle}>{title}</h2>
        <p className={style.moviesCard__infoDuration}>{time}</p>
      </div>
    </div>
   );
}

export default MoviesCard;
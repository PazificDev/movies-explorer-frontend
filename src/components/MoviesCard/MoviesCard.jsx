import { useState } from "react";
import style from "./MoviesCard.module.css"

const MoviesCard = ({ poster, title, time }) => {

  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(!isSaved);
  }

  return ( 
    <div className={style.moviesCard}>
      <div className={style.moviesCard__item}>
        <img className={style.moviesCard__poster} src={poster} alt="Постер фильма" />
          {isSaved ? ""  : <button onClick={handleSave} className={style.moviesCard__saveButton}>Сохранить</button>}
          {isSaved ? <button onClick={handleSave} className={style.moviesCard__savedButton}></button> : ""}
      </div>
      <div className={style.moviesCard__info}>
        <h2 className={style.moviesCard__infoTitle}>{title}</h2>
        <p className={style.moviesCard__infoDuration}>{time}</p>
      </div>
    </div>
   );
}

export default MoviesCard;
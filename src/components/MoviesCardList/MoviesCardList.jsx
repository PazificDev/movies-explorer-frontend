import style from "./MoviesCardList.module.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ data }) => {

  const location = useLocation();

  return ( 
    <section className={style.root}>
      <div className={style.moviesCardList__container}>
        {data.map(item => {
          return <MoviesCard poster={item.poster} title={item.title} time={item.time} key={item.id} />
        })}
      </div>
      {location.pathname === "/movies" && <button className={style.moviesCardList__loadButton}>Ещё</button>}
    </section>
   );
}
 
export default MoviesCardList;
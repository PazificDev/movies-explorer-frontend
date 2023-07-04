import style from "./MoviesCardList.module.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesData } from "../../utils/moviesData"

const MoviesCardList = () => {

  return ( 
    <section className={style.root}>
      <div className={style.moviesCardList__container}>
        {moviesData.map(item => {
          return <MoviesCard poster={item.poster} title={item.title} time={item.time} key={item.id} />
        })}
      </div>
      <button className={style.moviesCardList__loadButton}>Ещё</button>
    </section>
   );
}
 
export default MoviesCardList;
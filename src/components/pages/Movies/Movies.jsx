import { useState } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./Movies.module.css"
import MoviesCardList from "../../MoviesCardList/MoviesCardList";


const Movies = ({ isLogged, movies }) => {

  const [isChecked, setIsChecked] = useState(false);


  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = () => {

  }

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm handleSubmit={handleSubmit} />
        <FilterCheckbox handleCheck={handleCheck} />
        <MoviesCardList data={movies} />
      </main>
      <Footer />
    </div> 
   );
}
 
export default Movies;
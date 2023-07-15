import { useState } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./Movies.module.css"
import MoviesCardList from "../../MoviesCardList/MoviesCardList";


const Movies = ({ isLogged, movies, savedMovies, searchParams, setSearchParams }) => {

  const [isChecked, setIsChecked] = useState(false);


  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm searchParams={searchParams} setSearchParams={setSearchParams} />
        <FilterCheckbox handleCheck={handleCheck} searchParams={searchParams} setSearchParams={setSearchParams} />
        <MoviesCardList data={movies} savedMovies={savedMovies} />
      </main>
      <Footer />
    </div> 
   );
}
 
export default Movies;
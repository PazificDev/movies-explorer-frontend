import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./Movies.module.css"
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import { useState } from "react";
import useInput from "../../../hooks/useInput";
import Preloader from "../../Preloader/Preloader"

const Movies = ({ isLogged, movies, savedMovies }) => {

  const [isLoading, setIsLoading] = useState(false);

  const [isSearched, setIsSearched] = useState(localStorage.getItem('pageMoviesIsSearched') !== null ? true : false)
  const [isChecked, setIsChecked] = useState(localStorage.getItem('pageMoviesSearchCheckbox') !== null 
  ? localStorage.getItem('pageMoviesSearchCheckbox') === 'true' 
  ? true 
  : false
  : false);
  const [sortedData, setSortedData] = useState(localStorage.getItem('pageMoviesSortedData') !== null ? JSON.parse(localStorage.getItem('pageMoviesSortedData')) : [])

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  
  const search = useInput(localStorage.getItem('pageMoviesSearchValue') !== null ? localStorage.getItem('pageMoviesSearchValue') : "");

  const handleSubmitSearch = (e) => {
    setIsLoading(true);
    setTimeout(() => {setIsLoading(false)}, 500)
    e.preventDefault();
    const sortedMovies = isChecked ? movies.filter(item => item.duration <= 40 && item.nameRU.toLowerCase().includes(search.value)) : movies.filter(item => item.nameRU.toLowerCase().includes(search.value))
    setSortedData(sortedMovies)
    setIsSearched(true)
    localStorage.setItem('pageMoviesSearchValue', search.value);
    localStorage.setItem('pageMoviesSearchCheckbox', isChecked);
    localStorage.setItem('pageMoviesIsSearched', true);
    localStorage.setItem('pageMoviesSortedData', JSON.stringify(sortedMovies))
  }

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm search={search} onSubmit={handleSubmitSearch} />
        <FilterCheckbox isChecked={isChecked} handleCheckbox={handleCheckbox} />
        {isLoading
          ? <Preloader />
          : isSearched 
            ? sortedData.length > 0 
              ? <MoviesCardList data={sortedData} isSearched={isSearched} savedMovies={savedMovies} />
              : <p className={style.mainContent__empty}>По запросу ничего не найдено</p>
            : ""}
      </main>
      <Footer />
    </div> 
   );
}
 
export default Movies;
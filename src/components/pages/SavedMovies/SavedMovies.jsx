import { useState, useEffect } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./SavedMovies.module.css";
import { getSavedMovies } from "../../../utils/MainApi";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import useInput from "../../../hooks/useInput";

const SavedMovies = ({ isLogged, savedMovies, setSavedMovies }) => {

  const [render, setRender] = useState(false);

  const [isSearched, setIsSearched] = useState(localStorage.getItem('pageSavedMoviesIsSearched') !== null ? true : false)
  const [isChecked, setIsChecked] = useState(localStorage.getItem('pageSavedMoviesSearchCheckbox') !== null 
  ? localStorage.getItem('pageSavedMoviesSearchCheckbox') === 'true' 
  ? true 
  : false
  : false);
  const [sortedData, setSortedData] = useState(localStorage.getItem('pageSavedMoviesSortedData') !== null ? JSON.parse(localStorage.getItem('pageSavedMoviesSortedData')) : savedMovies)

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  
  const search = useInput(localStorage.getItem('pageSavedMoviesSearchValue') !== null ? localStorage.getItem('pageSavedMoviesSearchValue') : "");

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const sortedMovies = isChecked ? savedMovies.filter(item => item.duration <= 40 && item.nameRU.toLowerCase().includes(search.value)) : savedMovies.filter(item => item.nameRU.toLowerCase().includes(search.value))
    setSortedData(sortedMovies)
    setIsSearched(true)
    localStorage.setItem('pageSavedMoviesSearchValue', search.value);
    localStorage.setItem('pageSavedMoviesSearchCheckbox', isChecked);
    localStorage.setItem('pageSavedMoviesIsSearched', true);
    localStorage.setItem('pageSavedMoviesSortedData', JSON.stringify(sortedMovies))
  }

  useEffect(() => {
    getSavedMovies()
    .then((data) => {
      setSavedMovies(data);
      const sortedMovies = isChecked ? data.filter(item => item.duration <= 40 && item.nameRU.toLowerCase().includes(search.value)) : data.filter(item => item.nameRU.toLowerCase().includes(search.value))
      setSortedData(sortedMovies)
    })
    // eslint-disable-next-line
  }, [render])

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm search={search} onSubmit={handleSubmitSearch} />
        <FilterCheckbox isChecked={isChecked} handleCheckbox={handleCheckbox} />
        {sortedData.length > 0 
          ? <MoviesCardList data={sortedData} isSearched={isSearched} savedMovies={savedMovies} render={render} setRender={setRender} />
          : <p className={style.mainContent__empty}>По запросу ничего не найдено</p>}
      </main>
      <Footer />
    </div> 
   );
}
 
export default SavedMovies;
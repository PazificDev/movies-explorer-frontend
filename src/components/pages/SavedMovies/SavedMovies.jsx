import { useState, useEffect } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./SavedMovies.module.css";
import { getSavedMovies } from "../../../utils/MainApi";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import useInput from "../../../hooks/useInput";
import { SHORT_MOVIE } from "../../../utils/constants";

const SavedMovies = ({ isLogged, savedMovies, setSavedMovies }) => {

  const [render, setRender] = useState(false);

  const [isSearched, setIsSearched] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [sortedData, setSortedData] = useState(savedMovies)

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }
  
  const search = useInput("");

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const sortedMovies = isChecked ? savedMovies.filter(item => item.duration <= SHORT_MOVIE && item.nameRU.toLowerCase().includes(search.value)) : savedMovies.filter(item => item.nameRU.toLowerCase().includes(search.value))
    setSortedData(sortedMovies)
    setIsSearched(true)
  }

  useEffect(() => {
    getSavedMovies()
    .then((data) => {
      setSavedMovies(data);
      const sortedMovies = isChecked ? data.filter(item => item.duration <= SHORT_MOVIE && item.nameRU.toLowerCase().includes(search.value)) : data.filter(item => item.nameRU.toLowerCase().includes(search.value))
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
        {isSearched 
        ? sortedData.length > 0 
          ? <MoviesCardList data={sortedData} isSearched={isSearched} savedMovies={savedMovies} render={render} setRender={setRender} />
          : <p className={style.mainContent__empty}>По запросу ничего не найдено</p>
        : <MoviesCardList data={sortedData} isSearched={isSearched} savedMovies={savedMovies} render={render} setRender={setRender} />}
      </main>
      <Footer />
    </div> 
   );
}
 
export default SavedMovies;
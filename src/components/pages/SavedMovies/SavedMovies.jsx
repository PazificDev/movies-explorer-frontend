import { useEffect, useState } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./SavedMovies.module.css";
import { getSavedMovies } from "../../../utils/MainApi";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";

const SavedMovies = ({ isLogged, savedMovies, setSavedMovies, searchParams, setSearchParams }) => {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getSavedMovies()
    .then((data) => {
      setSavedMovies(data);
    })
  }, [])

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = () => {

  }

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm handleSubmit={handleSubmit} searchParams={searchParams} setSearchParams={setSearchParams} />
        <FilterCheckbox handleCheck={handleCheck} searchParams={searchParams} setSearchParams={setSearchParams} />
        <MoviesCardList data={savedMovies} />
      </main>
      <Footer />
    </div> 
   );
}
 
export default SavedMovies;
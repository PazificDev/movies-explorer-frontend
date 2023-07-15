import { useEffect } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./SavedMovies.module.css";
import { getSavedMovies } from "../../../utils/MainApi";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";

const SavedMovies = ({ isLogged, savedMovies, setSavedMovies }) => {

  useEffect(() => {
    getSavedMovies()
    .then((data) => {
      setSavedMovies(data);
    })
  }, [])


  const handleSubmit = () => {

  }

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm handleSubmit={handleSubmit} />
        <FilterCheckbox />
        <MoviesCardList data={savedMovies} />
      </main>
      <Footer />
    </div> 
   );
}
 
export default SavedMovies;
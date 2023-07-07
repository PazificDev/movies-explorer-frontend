import { useState } from "react";
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./SavedMovies.module.css"
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import { savedMoviesData } from "../../../utils/savedMoviesData"

const SavedMovies = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = () => {

  }

  return (
    <div className={style.root}>
      <Header isLogged={true}/>
      <main className={style.mainContent}>
        <SearchForm handleSubmit={handleSubmit} />
        <FilterCheckbox handleCheck={handleCheck} />
        <MoviesCardList data={savedMoviesData} />
      </main>
      <Footer />
    </div> 
    
   );
}
 
export default SavedMovies;
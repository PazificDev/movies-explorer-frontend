
import FilterCheckbox from "../../FilterCheckbox/FilterCheckbox";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchForm from "../../SearchForm/SearchForm";
import style from "./Movies.module.css"
import MoviesCardList from "../../MoviesCardList/MoviesCardList";


const Movies = ({ isLogged, movies, savedMovies, setCurrentSearch }) => {

  return (
    <div className={style.root}>
      <Header isLogged={isLogged}/>
      <main className={style.mainContent}>
        <SearchForm data={movies} setCurrentSearch={setCurrentSearch} />
        <FilterCheckbox />
        <MoviesCardList data={movies} savedMovies={savedMovies} />
      </main>
      <Footer />
    </div> 
   );
}
 
export default Movies;
import style from "./MoviesCardList.module.css"
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CurrentSearchContext } from "../../contexts/CurrentSearchContext";

const MoviesCardList = ({ savedMovies }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const location = useLocation();

  const [visibleMoviesDesktop, setVisibleMoviesDesktop] = useState(12);
  const [visibleMoviesTablet, setVisibleMoviesTablet] = useState(8);
  const [visibleMoviesMobile, setVisibleMoviesMobile] = useState(5);
  const [isLoadButton, setIsLoadButton] = useState(true);

  const moviesPageData = useContext(CurrentSearchContext)
  const data = location.pathname === '/movies' ? moviesPageData : savedMovies

  const setWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log(data)
    window.addEventListener('resize', setWindow);
    return () => {
      window.removeEventListener('resize', setWindow)
    }
    // eslint-disable-next-line
  }, [windowWidth])

  const handlevisibleMoviesDesktop = () => {
    if (visibleMoviesDesktop + 3 < data.length) {
      setVisibleMoviesDesktop(visibleMoviesDesktop + 3)
    } else if (visibleMoviesDesktop + 3 === data.length) {
      setVisibleMoviesDesktop(visibleMoviesDesktop + 3)
      setIsLoadButton(false)
    } else if (visibleMoviesDesktop + 2 < data.length) {
      setVisibleMoviesDesktop(visibleMoviesDesktop + 2)
    } else if (visibleMoviesDesktop + 2 === data.length) {
      setVisibleMoviesDesktop(visibleMoviesDesktop + 2)
      setIsLoadButton(false)
    } else if (visibleMoviesDesktop + 1 < data.length) {
      setVisibleMoviesDesktop(visibleMoviesDesktop + 1)
    } else if (visibleMoviesDesktop + 1 === data.length) {
      setVisibleMoviesDesktop(visibleMoviesDesktop + 1)
      setIsLoadButton(false)
    } else {
      setIsLoadButton(false)
    }
  } 

  const handlevisibleMoviesTablet = () => {
    if (visibleMoviesTablet + 2 < data.length) {
      setVisibleMoviesTablet(visibleMoviesTablet + 2)
    } else if (visibleMoviesTablet + 2 === data.length) {
      setVisibleMoviesTablet(visibleMoviesTablet + 2)
      setIsLoadButton(false)
    } else if (visibleMoviesTablet + 1 < data.length) {
      setVisibleMoviesTablet(visibleMoviesTablet + 1)
    } else if (visibleMoviesTablet + 1 === data.length) {
      setVisibleMoviesTablet(visibleMoviesTablet + 1)
      setIsLoadButton(false)
    }
  } 

  const handlevisibleMoviesMobile = () => {
    if (visibleMoviesMobile + 2 < data.length) {
      setVisibleMoviesMobile(visibleMoviesMobile + 2)
    } else if (visibleMoviesMobile + 2 === data.length) {
      setVisibleMoviesMobile(visibleMoviesMobile + 2)
      setIsLoadButton(false)
    } else if (visibleMoviesMobile + 1 < data.length) {
      setVisibleMoviesMobile(visibleMoviesMobile + 1)
    } else if (visibleMoviesMobile + 1 === data.length) {
      setVisibleMoviesMobile(visibleMoviesMobile + 1)
      setIsLoadButton(false)
    }
  } 


  const renderedMovies = window.innerWidth < 550 ? visibleMoviesMobile : window.innerWidth < 1140 ? visibleMoviesTablet : visibleMoviesDesktop
    
  return ( 
    <section className={style.root}>
      <div className={style.moviesCardList__container}>
        {localStorage.getItem('isSearched') === 'true' && data.length > 0 
        ? data.slice(0, renderedMovies).map(item => {
          return <MoviesCard savedMovies={savedMovies} movie={item} poster={location.pathname === "/movies" ? `https://api.nomoreparties.co${item.image.url}` : item.image} trailer={item.trailerLink} title={item.nameRU} time={`${Math.floor(item.duration / 60)}ч ${item.duration % 60}м`} key={location.pathname === '/movies' ? item.id : item.movieId} />
        })
        : <p className={style.moviesCardList__empty}>{localStorage.getItem('isSearched') === 'true' ? 'По запросу ничего не найдено' : ''}</p> 
        }
      </div>
      {localStorage.getItem('isSearched') === 'true' && location.pathname === "/movies" && data.length > visibleMoviesMobile && isLoadButton && <button className={style.moviesCardList__loadButton} onClick={window.innerWidth < 550 ? handlevisibleMoviesMobile : window.innerWidth < 1140 ? handlevisibleMoviesTablet : handlevisibleMoviesDesktop}>Ещё</button>}
    </section>
   );
}
 
export default MoviesCardList;
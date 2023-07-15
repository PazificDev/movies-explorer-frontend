import style from "./SearchForm.module.css"
import useInput from "../../hooks/useInput";

const SearchForm = ({ data, setCurrentSearch }) => {

  const search = useInput(localStorage.getItem('searchValue') !== null ? localStorage.getItem('searchValue') : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('isSearched', true)
    localStorage.setItem('searchValue', search.value)
    if (localStorage.getItem('shortMovie') === 'true') {
      const sortedData = data.filter(item => item.duration <= 40 && item.nameRU.toLowerCase().includes(search.value))
      localStorage.setItem('moviesData', JSON.stringify(sortedData))
      setCurrentSearch(sortedData)
      console.log(JSON.parse(localStorage.getItem('moviesData')))
    } else {
      const sortedData = data.filter(item => item.nameRU.toLowerCase().includes(search.value))
      localStorage.setItem('moviesData', JSON.stringify(sortedData))
      setCurrentSearch(sortedData)
      console.log(JSON.parse(localStorage.getItem('moviesData')))
    }
    
  }

  return (
    <section className={style.root}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <input className={style.searchForm__input} type="text" placeholder="Фильм" required onChange={(e) => search.onChange(e)} value={search.value} />
        <button type="submit" className={style.searchForm__submitButton}>Найти</button>
      </form>

    </section> 

   );
}
 
export default SearchForm;
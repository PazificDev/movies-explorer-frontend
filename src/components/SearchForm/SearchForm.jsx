import style from "./SearchForm.module.css"
import useInput from "../../hooks/useInput";

const SearchForm = ({ handleSubmit }) => {

  const search = useInput('');

  return (
    <section className={style.root}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <input className={style.searchForm__input} type="text" placeholder="Фильм" required onChange={(e) => {search.onChange(e);}} value={search.value} />
        <button type="submit" className={style.searchForm__submitButton}>Найти</button>
      </form>

    </section> 

   );
}
 
export default SearchForm;
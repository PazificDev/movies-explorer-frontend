import style from "./SearchForm.module.css"

const SearchForm = ({ search, onSubmit }) => {

  return (
    <section className={style.root}>
      <form onSubmit={onSubmit} className={style.searchForm}>
        <input className={style.searchForm__input} type="text" placeholder="Фильм" required onChange={(e) => search.onChange(e)} value={search.value} />
        <button type="submit" className={style.searchForm__submitButton}>Найти</button>
      </form>

    </section> 

   );
}
 
export default SearchForm;
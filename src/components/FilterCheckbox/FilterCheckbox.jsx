import { useContext } from "react";
import style from "./FilterCheckbox.module.css"
import { CurrentSearchContext } from "../../contexts/CurrentSearchContext";

const FilterCheckbox = ({ setSearchParams }) => {

  const searchParams = useContext(CurrentSearchContext)

  const handleCheck = () => {
    setSearchParams({...searchParams, shortMovie: !searchParams.shortMovie})
  }

  return (
    <section className={style.root}>
      <div>
        <div className={style.filterCheckbox}>
        <input type="checkbox" onChange={handleCheck} name="filterCheckbox" className={style.filterCheckbox__input} id="filterCheckbox" tabIndex="0" checked={searchParams.shortMovie} />
        <label className={style.filterCheckbox__label} htmlFor="filterCheckbox">
          <span className={style.filterCheckbox__inner}></span>
          <span className={style.filterCheckbox__switch}></span>
        </label>
        </div> 
      </div>
      <p className={style.filterCheckbox__text}>Короткометражки</p>
    </section>
   );
}
 
export default FilterCheckbox;
import { useState } from "react"
import style from "./FilterCheckbox.module.css"

const FilterCheckbox = () => {

  const [isChecked, setIsChecked] = useState(localStorage.getItem('shortMovie'))

  const handleCheck = () => {
    if (localStorage.getItem('shortMovie') === 'true') {
      localStorage.setItem('shortMovie', false)
      setIsChecked('false')
    } else {
      localStorage.setItem('shortMovie', true)
      setIsChecked('true')
    }
  }

  return (
    <section className={style.root}>
      <div>
        <div className={style.filterCheckbox}>
        <input type="checkbox" onChange={handleCheck} name="filterCheckbox" className={style.filterCheckbox__input} id="filterCheckbox" tabIndex="0" checked={isChecked === 'true'} />
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
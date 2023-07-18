import style from "./FilterCheckbox.module.css"

const FilterCheckbox = ({ isChecked, handleCheckbox }) => {

  return (
    <section className={style.root}>
      <div>
        <div className={style.filterCheckbox}>
        <input type="checkbox" onChange={handleCheckbox} name="filterCheckbox" className={style.filterCheckbox__input} id="filterCheckbox" tabIndex="0" checked={isChecked === true ? true : false} />
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
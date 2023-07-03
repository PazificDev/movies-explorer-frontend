import style from "./FilterCheckbox.module.css"

const FilterCheckbox = ({ handleCheck }) => {
  return (
    <section className={style.root}>
      <div>
        <div className={style.filterCheckbox}>
        <input type="checkbox" name="filterCheckbox" className={style.filterCheckbox__input} id="filterCheckbox" tabindex="0" />
        <label className={style.filterCheckbox__label} for="filterCheckbox">
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
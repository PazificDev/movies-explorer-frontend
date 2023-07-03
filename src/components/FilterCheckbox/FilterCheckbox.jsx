import style from "./FilterCheckbox.module.css"

const FilterCheckbox = ({ handleCheck }) => {
  return (
    <section className={style.root}>
      <div>
        <div className={style.checkbox}>
          <input type="checkbox" onClick={handleCheck} name="filterCheckbox" className={style.filterCheckbox} id="filterCheckbox" tabindex="0" />
          <label className={style.filterCheckbox__label} for="filterCheckbox"></label>
        </div> 
      </div>
      <p className={style.filterCheckbox__text}>Короткометражки</p>
    </section>

   );
}
 
export default FilterCheckbox;
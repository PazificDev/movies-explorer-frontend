import Navigation from "../../Navigation/Navigation";
import style from "./Burger.module.css"

const Burger = ({ onClose, isLogged }) => {
  return ( 
    <section className={style.root}>
      <div className={style.burger__wrapper}></div>
      <div className={style.burger__container}>
        <button onClick={onClose} className={style.burger__closeButton} />
        <Navigation isLogged={isLogged} onClose={onClose} isBurger={true} />
      </div>
    </section>
   );
}
 
export default Burger;
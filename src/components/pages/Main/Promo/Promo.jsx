import style from "./Promo.module.css"
import { logo } from "../../../../images/Promo/promo"

const Promo = () => {
  return ( 
    <section className={style.promo}>
      <div className={style.promo__info}>
        <h1 className={style.promo__infoTitle}>Учебный проект студента факультета Веб-разработки.</h1>
        <p className={style.promo__infoText}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#aboutProject" className={style.promo__infoButton}>Узнать больше</a>
      </div>
      <img className={style.promo__logo} src={logo} alt="Земной шар, сложенный из слов веб" />
    </section>
   );
}
 
export default Promo;
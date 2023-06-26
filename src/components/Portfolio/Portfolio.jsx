import style from "./Portfolio.module.css"
import { arrow } from "../../images/AboutMe/aboutMe";

const Portfolio = () => {
  return ( 
    <section className={style.portfolio}>
      <div className={style.portfolio__mainContent}>
        <h2 className={style.portfolio__mainContentTitle}>Портфолио</h2>
        <a className={style.portfolio__mainContentLink} href="https://github.com/PazificDev/how-to-learn" target="_blank" rel="noreferrer">
          <p className={style.portfolio__mainContentLinkTitle}>Статичный сайт</p>
          <img className={style.portfolio__mainContentLinkImg} src={arrow} alt="Стрелка" />
        </a>
        <a className={style.portfolio__mainContentLink} href="https://github.com/PazificDev/russian-travel" target="_blank" rel="noreferrer">
          <p className={style.portfolio__mainContentLinkTitle}>Адаптивный сайт</p>
          <img className={style.portfolio__mainContentLinkImg} src={arrow} alt="Стрелка" />
          </a>
        <a className={style.portfolio__mainContentLink} href="https://github.com/PazificDev/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
          <p className={style.portfolio__mainContentLinkTitle}>Одностраничное приложение</p>
          <img className={style.portfolio__mainContentLinkImg} src={arrow} alt="Стрелка" />
          </a>
      </div>
    </section>
   );
}
 
export default Portfolio;
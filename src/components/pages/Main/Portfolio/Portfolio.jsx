import style from "./Portfolio.module.css"

const Portfolio = () => {
  return ( 
    <section className={style.portfolio}>
      <div className={style.portfolio__mainContent}>
        <h2 className={style.portfolio__mainContentTitle}>Портфолио</h2>
        <a className={style.portfolio__mainContentLink} href="https://github.com/PazificDev/how-to-learn" target="_blank" rel="noreferrer">
          <p className={style.portfolio__mainContentLinkTitle}>Статичный сайт</p>
          <p className={style.portfolio__mainContentLinkArrow}>↗</p>
        </a>
        <a className={style.portfolio__mainContentLink} href="https://github.com/PazificDev/russian-travel" target="_blank" rel="noreferrer">
          <p className={style.portfolio__mainContentLinkTitle}>Адаптивный сайт</p>
          <p className={style.portfolio__mainContentLinkArrow}>↗</p>
          </a>
        <a className={style.portfolio__mainContentLink} href="https://github.com/PazificDev/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
          <p className={style.portfolio__mainContentLinkTitle}>Одностраничное приложение</p>
          <p className={style.portfolio__mainContentLinkArrow}>↗</p>
          </a>
      </div>
    </section>
   );
}
 
export default Portfolio;
import style from "./Footer.module.css"

const Footer = () => {
  return ( 
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <h2 className={style.footer__contentTitle}>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      </div>
      <div className={style.footer__socials}>
        <p className={style.footer__socialsYear}>© 2023</p>
        <div className={style.footer__socialsLinks}>
          <a className={style.footer__socialsLink} href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className={style.footer__socialsLink} href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;
import { photo } from "../../images/AboutMe/aboutMe";
import style from "./AboutMe.module.css"

const AboutMe = () => {
  return ( 
    <section className={style.aboutMe}>
      <div className={style.aboutMe__header}>
        <h2 className={style.aboutMe__title}>Студент</h2>
      </div>
      <div className={style.aboutMe__mainContent}>
        <article className={style.aboutMe__mainContentInfo}>
          <h3 className={style.aboutMe__mainContentInfoTitle}>Юрий</h3>
          <p className={style.aboutMe__mainContentInfoSpec}>Фронтенд-разработчик, 27 лет</p>
          <p className={style.aboutMe__mainContentInfoAbout}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
          <a className={style.aboutMe__mainContentLink} href="https://github.com/PazificDev" target="_blank" rel="noreferrer">Github</a>
        </article>
        <img className={style.aboutMe__mainContentPic} src={photo} alt="Фото автора" />
      </div>
    </section>
   );
}
 
export default AboutMe;
import style from "./Main.module.css";
import Header from "../../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../../Footer/Footer";

const Main = ({ isLogged }) => {
  return (
    <div className={style.root}>
      <Header isLogged={isLogged} theme="color" />
        <main>
          <section className={style.promo__container}>
            <Promo />
            <span id="aboutProject"></span>
          </section>
          <section className={style.aboutProject__container}>
            <AboutProject />
          </section>
          <section className={style.stack__container}>
            <Techs />
          </section>
          <section className={style.other__container}>
            <AboutMe />
            <Portfolio />
          </section>
        </main>
      <Footer />
    </div>
  );
};

export default Main;

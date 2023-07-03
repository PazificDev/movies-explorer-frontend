import style from "./Main.module.css";
import Header from "../../Header/Header";
import Promo from "../../Promo/Promo";
import AboutProject from "../../AboutProject/AboutProject";
import Techs from "../../Techs/Techs";
import AboutMe from "../../AboutMe/AboutMe";
import Portfolio from "../../Portfolio/Portfolio";
import Footer from "../../Footer/Footer";

const Main = () => {
  return (
    <>
    <section className={style.root__promo}>
      <div className={style.promo__container}>
        <Header isLogged={false} theme="color" />
        <Promo />
      </div>
    </section>
    <section className={style.root__aboutProject}>
      <div className={style.aboutProject__container}>
        <AboutProject />
      </div>
    </section>
    <section className={style.root__stack}>
      <div className={style.stack__container}>
        <Techs />
      </div>
    </section>
    <section className={style.root__other}>
      <div className={style.other__container}>
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    </section>
    </>
  );
};

export default Main;

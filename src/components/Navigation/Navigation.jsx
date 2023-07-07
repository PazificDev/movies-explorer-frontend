import { icon } from "../../images/Header/header";
import style from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Navigation = ({ isLogged, setWindow }) => {

    const location = useLocation();

    useEffect(() => {
        window.addEventListener('resize', setWindow);
        return () => {
          window.removeEventListener('resize', setWindow)
        }
      }, [setWindow])

    return (
        <nav className={style.navPanel}>
            <div className={style.navPanel__tab}>
                {isLogged && (
                    <>
                        {window.innerWidth < 769 && <Link
                            to={"/"}
                            className={location.pathname === "/" ? style.navPanel__item_active : style.navPanel__item}
                        >
                            Главная
                        </Link>}
                        <Link
                            to={"/movies"}
                            className={location.pathname === "/movies" ? style.navPanel__item_active : style.navPanel__item}
                        >
                            Фильмы
                        </Link>
                        <Link to={"/saved-movies"} className={location.pathname === "/saved-movies" ? style.navPanel__item_active : style.navPanel__item}>
                            Сохранённые фильмы
                        </Link>
                    </>
                )}
            </div>
            <div
                className={`${style.navPanel__tab} ${style.navPanel__tab_auth}`}
            >
                {isLogged ? (
                    <Link to="/profile" className={style.navPanel__accountBtn}>
                      <p className={style.navPanel__accountBtnTxt}>Аккаунт</p>
                      <img className={style.navPanel__accountBtnImg} src={icon} alt="Иконка профиля" />
                    </Link>
                ) : (
                    <>
                        <Link to={"/signup"} className={style.navPanel__item}>
                            Регистрация
                        </Link>
                        <Link to={"/signin"} className={style.navPanel__item_auth}>
                            Войти
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;

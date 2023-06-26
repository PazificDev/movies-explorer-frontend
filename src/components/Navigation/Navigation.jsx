import { icon } from "../../images/Header/header";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = ({ isLogged }) => {
    return (
        <nav className={style.navPanel}>
            <div className={style.navPanel__tab}>
                {isLogged && (
                    <>
                        <Link
                            to={"/"}
                            className={`${style.navPanel__item} ${style.navPanel__item_active}`}
                        >
                            Фильмы
                        </Link>
                        <Link to={"/"} className={style.navPanel__item}>
                            Сохранённые фильмы
                        </Link>
                    </>
                )}
            </div>
            <div
                className={`${style.navPanel__tab} ${style.navPanel__tab_auth}`}
            >
                {isLogged ? (
                    <button className={style.navPanel__accountBtn}>
                      <p className={style.navPanel__accountBtnTxt}>Аккаунт</p>
                      <img className={style.navPanel__accountBtnImg} src={icon} alt="Иконка профиля" />
                    </button>
                ) : (
                    <>
                        <Link to={"/"} className={style.navPanel__item}>
                            Регистрация
                        </Link>
                        <button to={"/"} className={style.navPanel__item_auth}>
                            Войти
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;

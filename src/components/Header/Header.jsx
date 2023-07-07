import style from "./Header.module.css"
import { logo } from "../../images/Header/header";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Burger from "./Burger/Burger";

const Header = ({ isLogged, theme }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [isBurgerOpened, setIsBurgerOpened] = useState(false)
  
  const setWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  const handleBurger = () => {
    setIsBurgerOpened(!isBurgerOpened)
  }

  useEffect(() => {
    window.addEventListener('resize', setWindow);
    return () => {
      window.removeEventListener('resize', setWindow)
    }
  }, [windowWidth])

  const navigate = useNavigate();

  return ( 
    <header className={theme==='color' ? style.header_color : style.header}>
      <img className={style.header__logo} src={logo} onClick={() => {navigate("/")}} alt="Логотип" />
      {window.innerWidth > 768 ? <Navigation setWindow={setWindow} isLogged={isLogged} /> : isLogged === false ? <Navigation setWindow={setWindow} isLogged={isLogged} /> : <button onClick={handleBurger} className={style.header__burgerButton}></button>}
      {isBurgerOpened && <Burger onClose={handleBurger} isLogged={isLogged} />}
    </header>
   );
}
 
export default Header;
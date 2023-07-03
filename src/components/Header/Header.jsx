import style from "./Header.module.css"
import { logo } from "../../images/Header/header";
import Navigation from "../Navigation/Navigation";

const Header = ({ isLogged, theme }) => {
  return ( 
    <div className={theme==='color' ? style.header_color : style.header}>
      <img className={style.header__logo} src={logo} alt="Логотип" />
      <Navigation isLogged={isLogged} />
    </div>
   );
}
 
export default Header;
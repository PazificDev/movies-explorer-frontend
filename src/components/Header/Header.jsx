import style from "./Header.module.css"
import { logo } from "../../images/Header/header";
import Navigation from "../Navigation/Navigation";

const Header = ({ isLogged }) => {
  return ( 
    <div className={style.header}>
      <img className={style.header__logo} src={logo} alt="Логотип" />
      <Navigation isLogged={isLogged} />
    </div>
   );
}
 
export default Header;
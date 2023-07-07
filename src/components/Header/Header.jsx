import style from "./Header.module.css"
import { logo } from "../../images/Header/header";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

const Header = ({ isLogged, theme }) => {

  const navigate = useNavigate();

  return ( 
    <div className={theme==='color' ? style.header_color : style.header}>
      <img className={style.header__logo} src={logo} onClick={() => {navigate("/")}} alt="Логотип" />
      <Navigation isLogged={isLogged} />
    </div>
   );
}
 
export default Header;
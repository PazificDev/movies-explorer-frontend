import style from "./Auth.module.css"
import { logo } from "../../images/Auth/auth"
import { Link, useNavigate } from "react-router-dom";

const Auth = ({ title, formName, onSubmitForm, submitButtonText, formData, authText, path, authButtonText }) => {

  const navigate = useNavigate();

  return ( 
    <main className={style.root}>
      <section className={style.auth__container}>
        <img className={style.auth__logo} onClick={() => {navigate("/")}} src={logo} alt="Логотип" />
        <h1 className={style.auth__title}>{title}</h1>
        <form className={style.auth__form} name={formName} onSubmit={onSubmitForm}>
          {formData.map(item => {
            return (
              <div className={style.auth__formItem}>
                <label className={style.auth__formInputLabel} htmlFor="name">{item.label}</label>
                <input className={style.auth__formInput} id={item.id} type={item.type} defaultValue={item.default} onChange={item.onChange} value={item.value} />
                <span className={style.auth__formInputError}>{item.type === "password" ? "Что-то пошло не так..." : ""}</span>
            </div>
            )
          })}
          <button className={formName === "loginForm" ? style.auth__formSubmitButton_style_login : style.auth__formSubmitButton} type="submit">{submitButtonText}</button>
        </form>
        <div className={style.auth__auth}>
          <p className={style.auth__authText}>{authText}</p>
          <Link to={path} className={style.auth__authButton}>{authButtonText}</Link>
        </div>
        
      </section>
    </main>
   );
}
 
export default Auth;
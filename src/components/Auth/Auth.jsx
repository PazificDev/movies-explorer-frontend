import style from "./Auth.module.css"
import { logo } from "../../images/Auth/auth"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Auth = ({ title, formName, onSubmitForm, submitButtonText, formData, authText, path, authButtonText, error }) => {

  const location = useLocation()

  const navigate = useNavigate();

  const [isFormInvalid, setIsFormInvalid] = useState(true)
  // eslint-disable-next-line
  useEffect(() => {
    if (formData.some(item => !item[0].inputValid)) {
      setIsFormInvalid(true)
    } else {
      setIsFormInvalid(false)
    }
  })

  return ( 
    <main className={style.root}>
      <section className={style.auth__container}>
        <img className={style.auth__logo} onClick={() => {navigate("/")}} src={logo} alt="Логотип" />
        <h1 className={style.auth__title}>{title}</h1>
        <form className={style.auth__form} name={formName} onSubmit={onSubmitForm}>
          {formData.map(item => {
            return (
              <div className={style.auth__formItem} key={item[2]}>
                <label className={style.auth__formInputLabel}>{item[1]}</label>
                <input className={style.auth__formInput} onBlur={e => item[0].onBlur(e)} onChange={e => item[0].onChange(e)} value={item[0].value} formNoValidate />
                {!item[0].isDirty && <span className={style.auth__formInputError}></span>}
                {item[0].isDirty && <span className={style.auth__formInputError}>
                  {
                  item[0].isEmpty ? "Поле не может быть пустым" : item[0].isEmailError ? "Введите корректную почту" : item[0].isNameError ? "Допустимы буквы, пробел и дефис" : item[0].minLengthError ? "Недостаточно символов" : ""
                  }
                </span>}
            </div>
            )
          })}
          {location.pathname === '/signin' ? error && <p className={style.auth__error}>Неправильные почта или пароль</p> : error && <p className={style.auth__error}>Пользователь с таким email уже существует</p>}
          <button disabled={isFormInvalid} className={formName === "loginForm" ? style.auth__formSubmitButton_style_login : style.auth__formSubmitButton} type="submit">{submitButtonText}</button>
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
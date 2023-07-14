import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import Header from "../../Header/Header";
import style from "./Profile.module.css"
import { useContext, useState } from "react";
import token from "../../../utils/Token";
import useInput from "../../../hooks/useInput";
import { patchUserInfo } from "../../../utils/MainApi";

const Profile = ({ isLogged, setIsLogged, setCurrentUser }) => {

  const user = useContext(CurrentUserContext)

  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const handleLogOut = () => {
    token.logOut();
    setIsLogged(false);
    navigate("/", { replace: true });
  }

  const handleChangeParams = (e) => {
    e.preventDefault();
    setIsDisabled(false);
  }

  const name = useInput(`${user.name}`, {isEmpty: true, isName: true, minLength: 2});
  const email = useInput(`${user.email}`, {isEmpty: true, isEmail: true});

  const onSubmitForm = (e) => {
    e.preventDefault();
    patchUserInfo(name.value, email.value)
    .then((data) => {
      setCurrentUser(data)
      setIsDisabled(true)
    })
    .catch(() => {

    })
  }

  return ( 
    <div className={style.root}>
      <Header isLogged={isLogged} />
      <main className={style.mainContent}>
        <h2 className={style.mainContent__title}>
          {`Привет, ${user.name}!`}
        </h2>
        <form name="profileForm" onSubmit={onSubmitForm} className={style.mainContent__form}>
          <div className={style.mainContent__formContainer}>
            <div className={style.mainContent__formItem}>
              <label className={style.mainContent__formTitle} htmlFor="name">Имя</label>
              <input className={style.mainContent__formInput} disabled={isDisabled} onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} id="name" type="text" value={name.value} formNoValidate />
            </div>
            {name.isDirty && <span className={style.mainContent__formError}>
                  {
                  name.isEmpty ? "Поле не может быть пустым" : name.isNameError ? "Допустимы буквы, пробел и дефис" : name.minLengthError ? "Недостаточно символов" : ""
                  }
                </span>}
          </div>
          <div className={style.mainContent__formContainer}>
            <div className={style.mainContent__formItem}>
              <label className={style.mainContent__formTitle}>E-mail</label>
              <input className={style.mainContent__formInput} disabled={isDisabled} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} id="email" type="email" value={email.value} formNoValidate />
            </div>
            {email.isDirty && <span className={style.mainContent__formError}>
                  {
                  email.isEmpty ? "Поле не может быть пустым" : email.isEmailError ? "Введите корректную почту" : ""
                  }
                </span>}
          </div>
          {isDisabled 
            ? <button className={style.mainContent__changesButton} onClick={handleChangeParams}>Редактировать</button>
            : <button className={style.mainContent__formSubmitButton} type="submit">Сохранить</button>}
        </form>
        {isDisabled && <button className={style.mainContent__deauthButton} onClick={handleLogOut}>Выйти из аккаунта</button>}
      </main>
    </div>
   );
}
 
export default Profile;
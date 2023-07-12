import Header from "../../Header/Header";
import style from "./Profile.module.css"
// import useInput from "../../../hooks/useInput";

const Profile = () => {

  const onSubmitForm = () => {

  }

  return ( 
    <div className={style.root}>
      <Header isLogged={true} />
      <main className={style.mainContent}>
        <h2 className={style.mainContent__title}>
          Привет, Виталий!
        </h2>
        <form name="profileForm" onSubmit={onSubmitForm} className={style.mainContent__form}>
          <div className={style.mainContent__formItem}>
            <label className={style.mainContent__formTitle} htmlFor="name">Имя</label>
            <input className={style.mainContent__formInput} id="name" defaultValue="Виталий" type="text" />
          </div>
          <div className={style.mainContent__formItem}>
            <label className={style.mainContent__formTitle}>E-mail</label>
            <input className={style.mainContent__formInput} id="email" defaultValue="pochta@yandex.ru" type="email" />
          </div>
          <button className={style.mainContent__formSubmitButton} type="submit">Редактировать</button>
        </form>
        <button className={style.mainContent__deauthButton}>Выйти из аккаунта</button>
      </main>
    </div>
   );
}
 
export default Profile;
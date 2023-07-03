import Auth from "../../Auth/Auth";

const Login = () => {

  const onSubmitForm = () => {

  }

  const formData = [
    {
      label: "E-mail",
      id: "email",
      type: "email",
      default: "pochta@yandex.ru"
    },
    {
      label: "Пароль",
      id: "password",
      type: "password",
      default: ""
    }
  ]

  return ( 
    <Auth 
      title="Рады видеть!" 
      formName="loginForm" 
      onSubmitForm={onSubmitForm} 
      submitButtonText="Войти" 
      formData={formData}
      authText="Ещё не зарегистрированы?"
      authButtonText="Регистрация"
      path="/signup"
      />
   );
}
 
export default Login;
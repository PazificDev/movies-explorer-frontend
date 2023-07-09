import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";

const Login = () => {

  const onSubmitForm = () => {

  }

  const [email, emailChange] = useInput("");
  const [password, passwordChange] = useInput("");

  const formData = [
    {
      label: "E-mail",
      id: "email",
      type: "email",
      default: "pochta@yandex.ru",
      onChange: (e) => {
        emailChange(e);
      },
      value: email,
    },
    {
      label: "Пароль",
      id: "password",
      type: "password",
      default: "",
      onChange: (e) => {
        passwordChange(e);
      },
      value: password,
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
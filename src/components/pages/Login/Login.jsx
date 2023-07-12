import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";

const Login = () => {

  const onSubmitForm = () => {

  }
  const email = useInput("", {isEmpty: true, isEmail: true});
  const password = useInput("", {isEmpty: true, minLength: 8});

  const formData = [[email, "Почта", 1], [password, "Пароль", 2]]

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
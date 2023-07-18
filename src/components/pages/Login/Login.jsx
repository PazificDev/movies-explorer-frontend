import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";
import { login } from "../../../utils/MainApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setIsLogged, setIsTokenChecked }) => {

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(email.value, password.value)
    .then(() => {
      setIsTokenChecked(true)
      setIsLogged(true);
      setTimeout(navigate("/movies", { replace: true }), 1000);
      setError(false)
    })
    .catch(() => {
      setError(true);
    })
  }

  const email = useInput("", {isEmpty: true, isEmail: true});
  const password = useInput("", {isEmpty: true, minLength: 8});

  const formData = [[email, "Почта", 1, 'email'], [password, "Пароль", 2, 'password']]

  return ( 
    <Auth
      error={error} 
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
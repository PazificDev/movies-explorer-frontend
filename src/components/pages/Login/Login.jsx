import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";
import { login } from "../../../utils/MainApi";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogged }) => {

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(email.value, password.value)
    .then(() => {
      setTimeout(2000)
      setIsLogged(true);
      navigate("/movies", { replace: true });
    })
    .catch(() => {

    })
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
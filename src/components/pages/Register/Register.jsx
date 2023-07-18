import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";
import { register, login } from "../../../utils/MainApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = ({ setIsLogged, setIsTokenChecked }) => {

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    register(name.value, email.value, password.value)
    .then(() => {
      login(email.value, password.value)
      .then(() => {
        setIsTokenChecked(true);
        setIsLogged(true);
        setTimeout(navigate("/movies", { replace: true }), 1000);
        setError(false);
      })
    })
    .catch(() => {
      setError(true)
    })
  }

  const name = useInput("", {isEmpty: true, isName: true, minLength: 2});
  const email = useInput("", {isEmpty: true, isEmail: true});
  const password = useInput("", {isEmpty: true, minLength: 8});

  const formData = [[name, "Имя", 1, 'text'], [email, "Почта", 2, 'email'], [password, "Пароль", 3, 'password']];

  return ( 
    <Auth 
      error={error}
      title="Добро пожаловать!" 
      formName="registerForm" 
      onSubmitForm={onSubmitForm} 
      submitButtonText="Зарегистрироваться" 
      formData={formData}
      authText="Уже зарегистрированы?"
      authButtonText="Войти"
      path="/signin"
      />
   );
}
 
export default Register;
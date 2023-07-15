import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";
import { register, login } from "../../../utils/MainApi";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLogged }) => {

  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    register(name.value, email.value, password.value)
    .then(() => {
      login(email.value, password.value)
      .then(() => {
        setIsLogged(true);
        navigate("/movies", { replace: true });
      })
    })
    .catch(() => {
      
    })
  }

  const name = useInput("", {isEmpty: true, isName: true, minLength: 2});
  const email = useInput("", {isEmpty: true, isEmail: true});
  const password = useInput("", {isEmpty: true, minLength: 8});

  const formData = [[name, "Имя", 1], [email, "Почта", 2], [password, "Пароль", 3]];

  return ( 
    <Auth 
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
import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";

const Register = () => {
  const onSubmitForm = (e) => {
    e.preventDefault();
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
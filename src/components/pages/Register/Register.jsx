import Auth from "../../Auth/Auth";
import useInput from "../../../hooks/useInput";

const Register = () => {

  const onSubmitForm = () => {

  }

  const [name, nameChange] = useInput("");
  const [email, emailChange] = useInput("");
  const [password, passwordChange] = useInput("");

  const formData = [
    {
      label: "Имя",
      id: "name",
      type: "text",
      default: "Виталий",
      onChange: (e) => {
        nameChange(e);
      },
      value: name,
    },
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
      default: "password",
      onChange: (e) => {
        passwordChange(e);
      },
      value: password,
    }
  ]

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
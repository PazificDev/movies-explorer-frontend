import Auth from "../../Auth/Auth";

const Register = () => {

  const onSubmitForm = () => {

  }

  const formData = [
    {
      label: "Имя",
      id: "name",
      type: "text",
      default: "Виталий"
    },
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
      default: "password"
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
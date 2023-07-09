import style from "./NotFound.module.css"
import { useNavigate } from 'react-router-dom';


const NotFound = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return ( 
    <main className={style.root}>
      <h1 className={style.notFound__title}>404</h1>
      <p className={style.notFound__subtitle}>Страница не найдена</p>
      <button className={style.notFound__goBackButton} onClick={goBack}>Назад</button>
    </main>
   );
}
 
export default NotFound;
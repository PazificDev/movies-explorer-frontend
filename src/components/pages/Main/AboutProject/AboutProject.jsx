import style from "./AboutProject.module.css"

const AboutProject = () => {
  return ( 
    <section id="aboutProject" className={style.aboutProject}>
      <div className={style.aboutProject__header}>
        <h2 className={style.aboutProject__title}>О проекте</h2>
      </div>
      <div className={style.aboutProject__mainContent}>
        <article>
          <h3 className={style.aboutProject__mainContentTitle}>Дипломный проект включал 5 этапов</h3>
          <p className={style.aboutProject__mainContentText}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article>
          <h3 className={style.aboutProject__mainContentTitle}>На выполнение диплома ушло 5 недель</h3>
          <p className={style.aboutProject__mainContentText}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className={style.aboutProject__footer}>
        <div className={style.aboutProject__footerBack}>
          <div className={`${style.aboutProject__footerBackItem} ${style.aboutProject__footerBackItem_dark}`}>
            <p className={`${style.aboutProject__footerBackTime} ${style.aboutProject__footerBackTime_dark}`}>1 неделя</p>
          </div>
          <h4 className={style.aboutProject__footerBackTitle}>
            Back-end
          </h4>
        </div>
        <div className={style.aboutProject__footerFront}>
          <div className={style.aboutProject__footerBackItem}>
            <p className={style.aboutProject__footerBackTime}>4 недели</p>
          </div>
          <h4 className={style.aboutProject__footerBackTitle}>
            Front-end
          </h4>
        </div>
      </div>
    </section>
   );
}
 
export default AboutProject;
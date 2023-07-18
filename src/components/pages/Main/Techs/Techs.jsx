import techsData from "../../../../utils/techsData";
import style from "./Techs.module.css"

const Techs = () => {
  return ( 
    <section className={style.techs}>
      <div className={style.techs__header}>
        <h2 className={style.techs__title}>Технологии</h2>
      </div>
      <div className={style.techs__mainContent}>
        <article>
          <h3 className={style.techs__mainContentTitle}>7 технологий</h3>
          <p className={style.techs__mainContentText}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </article>
      </div>
      <div className={style.techs__footer}>
        {techsData.map((item) => {
          return (
            <div className={style.techs__footerItem} key={item[1]}>
              <h4 className={style.techs__footerItemTitle}>
                {item[0]}
              </h4>
            </div>
          )
        })}
      </div>
    </section>
   );
}
 
export default Techs;
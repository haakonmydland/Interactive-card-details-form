import { CompleteInterface } from "../types";
import style from "../css/Complete.module.css";
import image from "../assets/icon-complete.svg";

const Complete = ({ title, sub, buttonText }: CompleteInterface) => {
  return (
    <div className={style.container}>
      <img src={image} alt="" className={style.image} />
      <div className={style.text}>
        <div className={style.title}>{title}</div>
        <div className={style.sub}>{sub}</div>
      </div>
      <button className={style.button}>{buttonText}</button>
    </div>
  );
};
export default Complete;

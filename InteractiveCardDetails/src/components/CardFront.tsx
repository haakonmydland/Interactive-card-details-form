import { CardFrontInterface } from "../types";
import style from "../css/CardFront.module.css";

const CardFront = ({
  cardName,
  cardNumber,
  cardMonth,
  cardYear,
}: CardFrontInterface) => {
  return (
    <div className={style.Card}>
      <div className={style.Content}>
        <div className={style.Logo}></div>
        <div id="card-number" className={style.Number}>
          {cardNumber}
        </div>
        <div id="card-name" className={style.Name}>
          {cardName}
        </div>
        <div className={style.Date}>
          <span id="card-month">{cardMonth}</span>/
          <span id="card-year">{cardYear}</span>
        </div>
      </div>
    </div>
  );
};
export default CardFront;

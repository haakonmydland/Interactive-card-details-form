import { CardBackInterface } from "../types";
import style from "../css/CardBack.module.css";

const CardBack = ({ cvc }: CardBackInterface) => {
  return (
    <div className={style.Card}>
      <div id="card-cvc" className={style.cvc}>
        {cvc}
      </div>
    </div>
  );
};
export default CardBack;

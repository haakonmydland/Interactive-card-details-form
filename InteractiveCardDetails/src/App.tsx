import { useState } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import style from "./css/App.module.css";

// @ts-ignore
import Form from "./components/CardForm";

function App() {
  return (
    <div className={style.App}>
      <div className={style.cards}>
        <CardFront
          cardName="Jane Appleseed"
          cardMonth="00"
          cardYear="00"
          cardNumber="0000 0000 0000 0000"
        />
        <CardBack cvc="000" />
      </div>
      <Form />
    </div>
  );
}

export default App;

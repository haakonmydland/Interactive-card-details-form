import { FormInterface } from "../types";
import React, { useState } from "react";
import style from "../css/CardForm.module.css";
import Complete from "./Complete";

const Form = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(!submit);
    console.log("submit");
  };

  function handleInput(e) {
    document.querySelector(`#card-${e.target.name}`).innerText = e.target.value;
    if (e.target.name == "number") {
      let str = e.target.value.replaceAll(" ", "");
      e.target.value = str
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }
  }

  function validateInput(e) {
    let element =
      e.target.parentNode.childNodes[e.target.parentNode.childNodes.length - 1];

    element.style.opacity = e.target.checkValidity() ? "0" : "1";
    e.target.style.border = e.target.checkValidity()
      ? "var(--Light-grayish-violet) solid 1px"
      : "var(--Red-input-errors) solid 1px";
    element.innerText =
      e.target.value == "" ? "Can't be blank" : "Wrong format, numbers only";

    switch (e.target.name) {
      case "month":
      case "year":
        if (e.target.value.length < 2 && e.target.value !== "") {
          element.innerText = "Wrong format, too short";
        }

        break;

      case "cvc":
        if (e.target.value.length < 3 && e.target.value !== "") {
          element.innerText = "Wrong format, too short";
        }

        break;

      default:
        break;
    }
  }

  return (
    <div className={style.container}>
      {!submit ? (
        <form className={style.form} action="" onSubmit={handleSubmit}>
          <div className={style.name}>
            <span className={style.title}>cardholder name</span>
            <input
              className={style.input}
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g. Jane Appleseed"
              onInput={handleInput}
              onBlur={validateInput}
            />
            <span className={style.invalid}>invalid</span>
          </div>
          <div className={style.number}>
            <span className={style.title}>card number</span>
            <input
              className={style.input}
              type="text"
              name="number"
              id="number"
              pattern="[0-9\s]*"
              maxLength="19"
              required
              placeholder="e.g. 0000 0000 0000 0000"
              onInput={handleInput}
              onBlur={validateInput}
            />
            <span className={style.invalid}>invalid</span>
          </div>
          <div className={style.date}>
            <span className={style.title}>exp. date (mm/yy)</span>
            <input
              className={style.input}
              type="text"
              name="month"
              id="month"
              placeholder="MM"
              pattern="(0[1-9]|1[0-2])"
              maxLength="2"
              required
              onInput={handleInput}
              onBlur={validateInput}
            />
            <input
              className={style.input}
              type="text"
              name="year"
              id="year"
              placeholder="YY"
              pattern="[0-9]{2,}"
              maxLength="2"
              required
              onInput={handleInput}
              onBlur={validateInput}
            />
            <span className={style.invalid}>invalid</span>
          </div>
          <div className={style.cvc}>
            <span className={style.title}>cvc</span>
            <input
              className={style.input}
              type="text"
              name="cvc"
              id="cvc"
              placeholder="e.g. 000"
              pattern="[0-9]{3,}"
              maxLength="3"
              required
              onInput={handleInput}
              onBlur={validateInput}
            />
            <span className={style.invalid}>invalid</span>
          </div>
          <button className={style.button}>Confirm</button>
        </form>
      ) : (
        <Complete
          title="Thank you!"
          sub="We've added your card details"
          buttonText="Continue"
        />
      )}
    </div>
  );
};
export default Form;

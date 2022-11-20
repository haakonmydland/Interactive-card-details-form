export interface CardFrontInterface {
  cardLogo?: string;
  cardNumber: string;
  cardName: string;
  cardMonth: string;
  cardYear: string;
}

export interface CardBackInterface {
  cvc: string;
}

export interface FormInterface {
  name: string;
  number: string;
  expM: string;
  expY: string;
  cvc: string;
}

export interface CompleteInterface {
  title: string;
  sub: string;
  buttonText: string;
}

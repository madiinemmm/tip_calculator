const bill = document.querySelector("#bill");
const numberOfPerson = document.querySelector("#number-of-person");
const tipPersentages = document.querySelectorAll(".tip-persentage");
const amountPerson = document.querySelector("#amount-person");
const totalAmountPerson = document.querySelector("#total-person");
const custom = document.querySelector("#custom");

let personAmont;
let tipPersentage;
let billAmount;

const counter = () => {
  if (tipPersentage && personAmont && billAmount) {
    const tipAmountPerson = ((billAmount / 100) * tipPersentage) / personAmont;
    const totalPerson = (billAmount / 100) * tipPersentage;
    amountPerson.textContent = tipAmountPerson.toFixed(2);-[]
    totalAmountPerson.textContent = (
      (Number(totalPerson) + Number(billAmount)) /
      personAmont  
    ).toFixed(2);
  }
};

numberOfPerson.addEventListener("input", () => {
  personAmont = numberOfPerson.value;
  counter();
});

custom.addEventListener("input", () => {
  tipPersentage = +custom.value;
  counter();
});

tipPersentages.forEach((tip) => {
  tip.addEventListener("change", () => {
    tipPersentage = tip.value;
    counter();
  });
});

bill.addEventListener("input", () => {
  billAmount = bill.value;
  counter();
});

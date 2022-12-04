document.getElementById("myBtn").onclick = function () {
  const myCheckBox = document.getElementById("myCheckbox");

  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const unionpayBtn = document.getElementById("unionpayBtn");
  const mirBtn = document.getElementById("mirBtn");

  if (myCheckBox.checked) {
    console.log("You agreed with Terms and Conditions!");
  } else {
    console.log("You didn't agree with Terms and Conditions!");
  }

  if (visaBtn.checked) {
    console.log("You are paying with a Visa card.");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a MasterCard.");
  } else if (unionpayBtn.checked) {
    console.log("You are paying with a UnionPay card.");
  } else if (mirBtn.checked) {
    console.log("You are paying with a Mir card.");
  } else {
    console.log("You must select a card type to proceed the payment.");
  }
};

// Select Button
const mobileQuantityPlus = document.getElementById("mobileQuantityPlus");
const mobileQuantityMinus = document.getElementById("mobileQuantityMinus");
const coverQuantityPlus = document.getElementById(
  "coverQuantityPlus"
);
const coverQuantityMinus = document.getElementById(
  "coverQuantityMinus"
);
// mobile count value select
const quantityMobile = document.getElementById("mobileQuantity");
const mobilePrize = document.getElementById("mobilePrize");
const quantityMobileCover = document.getElementById("CoverQuantity");
const CoverPrizeValue = document.getElementById("CoverPrize");
// total count select
const subtotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const total = document.getElementById("total");
const checkOut = document.getElementById("checkOut");


function mobile(currentQuantityMobile) {
  const changePrize = 1219 * currentQuantityMobile;
  mobilePrize.innerHTML = changePrize;
  totalPrize();
}

// mobileQuantityPlus function
mobileQuantityPlus.addEventListener("click", function(){
  const currentQuantityMobile = ++quantityMobile.value;
  mobile(currentQuantityMobile);
});
// mobileQuantityMinus function
mobileQuantityMinus.addEventListener("click", function(){
  const currentQuantityMobile = --quantityMobile.value;
  mobile(currentQuantityMobile);
});

function cover(currentQuantityMobileCover) {
  const changePrize = 59 * currentQuantityMobileCover;
  CoverPrizeValue.innerHTML = changePrize;
  totalPrize();
}
// coverQuantityPlus
coverQuantityPlus.addEventListener("click", function(){
  const currentQuantityMobileCover = ++quantityMobileCover.value;
  cover(currentQuantityMobileCover);
});

// coverQuantityMinus
coverQuantityMinus.addEventListener("click", function(){
  const currentQuantityMobileCover = --quantityMobileCover.value;
  cover(currentQuantityMobileCover);
});

// total prize
function totalPrize() {
  const totalMobilePrize = changeStringToNumber(mobilePrize);
  const totalCoverPrizeValue = changeStringToNumber(CoverPrizeValue);
  const totalPrize = totalMobilePrize + totalCoverPrizeValue;
  subtotal.innerHTML = totalPrize;
  const totalTax = (tax.innerHTML = (totalPrize / 100) * 2);
  total.innerHTML = totalPrize + totalTax;
}
totalPrize();

// order button Alert
checkOut.addEventListener("click", function(){
  alert("Order Created Successfully");
});

// string to number
function changeStringToNumber(id) {
  const value = document.getElementById(id);
  const valueNumber = parseFloat(id.innerText);
  return valueNumber;
}

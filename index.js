const bill = document.getElementById("money");

const tips = document.querySelector(".btns");
const tip = document.querySelectorAll(".but");

const forperson = document.querySelector(".rightt");
const all = document.querySelector(".rightto");
const cus = document.getElementById("custom");

const reset = document.getElementById("reset");

const numof = document.getElementById("num");

cus.onclick = function () {
  for (let j = 0; j < tip.length; j++) {
    tip[j].style.cssText = "";
  }
};
cus.addEventListener("input", () => {
  forperson.innerHTML = (bill.value * (parseInt(cus.value) / 100)).toFixed(2);
});

for (let i = 0; i < tip.length; i++) {
  tip[i].addEventListener("click", () => {
    for (let j = 0; j < tip.length; j++) {
      tip[j].style.cssText = "";
    }
    tip[i].style.cssText = `background-color: var(--Strong-cyan);`;
    forperson.innerHTML = (
      bill.value *
      (parseInt(tip[i].innerHTML.split("%").toString()) / 100)
    ).toFixed(2);
  });
}

numof.addEventListener("input", () => {
  if (numof.value == 0) {
    numof.style.cssText = `border: 3px solid tomato;`;
  }
  if (numof.value == "") {
    numof.style.cssText = ``;
  }
  all.innerHTML = parseInt(forperson.innerHTML) * parseInt(numof.value);
});

reset.onclick = function () {
  location.reload();
};

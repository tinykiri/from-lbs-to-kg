const textArea = document.querySelector("#text");
const resultArea = document.querySelector('#result');
const btnEnter = document.querySelector("#enter");
const btnReset = document.querySelector("#reset");

const lbs = 2.205;

btnEnter.addEventListener("click", function () {
  const userNum = Number(textArea.value);
  if (userNum === 0) {
    return;
  }

  let result = userNum / lbs;;
  let finalResult = parseInt(result);
  resultArea.textContent = finalResult;
});


btnReset.addEventListener("click", function () {
  textArea.value = "";
  resultArea.textContent = "";
});
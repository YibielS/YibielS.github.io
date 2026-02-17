function tickUp() {
  const counter = document.getElementById("counter");
  counter.textContent = Number(counter.textContent) +1;
}

function tickDown() {
  const counter = document.getElementById("counter");
  counter.textContent = Number(counter.textContent) - 1;
}

function runForLoop() {
  const counter = document.getElementById("counter").textContent;
  let result = "";
  for (let i = 0; i <= counter; i++){
    result += i + " ";
  }
  document.getElementById("forLoopResult").textContent = result;
}

function showOddNumbers() {
  const counter = document.getElementById("counter").textContent;
  let result = "";
  for (let i = 1; i <= counter; i++){
    if ((i % 2) != 1){
    result += i + " ";
    }
  }
  document.getElementById("oddNumberResult").textContent = result;
}

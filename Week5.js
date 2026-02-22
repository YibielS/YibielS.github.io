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
    if ((i % 2) == 1){
    result += i + " ";
    }
  }
  document.getElementById("oddNumberResult").textContent = result;
}

function addMultiplesToArray() {
  const arr = [];
  const counter = document.getElementById("counter").textContent;
  for (let i =5; i<= counter; i+=5){
    arr.push(i);
  }
  arr.reverse();
  console.log(arr);
}

function printCarObject() {
  let car ={};
  car.cType = document.getElementById("carType").value;
  car.cMPG = document.getElementById("carMPG").value;
  car.cColor = document.getElementById("carColor").value;
  console.log(car);
}

function loadCar(int) {
  let car;
  if (int == 1) {
    car = carObject1;
  }
else if (int == 2) {
    car = carObject2;
  }
  else if (int == 3) {
    car = carObject3;
  }
  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

function changeColor(int) {
  const p = document.getElementById("styleParagraph");
   if (int == 1) {
    p.style.color = "red";
  }
else if (int == 2) {
    p.style.color = "green";
  }
  else if (int == 3) {
    p.style.color = "blue";
  }

}
  

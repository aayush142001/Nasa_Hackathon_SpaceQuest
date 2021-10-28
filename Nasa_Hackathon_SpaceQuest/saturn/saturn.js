function myfunc1() {
  var element = document.getElementById("red1");
  element.classList.add("red");
}

function myfunc2() {
  var element = document.getElementById("red2");
  element.classList.add("red");
}

function myfunc4() {
  var element = document.getElementById("green");
  element.classList.add("green");
}

function myfunc3() {
  var element = document.getElementById("red3");
  element.classList.add("red");
}

function hint1() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox1");
  element.innerText =
    "Saturn has a lovely set of seven main rings with spaces between them.";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Saturn completes 1 revolution in 29.45 earth years";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) Saturn lies between jupitar and uranus. \n 2) It is a gas giant. \n 3) Its over 95 times more massive as Earth. \n 4) It has 62 moons. \n 5) Its 2nd largest planet in solar system. \n 6) Also known as Roman God Of Wealth And Agriculture.";
}

let count = 30,
  timer = setInterval(function () {
    count--;
    if (count == 0) {
      hint3();
      myfunc4();
      clearInterval(timer);
    }
    document.querySelector("#counter").innerHTML = count;
  }, 1000);

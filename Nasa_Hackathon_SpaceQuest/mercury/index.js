function myfunc1() {
  var element = document.getElementById("red1");
  element.classList.add("red");
}

function myfunc3() {
  var element = document.getElementById("red2");
  element.classList.add("red");
}

function myfunc2() {
  var element = document.getElementById("green");
  element.classList.add("green");
}

function myfunc4() {
  var element = document.getElementById("red3");
  element.classList.add("red");
}

function hint1() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox1");
  element.innerText = "Mercury completes 1 revolution in 88 days";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Mercury is closest to the sun";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) Mercury is the Smallest Planet in our solar system \n 2) It is closest to the sun \n 3) It completes 1 revolutions in 88 days \n 4) It has no atmosphere \n 5) It has 0 moons \n 6) Known as Roman God Of Speed.  ";
}

let count = 30,
  timer = setInterval(function () {
    count--;
    if (count == 0) {
      hint3();
      myfunc2();
      clearInterval(timer);
    }
    document.querySelector("#counter").innerHTML = count;
  }, 1000);

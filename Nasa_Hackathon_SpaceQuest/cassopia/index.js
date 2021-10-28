function myfunc3() {
  var element = document.getElementById("red1");
  element.classList.add("red");
}

function myfunc2() {
  var element = document.getElementById("red2");
  element.classList.add("red");
}

function myfunc1() {
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
  element.innerText = "Cassiopeia is located in the northern sky.";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Cassiopeia has a distinct W-shape.";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) It is the 25th largest constellation in sky. \n 2) Has a distinct W-Shape . \n 3) Located in northern sky and visible all year round. \n 4) Consists of 5 main stars.";
}

let count = 30,
  timer = setInterval(function () {
    count--;
    if (count == 0) {
      hint3();
      myfunc1();
      clearInterval(timer);
    }
    document.querySelector("#counter").innerHTML = count;
  }, 1000);

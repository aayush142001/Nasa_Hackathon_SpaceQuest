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
  element.innerText = "It contains 7 main starts.";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "It is also called as the little bear.";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) It is notable for marking the location of the North Celestial pole. \n 2) Lies in the northern sky. \n 3) Contains 7 main stars.";
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

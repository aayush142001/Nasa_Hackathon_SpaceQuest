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
  element.innerText =
    "It is believed to be the source of the short-period comets.";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Pluto is found here.";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) Eris is the largest known object in this belt. \n 2) Huge region of space beyond neptune. \n 3) Lots of Kuiper Belt objects have moons.";
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

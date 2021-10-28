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
    "It makes up almost a 3rd of the asteroid belt's total mass.";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText =
    "Its 1 revolution around the sun completes in 4.6 Earth Years";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) It is named after Roman Goddess of Harvests. \n 2) Heavily cratered with large amounts of ice underground. \n 3) Its still far smaller than Earth''s moon. \n 4) Also known as Roman Goddess Of Harvests ";
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

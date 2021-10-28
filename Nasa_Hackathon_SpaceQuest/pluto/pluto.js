function myfunc1() {
  var element = document.getElementById("red1");
  element.classList.add("red");
}

function myfunc2() {
  var element = document.getElementById("red2");
  element.classList.add("red");
}

function myfunc3() {
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
  element.innerText = "Pluto is the largest member of the kuiper belt";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Pluto have 5 moons";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) Pluto is a complex world of ice mountains and frozen plains. \n 2) Best known dwarf planet. \n 3) Length of a year is 248.89 Earth years. \n 4) Also known as Roman Goddess Of Underworld.";
}

let count = 30,
  timer = setInterval(function () {
    count--;
    if (count == 0) {
      hint3();
      myfunc3();
      clearInterval(timer);
    }
    document.querySelector("#counter").innerHTML = count;
  }, 1000);

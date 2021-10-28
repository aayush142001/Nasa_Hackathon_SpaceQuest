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
    "Uranus rotates at a nearly 90 degree angle from the plane of its orbit";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Uranus is the only planet that spins on its sides";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) Uranus has the coldest planetary atmosphere in the solar system. \n 2) Only planet that spins on its sides. \n 3) It is an ice giant. \n 4) It has 27 moons. \n 5) Completes one rev in 84 Earth years. \n 6) Also known as Greek God Of Sky.";
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

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
  element.innerText =
    "Jupitar is the third largest brightest natural object in the Earth Night sky ";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Jupitar completes 1 revolution in 11.86 earth year";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    " 1) Comet Shoemaker-Levy 9 was the name of the comet that slammed into Jupiter in 1994. \n 2) It has 79 moons. \n 3) Largest planet in solar system. \n 4) It is a gas giant and doesn't have a solid surface. \n 5) It completes one rev in 11.86 Earth years. \n 6) Also known as King Of The Roman Gods.";
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

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
  element.innerText = "Venus is the hottest planet in our solar system";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = "Venus has thick atmosphere";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) Venus is the 2nd closest planet to the sun \n 2) It is the hottest planet in our solar system \n 3) It is also called earth's twin , and known as Roman Goddess Of Love \n 4) It spins slowly in the opposite direction from most of the planets \n 5) It has 0 moons \n 6) It completes 1 rev in 225 days.";
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

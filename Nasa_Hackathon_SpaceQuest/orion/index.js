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
  element.innerText = "It is located on the celestial equator.";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText =
    "It is visible in the southwest winter sky in the Northern hemisphere.";
}
function hint3() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox3");
  element.innerText =
    "1) It contains 10 formally named stars. \n 2)Orion hosts numerous famous asterisms such as sword,head,club \n 3)The constellation is also knowns as the Hunter";
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

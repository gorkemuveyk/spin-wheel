let wheel = document.querySelector(".wheel");
let spin = document.querySelector(".spin");
let val = Math.ceil(Math.random() * 7200);

spin.onclick = function () {
  wheel.style.transform = "rotate(" + val + "deg)";
  val += Math.ceil(Math.random() * 7200);
};

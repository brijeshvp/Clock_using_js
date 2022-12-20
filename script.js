let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
  let d = new Date();

  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}, 100);

let blink = document.getElementsByTagName("span");

setInterval((x) => {
  blink[0].classList.toggle("blink");
  blink[1].classList.toggle("blink");
}, 500);
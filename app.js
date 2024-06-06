let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let meridiem = document.querySelector(".meridiem");

setInterval(() => {
  let time = new Date();

  //HOURS
  let hours = time.getHours();
  let AmOrPm = hours >= 12 ? " PM" : " AM";
  hours = hours % 12 || 12;
  if (String(hours).length === 1) {
    hour.innerHTML = `0${hours}`;
  } else {
    hour.innerHTML = hours;
  }

  // MINUTES
  if (String(time.getMinutes()).length === 1) {
    min.innerHTML = `0${time.getMinutes()}`;
  } else {
    min.innerHTML = time.getMinutes();
  }

  //SECONDS
  if (String(time.getSeconds()).length === 1) {
    sec.innerHTML = `0${time.getSeconds()}`;
  } else {
    sec.innerHTML = time.getSeconds();
  }

  meridiem.textContent = " " + AmOrPm;
}, 1000);

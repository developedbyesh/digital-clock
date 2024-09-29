function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  //   console.log(now);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  //   console.log(hours + '' + minutes + '' + seconds);
  let ampm = hours >= 12 ? 'PM' : 'AM';
  //   console.log(ampm);
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  clockElement.innerText = timeString;
}

setInterval(updateClock, 1000);

updateClock();

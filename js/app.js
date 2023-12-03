let timer;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function start() {
      timer = setInterval(updateClock, 1000);
    }

    function pause() {
      clearInterval(timer);
    }

    function reset() {
      clearInterval(timer);
      hours = 0;
      minutes = 0;
      seconds = 0;
      document.getElementById('clock').innerHTML = '00:00:00';
    }

    function updateClock() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      const formattedTime = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
      document.getElementById('clock').innerHTML = formattedTime;
    }
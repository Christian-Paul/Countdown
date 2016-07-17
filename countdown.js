function zeroPad(number) {
  number = String(number);
  if(number.length > 1) {
    return number;
  } else {
    return '0'.concat(number);
  }
};

function timeUntil(deadline) {
  var ms = Date.parse(deadline) - Date.now();
  var seconds = Math.floor((ms/1000) % 60);
  var minutes = Math.floor((ms/(1000*60)) % 60);
  var hours = Math.floor((ms/(1000*60*60)) % 24);
  var days = Math.floor((ms/(1000*60*60*24)));
  
  return {
    ms: ms,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days
  };
};

$(document).ready(function() {  
  var updateTimer = window.setInterval(updater, 1000);
  
  function updater() {
    var stonyBrookMoveIn = 'August 26, 2016 16:00:00';
    var timeLeft = timeUntil(stonyBrookMoveIn);
    $('.days-data').text(timeLeft.days);
    $('.hours-data').text(timeLeft.hours);
    $('.minutes-data').text(timeLeft.minutes);
    $('.seconds-data').text(timeLeft.seconds);
  };
});
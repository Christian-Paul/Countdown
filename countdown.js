function zeroPad(number) {
  number = String(number);
  if(number.length > 1) {
    return number;
  } else {
    return '0'.concat(number);
  }
}

function timeUntil(userDate) {
  var ms = userDate - Date.now();
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

function startTimer(userDate) {
  var updateTimer = window.setInterval(updater, 1000);
  
  function updater() {
    var stonyBrookMoveIn = 'August 26, 2016 16:00:00';
    var timeLeft = timeUntil(userDate);
    $('.days-data').text(zeroPad(timeLeft.days));
    $('.hours-data').text(zeroPad(timeLeft.hours));
    $('.minutes-data').text(zeroPad(timeLeft.minutes));
    $('.seconds-data').text(zeroPad(timeLeft.seconds));
  };
}

$(document).ready(function() {
  $('.post-click').hide();
  $('.error-message').hide();
  
  $('.submit').click(function() {
    var userMonth = $('.month').val();
    var userDay = $('.day').val();
    var userYear = $('.year').val();
    var userDate = userMonth + '/' + userDay + '/' + userYear;
    var userDate = Date.parse(userDate)
    
    if (userDate && userDate > Date.now()) {
      startTimer(userDate)
      $('.pre-click').hide();
      $('.post-click').show();
    } else {
      $('.error-message').show();
    }
  })
});
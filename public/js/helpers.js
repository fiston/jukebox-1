'use strict';

window.helpers = {
  duration: function (input) {
    var millisec = parseInt(input, 10);
    var s = Math.floor(millisec / 1000);
    var h = Math.floor(s / 3600);
    var m = Math.floor(s / 60) % 60;
    s = s % 60;

    // Formatting
    s = s < 10 ? '0' + s : s;
    m = m < 10 ? '0' + m : m;

    var result = '';
    if (h) result += h + ':';
    result += m + ':' + s;

    return result;
  },
  // 'dd/MM @ HH:mm'
  at: function (dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    if (day.length < 10) day = '0' + day;
    var month = date.getMonth();
    if (month.length < 10) month = '0' + month;
    var hours = date.getHours();
    if (hours.length < 10) hours = '0' + hours;
    var minutes = date.getMinutes();
    if (minutes.length < 10) minutes = '0' + minutes;

    return day + '/' + month + ' @ ' + hours + ':' + minutes;
  },
  openExt: function (url) {
    window.open(url, '_blank');
  }
};

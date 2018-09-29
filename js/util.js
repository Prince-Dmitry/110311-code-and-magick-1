'use strict';

(function () {
  // Функция отрисовки облака
  var renderCloud = function (ctx, x, y, color, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var getMaxElement = function (array) {
    var maxElement = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }
    return maxElement;
  };

  var getRandom = function (startIndex, endIndex) {
    return Math.floor(startIndex + Math.random() * (endIndex - startIndex + 1));
  };

  var getBarChartHeight = function (maxTime, currentTime, maxHeight) {
    return Math.round((currentTime * maxHeight) / maxTime);
  };

  window.util = {
    renderCloud: renderCloud,
    getMaxElement: getMaxElement,
    getRandomNumber: getRandom,
    getBarChartHeight: getBarChartHeight
  };
})();



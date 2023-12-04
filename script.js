
var gShowDiagonalLines = true;
var gClockRadiusRate = 0.16;
var gClockYPositionRate = 0.19;

onload = _ => {
  initialize();
  windowResized();
  drawCanvas();
};

function drawCanvas() {
  var canvas = document.getElementById('canvas');
  var width = canvas.clientWidth;
  var height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);

  var now = new Date();
  var hour = now.getHours() + now.getMinutes() / 60;
  var minute = now.getMinutes() + now.getSeconds() / 60;
  var second = now.getSeconds();

  var left = 0;
  var top = 0;
  if (width >= height) {
    left = (width - height) / 2;
  } else {
    top = (height - width) / 2;
  }
 

  if (gShowDiagonalLines) {
    ctx.strokeStyle = "#303030";
    if (width >= height) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(left, 0);
      ctx.lineTo(left + height, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(left, height);
      ctx.lineTo(left + height, 0);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(0, top);
      ctx.lineTo(width, top + width);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(width, top);
      ctx.lineTo(0, top + width);
      ctx.stroke();
    }
  }

  // North

  var clockCenterX = width / 2;
  var clockCenterY = 0;
  var clockRadius = 0;
  var clockLineWidth = Math.min(width, height) / 256;

  ctx.strokeStyle = "#FFFFFF";
  ctx.fillStyle = "#FFFFFF";
  if (width >= height) {
    clockCenterY = height * gClockYPositionRate;
    clockRadius = height * gClockRadiusRate;
  } else {
    clockCenterY = top + (width * gClockYPositionRate);
    clockRadius = width * gClockRadiusRate;
  }
  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 2;
  ctx.arc(clockCenterX, clockCenterY, clockRadius, 0, 2 * Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 2;
  ctx.moveTo(clockCenterX, clockCenterY);
  ctx.lineTo(clockCenterX + Math.sin(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   clockCenterY - Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.moveTo(clockCenterX, clockCenterY);
  ctx.lineTo(clockCenterX + Math.sin(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY - Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth;
  ctx.moveTo(clockCenterX, clockCenterY);
  ctx.lineTo(clockCenterX + Math.sin(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY - Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 2;
  ctx.arc(clockCenterX, clockCenterY, clockLineWidth * 2, 0, 2 * Math.PI, false);
  ctx.fill();

  // South

  var clockCenterY2 = height - clockCenterY;

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 2;
  ctx.arc(clockCenterX, clockCenterY2, clockRadius, 0, 2 * Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 2;
  ctx.moveTo(clockCenterX, clockCenterY2);
  ctx.lineTo(clockCenterX + Math.sin(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   clockCenterY2 + Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.moveTo(clockCenterX, clockCenterY2);
  ctx.lineTo(clockCenterX + Math.sin(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY2 + Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth;
  ctx.moveTo(clockCenterX, clockCenterY2);
  ctx.lineTo(clockCenterX + Math.sin(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY2 + Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 2;
  ctx.arc(clockCenterX, clockCenterY2, clockLineWidth * 2, 0, 2 * Math.PI, false);
  ctx.fill();

  // West

  var clockCenterX3 = 0;
  if (width >= height) {
    clockCenterX3 = left + (height * gClockYPositionRate);
  } else {
    clockCenterX3 = width * gClockYPositionRate;
  }
  var clockCenterX4 = width - clockCenterX3;

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.75;
  ctx.moveTo(clockCenterX3 - clockRadius, height / 2);
  ctx.lineTo(clockCenterX3 + clockRadius, height / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1;
  ctx.moveTo(clockCenterX3, height / 2 + clockLineWidth * 2);
  ctx.lineTo(clockCenterX3 - Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   height / 2 + clockLineWidth * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1;
  ctx.moveTo(clockCenterX3, height / 2 + clockLineWidth * 2.5);
  ctx.lineTo(clockCenterX3 - Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 2.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 0.5;
  ctx.moveTo(clockCenterX3, height / 2 + clockLineWidth * 3.5);
  ctx.lineTo(clockCenterX3 - Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 3.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 4;
  ctx.moveTo(clockCenterX3, height / 2);
  ctx.lineTo(clockCenterX3, height / 2 + clockLineWidth * 4.5);
  ctx.stroke();

  // East

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.75;
  ctx.moveTo(clockCenterX4 - clockRadius, height / 2);
  ctx.lineTo(clockCenterX4 + clockRadius, height / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1;
  ctx.moveTo(clockCenterX4, height / 2 + clockLineWidth * 2);
  ctx.lineTo(clockCenterX4 + Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   height / 2 + clockLineWidth * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1;
  ctx.moveTo(clockCenterX4, height / 2 + clockLineWidth * 2.5);
  ctx.lineTo(clockCenterX4 + Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 2.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 0.5;
  ctx.moveTo(clockCenterX4, height / 2 + clockLineWidth * 3.5);
  ctx.lineTo(clockCenterX4 + Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 3.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 4;
  ctx.moveTo(clockCenterX4, height / 2);
  ctx.lineTo(clockCenterX4, height / 2 + clockLineWidth * 4.5);
  ctx.stroke();
}

function initialize() {
  window.addEventListener('resize', windowResized);
  document.getElementById('settings').addEventListener('click', preventBackgroundClick);
  document.getElementById('settings').addEventListener('mousedown', preventBackgroundClick);
  document.getElementById('settings').addEventListener('mousemove', preventBackgroundClick);
  document.getElementById('main_container').addEventListener('mousedown', mainContainerPressed);
  document.getElementById('show_diagonal_lines').addEventListener('change', showDiagonalLinesChanged);
  document.getElementById('enter_into_fullscreen').addEventListener('click', enterIntoFullscreenClicked);
  if (!document.fullscreenEnabled) {
    document.getElementById('enter_into_fullscreen').className = 'hidden';
  }
  document.addEventListener('keydown', mainContainerKeyPressed);
  heartbeat();
}


function windowResized() {
  drawCanvas();
}

function mainContainerPressed() {
  switchSettingVisibility();
  event.preventDefault();

  return false;
}

function switchSettingVisibility() {
  var currentClass = document.getElementById('settings').className;
  if (currentClass.indexOf("hidden") >= 0) {
    currentClass = document.getElementById('settings').className = "settings";
  } else {
    currentClass = document.getElementById('settings').className = "settings hidden";
  }
  drawCanvas();
}

function showDiagonalLinesChanged(event) {
  gShowDiagonalLines = document.getElementById('show_diagonal_lines').checked;
  drawCanvas();
  event.preventDefault();

  return false;
}

function changeShowDiagonalLines(checked) {
  document.getElementById('show_diagonal_lines').checked = checked;
  gShowDiagonalLines = checked;
  drawCanvas();
}


function mainContainerKeyPressed() {
  var keyCode = event.keyCode;
  if (keyCode == 38 || keyCode == 107 || keyCode == 67 || keyCode == 187 || keyCode == 49 || keyCode == 97 || keyCode == 228) { // 上、プラス、C、1、ゲームパッド90
    gClockYPositionRate -= 0.01;
    if (gClockYPositionRate < 0) {
      gClockYPositionRate = 0;
    }
    drawCanvas();
    return;
  }
  if (keyCode == 40 || keyCode == 109 || keyCode == 68 || keyCode == 189 || keyCode == 50 || keyCode == 98 || keyCode == 227) { // 下、マイナス、D、2、ゲームパッド89
    gClockYPositionRate += 0.01;
    if (gClockYPositionRate > 0.5) {
      gClockYPositionRate = 0.5;
    }
    drawCanvas();
    return;
  }
  if (keyCode == 51 || keyCode == 99 || keyCode == 69 || keyCode == 37) { // 3、E、左
    changeShowDiagonalLines(false);
    drawCanvas();
    return;
  }
  if (keyCode == 52 || keyCode == 100 || keyCode == 70 || keyCode == 39) { // 4、F、右
    changeShowDiagonalLines(true);
    drawCanvas();
    return;
  }
  if (keyCode == 13) {
    switchSettingVisibility();
    drawCanvas();
    return;
  }
}

function heartbeat() {
  setTimeout(heartbeat, 1000);
  drawCanvas();
}

function preventBackgroundClick(event) {
  event.stopPropagation();
  return false;
}

function enterIntoFullscreenClicked(event) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }
}

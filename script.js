
var gShowDiagonalLines = true;

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
    clockCenterY = height * 1.2 / 6;
    clockRadius = height / 6;
  } else {
    clockCenterY = top + (width * 1.2 / 6);
    clockRadius = width / 6;
  }
  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.arc(clockCenterX, clockCenterY, clockRadius, 0, 2 * Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.moveTo(clockCenterX, clockCenterY);
  ctx.lineTo(clockCenterX + Math.sin(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   clockCenterY - Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth;
  ctx.moveTo(clockCenterX, clockCenterY);
  ctx.lineTo(clockCenterX + Math.sin(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY - Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 0.5;
  ctx.moveTo(clockCenterX, clockCenterY);
  ctx.lineTo(clockCenterX + Math.sin(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY - Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.arc(clockCenterX, clockCenterY, clockLineWidth * 2, 0, 2 * Math.PI, false);
  ctx.fill();

  // South

  var clockCenterY2 = height - clockCenterY;

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.arc(clockCenterX, clockCenterY2, clockRadius, 0, 2 * Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.moveTo(clockCenterX, clockCenterY2);
  ctx.lineTo(clockCenterX + Math.sin(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   clockCenterY2 + Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth;
  ctx.moveTo(clockCenterX, clockCenterY2);
  ctx.lineTo(clockCenterX + Math.sin(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY2 + Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 0.5;
  ctx.moveTo(clockCenterX, clockCenterY2);
  ctx.lineTo(clockCenterX + Math.sin(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   clockCenterY2 + Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.arc(clockCenterX, clockCenterY2, clockLineWidth * 2, 0, 2 * Math.PI, false);
  ctx.fill();

  // West

  var clockCenterX3 = 0;
  if (width >= height) {
    clockCenterX3 = left + (height * 1.2 / 6);
  } else {
    clockCenterX3 = width * 1.2 / 6;
  }
  var clockCenterX4 = width - clockCenterX3;

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.moveTo(clockCenterX3 - clockRadius, height / 2);
  ctx.lineTo(clockCenterX3 + clockRadius, height / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1;
  ctx.moveTo(clockCenterX3, height / 2 + clockLineWidth * 1.5);
  ctx.lineTo(clockCenterX3 - Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   height / 2 + clockLineWidth * 1.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth;
  ctx.moveTo(clockCenterX3, height / 2 + clockLineWidth * 2.5);
  ctx.lineTo(clockCenterX3 - Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 2.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 0.5;
  ctx.moveTo(clockCenterX3, height / 2 + clockLineWidth * 3);
  ctx.lineTo(clockCenterX3 - Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 3);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 4;
  ctx.moveTo(clockCenterX3, height / 2);
  ctx.lineTo(clockCenterX3, height / 2 + clockLineWidth * 4);
  ctx.stroke();

  // East

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1.5;
  ctx.moveTo(clockCenterX4 - clockRadius, height / 2);
  ctx.lineTo(clockCenterX4 + clockRadius, height / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 1;
  ctx.moveTo(clockCenterX4, height / 2 + clockLineWidth * 1.5);
  ctx.lineTo(clockCenterX4 + Math.cos(hour / 12 * Math.PI * 2) * clockRadius * 0.6,
   height / 2 + clockLineWidth * 1.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth;
  ctx.moveTo(clockCenterX4, height / 2 + clockLineWidth * 2.5);
  ctx.lineTo(clockCenterX4 + Math.cos(minute / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 2.5);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 0.5;
  ctx.moveTo(clockCenterX4, height / 2 + clockLineWidth * 3);
  ctx.lineTo(clockCenterX4 + Math.cos(second / 60 * Math.PI * 2) * clockRadius * 0.9,
   height / 2 + clockLineWidth * 3);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = clockLineWidth * 4;
  ctx.moveTo(clockCenterX4, height / 2);
  ctx.lineTo(clockCenterX4, height / 2 + clockLineWidth * 4);
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


function mainContainerKeyPressed() {
  var keyCode = event.keyCode;
  if (keyCode == 13) {
    switchSettingVisibility();
  }
  drawCanvas();
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

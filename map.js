
let canvas = document.getElementById('myCanvas');
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;
let gl = canvas.getContext('webgl');
gl.clear(gl.COLOR_BUFFER_BIT);
gl.clearColor(0.0, 0.0, 0.0, 1.0);
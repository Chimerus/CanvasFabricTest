$(document).ready(function(){
	var canvas = new fabric.Canvas('c');

var imgElement = document.getElementById('my-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 90,
  opacity: 0.85
});
canvas.add(imgInstance);

var text = new fabric.Text('hello world', { left: 100, top: 100 });
canvas.add(text);
});
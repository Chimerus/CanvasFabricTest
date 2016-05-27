$(document).ready(function(){
var canvas = new fabric.Canvas('c', { width: 500, height: 500 });

// var imgElement = document.getElementById('my-image');
// var imgInstance = new fabric.Image(imgElement, {
//   left: 100,
//   top: 100,
//   angle: 30,
//   opacity: 0.85
// });
// canvas.add(imgInstance);

// var text = new fabric.Text('hello world', { left: 100, top: 100 });
// canvas.add(text);

fabric.Image.fromURL('https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png', function(oImg) {
  oImg.scale(0.2);
  canvas.add(oImg);
  console.log("i ran");
});


// Click handlers
$(window).keydown(function(e){
	if(e.characterCode == 13){
		var text = new fabric.Text('hello world', { left: 100, top: 100 });
canvas.add(text);
	}

})

});
$(document).ready(function(){
	var canvas = new fabric.Canvas('c');
	canvas.setDimensions({ width: 600, height: 600 });

// Controls
	// text
	$("#sendtxt").click(function(){
		var msg = document.getElementById("text").value;
		var text = new fabric.Text(msg, { left: 100, top: 100 });
	    // Clear the box
	    document.getElementById("text").value = "";
	    canvas.add(text);
	  })

	// pic link
	$("#sendimg").click(function(){
	    var pic = document.getElementById("img").value;
	    fabric.Image.fromURL(pic, function(oImg) {
		    // Set the image so its top left corner aligns with the matching canvas edge 
			oImg.left=(oImg.width)/2;
			oImg.top=(oImg.height)/2;
			// Clear the box
			document.getElementById("img").value = "";
			canvas.add(oImg);
		});
	})
	
});
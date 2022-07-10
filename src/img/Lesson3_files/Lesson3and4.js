//setInterval(draw(), 1000);


function display() {
  //var mb = document.getElementById("myBtn");
  //mb.addEventListener("click", draw);
  setInterval(draw, 500);
};


function draw() {
  var slider = document.getElementById("myRange");
  var pix1 = slider.value;
  console.log("pix1");
  console.log(pix1);

  var slider1 = document.getElementById("myRange1");
  var pix2 = slider1.value;
  console.log("pix2");
  console.log(pix2);

  var slider2 = document.getElementById("myRange2");
  var pix3 = slider2.value;
  console.log("pix3");
  console.log(pix3);

  var slider3 = document.getElementById("myRange3");
  var pix4 = slider3.value;
  console.log("pix4");
  console.log(pix4);

  var slider4 = document.getElementById("myRange4");
  var pix5 = slider4.value;
  console.log("pix5");
  console.log(pix5);

  var slider5 = document.getElementById("myRange5");
  var pix6 = slider5.value;
  console.log("pix6");
  console.log(pix6);


  let canvasses = document.getElementsByTagName("canvas");
//you can also do this with classes.

  while (canvasses.length > 0) {
    for (let i =0; i < canvasses.length; i++) {
        canvasses[i].remove();
    }
}



  //console.log("event listener");
  //var pix1 = document.getElementById("p1").value;
  //console.log(pix1);
  //var pix2 = document.getElementById("p2").value;
  //console.log(pix2);
  //var pix3 = document.getElementById("p3").value;
  //console.log(pix3);
  //var pix4 = document.getElementById("p4").value;
  //console.log(pix4);
  //var pix5 = document.getElementById("p5").value;
  //console.log(pix5);
  //var pix6 = document.getElementById("p6").value;
  //console.log(pix6);
  // Loop through all images
  for (var i = 0; i < document.images.length; i++) {


    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute('id') != 'frame') {




      // Create canvas element
      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 400);
      canvas.setAttribute('height', 500);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

      // Draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);

      //get the canvas data
      data = ctx.getImageData(0,0,canvas.width,canvas.height);
//invert each pixel
      for(n=0; n<data.width*data.height; n++) {
        //console.log(p1);

        var index = n*4;
        if (data.data[index] < pix1 || data.data[index] > pix2 ){
          data.data[index]   = 100;
        }
        else {
          data.data[index]   = data.data[index];
        }
        if (data.data[index+1] < pix3 || data.data[index+1] > pix4){
          data.data[index+1]   = 100;
        }
        else {
          data.data[index+1]   = data.data[index+1];
        }
        if (data.data[index+2] < pix5 || data.data[index+2] > pix6 ){
          data.data[index+2]   = 100;
        }
        else {
          data.data[index+2]   = data.data[index+2];
        }



        //data.data[index]   = data.data[index];
        //data.data[index+1] = data.data[index+1];
        //data.data[index+2] = data.data[index+2];
  //don't touch the alpha
    }
      //console.log(pix1);
//set the data back

        ctx.putImageData(data,0,0);

      // Add frame
      //ctx.drawImage(document.getElementById('frame'), 0, 0);
    }
  }


}

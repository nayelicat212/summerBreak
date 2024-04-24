let img;
let newImg;
let toggle = false; 

function preload() {
  img = loadImage('https://render.fineartamerica.com/images/rendered/search/print/8/8/break/images/artworkimages/medium/1/23-beach-mothaibaphoto-prints.jpg');
  newImg = loadImage('https://s.w-x.co/util/image/w/522beach.jpg?v=at&w=400&h=400');
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('canvas-container'); 'canvas-container'
}

function draw() {
  background(img);
}

function mouseClicked() {
  if (mouseX >= 0 && mouseX <= 500 && mouseY >= 0 && mouseY <= 500) {
    toggle = !toggle; 
    
    if (toggle) {
      img = newImg;
      document.getElementById("interactive-title").textContent = "High Tides"; 
    } else {
      img = loadImage('https://render.fineartamerica.com/images/rendered/search/print/8/8/break/images/artworkimages/medium/1/23-beach-mothaibaphoto-prints.jpg');
      document.getElementById("interactive-title").textContent = "Good Vibes"; 
    }
    redraw(); 
  }
}

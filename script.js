let clearButton
let sw=0.1;

function setup () {
  let c = createCanvas(window.innerWidth, window.innerHeight-25);
  background(39, 43, 48)
  angleMode(DEGREES);
  clearButton = createButton('clear')
  clearButton.mousePressed(clearSnowFlake)
}

function clearSnowFlake() {
  background(39, 43, 48)
}

function draw () {

  translate(width / 2, height / 2)
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  if (mouseIsPressed) {
    stroke('rgb(255,255,255)');
    for (let i = 0; i < 6; i++) {
      rotate(60)
      let d = (dist(mx, my, pmx, pmy))
      sw=lerp(sw,map(d,0,8,7,0.1, true),0.01)
      strokeWeight(sw)
      line(mx, my, pmx, pmy)
      push();
      scale(1, -1)
      line(mx, my, pmx, pmy)
      pop();
    }

  }
}
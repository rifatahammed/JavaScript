/*In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:*/
//https://www.w3schools.com/js/js_this.asp

function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  
    this.update = function() {
      this.z = this.z - speed;
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
    }
  
    this.show = function() {
      fill(255);
      noStroke();
  
      var sx = map(this.x / this.z, 0, 1, 0, width);
      var sy = map(this.y / this.z, 0, 1, 0, height);
  
      var r = map(this.z, 0, width, 16, 0);
      ellipse(sx, sy, r, r);//https://p5js.org/reference/#/p5/ellipse
  
      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);
  
      this.pz = this.z;
  
      stroke(255);//https://p5js.org/reference/#/p5/stroke
      line(px, py, sx, sy);//https://p5js.org/reference/#/p5/line
  
    }
  }
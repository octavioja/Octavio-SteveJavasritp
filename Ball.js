// import {weather} from './script.js';
let canvas;
let icon = [];
let weatherIcon;



function preload(){
    weatherIcon = loadImage (`http://openweathermap.org/img/wn/03n@2x.png`);
}

function setup(){
    canvas = createCanvas(window.windowWidth, window.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    // icon = new Icon(200,200,40);
    for (let i = 0; i < 10; i++){
        let x = 20 + 100 * i;
        icon[i] = new Icon(x,200,20);
    } 
    
    
    //no background so it defaults to transparent.

}
// function draw(){
//     if (mouseIsPressed){
//         line(pmouseX, pmouseY, mouseX, mouseY);
//     }

//}

function draw(){
    background(0);
    for (let i = 0; i < icon.length; i++) {
        icon[i].move();
        icon[i].show();    
    }

}

class Icon { // what it is to be a ball "template" "object?"
    constructor(x,y,r){ // how this object is initialized.
        this.x = x; //initialize some variables that are attached to this object
        this.y = y;
        this.r = r;
    }
move() { //this is what it means for a ball to me "property"  //functions are the functionality of the objects
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-5,5);
} 
show(){ //"property" 
    // stroke(255);
    // strokeWeight(4);
    // noFill();
    // ellipse(this.x, this.y, this.r);
    image(weatherIcon,this.x,this.y);
}
} 


class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.x = initX;
        this.y = initY;
    }
   getColor(){
        console.log(`Color = ${this.color}`);
   }
   setColor(val){
        this.color = val;
   }
   getCords(){
        console.table(this, [x, y]);
   }
   moveTo(newX, newY){
        this.x = newX;
        this.y = newY;
   }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super(color, initX, initY);
        this.width = initWidth;
        this.height = initHeight;
    }
    setWidth(newWidth){
        this.width = newWidth;
    }
    setHeight(newHeight){
        this.height = newHeight;
    }
    getDims(){
        console.table(this, [width, height]);
    }
    draw(){
        console.table(this);
        console.log(`Drawing a Rectangle at:
        (x: ${this.x}, y: ${this.y})
        With dimentions:
        width: ${this.width}
        height: ${this.height}
        Filled with color: ${this.color}`);
    }

}
class Circle extends Shape {
    constructor (color, initX, initY, initRadius){
        super(color, initX, initY);
        this.radius = initRadius;
    }
    getRadius(){
        console.log(`Radius = ${this.radius}`);
    }
    setRadius(val){
        this.radius = val;
    } 
    draw(){
        console.table(this);
        console.log(`Drawing a Corcle at:
        (x: ${this.x}, y: ${this.y})
        With dimentions:
        radius: ${this.radius}
        Filled with color: ${this.color}`);
        
    }
}
let shape = new Shape('#f00', 40, 50);
shape.getColor();
let rectangle = new Rectangle('#009688', 10, 10, 100, 100);
let circle = new Circle('#FF5722', 50, 50, 250);
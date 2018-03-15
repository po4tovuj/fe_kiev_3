class Shape {
    constructor({color, initX, initY}) {
        this.color = color;
        this.x = initX;
        this.y = initY;
    }
   getColor(){
        console.log(`Color: ${this.color}`);
   }
   setColor(val){
        this.color = val;
   }
   getCords(){
        console.log(`x: ${this.x}; y: ${this.y}`);
   }
   moveTo(newX, newY){
        this.x = newX;
        this.y = newY;
   }
}

class Rectangle extends Shape {
    constructor({initWidth, initHeight, ...rest}) {
        super(rest);
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
        console.log(`Width: ${this.width}; Height: ${this.height}`);
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
    constructor ({initRadius, ...rest}){
        super(rest);
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
let shape = new Shape({
    color:'#f00', 
    initX: 40,
    initY: 50
});
shape.getCords();
let rectangle = new Rectangle({
    color: '#009688', 
    initX: 10,
    initY: 10, 
    initWidth: 100, 
    initHeight: 100
});
let circle = new Circle({
    color: '#FF5722',
    initX: 50,
    initY: 50,
    initRadius: 250
});
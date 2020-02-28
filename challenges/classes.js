// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    "length": 4,
    "width": 5,
    "height": 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


//1. Describe the biggest difference between .forEach & .map.
// forEach does not return a new array, but .map does 


//2. What is the difference between a function and a method?
// a method is a function in object-oriented programming a function is a group of reusable code which can be called anywhere in your program


//3. What is closure?
// closures give us the ability to put functions together and its code that we can use later


//4. Describe the four rules of the 'this' keyword.
// is the function called by 'new'.
// is the function call,apply, or bind,
// is the function a method
// is it in the global scope


//5. Why do we need super() in an extended class?
// it gives the extendor its parnents properties
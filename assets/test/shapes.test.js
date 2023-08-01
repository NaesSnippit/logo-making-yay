//all the test for SVG
const {Shape, Triangle, Circle, Square } = require("./shapes.js"); 


//Opted out of whitespace for SVG render strings as it caused testing issues
//Tests for rendor method for each shape
describe('Triangle class', () => {
  test('renders should return the correct SVG string for a triangle', () => {
    const triangle = new Triangle('green', 'grey', 'TRI', 'triangle');
    const testSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,200 250,200 150,50" fill="green" /><text x="150" y="150" text-anchor="middle" fill="grey" font-size="40">TRI</text></svg>`;
    expect(triangle.render()).toBe(testSVG);
  });
});

describe('Circle class', () => {
  test('renders should return the correct SVG string for a circle', () => {
    const circle = new Circle('blue', 'yellow', 'CIR', 'circle');
    const testSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" text-anchor="middle" fill="yellow" font-size="60">CIR</text></svg>`;
    expect(circle.render()).toBe(testSVG);
  });
});

describe('Square class', () => {
  test('renders should return the correct SVG string for a square', () => {
    const square = new Square('red', 'white', 'SQR', 'square');
    const testSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="25" width="200" height="200" fill="red" /><text x="150" y="150" text-anchor="middle" fill="white" font-size="80">SQR</text></svg>`;
    expect(square.render()).toBe(testSVG);
  });
});

describe('Heart class', () => {
  test('renders should return the correct SVG string for a heart', () => {
    const heart = new Heart('red', 'white', 'HRT', 'square');
    const testSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><heart x="50" y="25" width="300" height="200" fill="red" /><text x="150" y="150" text-anchor="middle" fill="white" font-size="80">SQR</text></svg>`;
    expect(heart.render()).toBe(testSVG);
  });
});

class Shape {
    constructor(fillColor, textColor, text, shape) {
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
        this.shape = shape;
    }

    setColor(fillColor) {
        this.fillColor = fillColor;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }
}

class Triangle extends Shape {
    constructor(fillColor, textColor, text, shape) {
        super(fillColor, textColor, text, shape); // Call super with required arguments
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,200 250,200 150,50" fill="${this.fillColor}" /><text x="150" y="150" text-anchor="middle" fill="${this.textColor}" font-size="40">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    constructor(fillColor, textColor, text, shape) {
        super(fillColor, textColor, text, shape);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fillColor}" /><text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="60">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    constructor(fillColor, textColor, text, shape) {
        super(fillColor, textColor, text, shape); 
    }

    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="25" width="200" height="200" fill="${this.fillColor}" /><text x="150" y="150" text-anchor="middle" fill="${this.textColor}" font-size="80">${this.text}</text></svg>`;
    }
}

//export as an obj
module.exports = { Shape, Triangle, Circle, Square, Heart };

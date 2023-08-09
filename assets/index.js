//Required
const inquirer = require('inquirer');
const fs = require('fs');


// Import packages; import the module from shape.js
const { Shape, Triangle, Circle, Square } = require("./lib/shapes.js");

// Prompt the user for input
const userInput = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for the logo text:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color keyword or hexadecimal number:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color keyword or hexadecimal number:',
        },
    ]);

    return answers;
};

// Create the SVG
const createSVG = (shapeType, shapeColor, text, textColor) => {
    let shape;
    switch (shapeType) {
        case 'Triangle':
            shape = new Triangle(shapeColor, textColor, text, shapeType);
            break;
        case 'Circle':
            shape = new Circle(shapeColor, textColor, text, shapeType);
            break;
        case 'Square':
            shape = new Square(shapeColor, textColor, text, shapeType);
            break;
        default:
            throw new Error('Error: must select Triangle, Circle, or Square');
    }

    return shape.render();
};
 // adjust shape dimensions here, this is where the 'new' shape is! created dependent on selection
    let fontSize;
    switch (answers.shape) {
      case 'Circle':
        const circleRadius = Math.min(canvasWidth, canvasHeight) * 0.45;        // increase radius
        shape = new Circle(canvasWidth / 2, canvasHeight / 2, circleRadius);
        text._attributes.y = canvasHeight / 1.65;                               // custom text height to suit shape
        fontSize = 58;                                                          // custom font size to suit shape
        break;
        case 'Triangle':                                   
          const triangleHeight = Math.min(canvasWidth, canvasHeight) * 1.1;     // increase the height lol
          shape = new Triangle(canvasWidth / 2, canvasHeight / 2, triangleHeight);
          fontSize = 52;                                                        // custom font size to suit shape
          break;
      case 'Square':
        const squareSize = Math.min(canvasWidth, canvasHeight) * 0.8;           // percentage of area the box takes of canvas
        shape = new Square(canvasWidth / 2, canvasHeight / 2, squareSize);
        text._attributes.y = canvasHeight / 1.65;                               // custom text height to suit shape
        fontSize = 60;                                                          // custom font size to suit shape
        break;
    }
// Write to SVG file
    const saveSVGToFile = (svgContent) => {
        fs.writeFile('logo.svg', svgContent, (err) => {
          if (err) {
            console.error('Error writing to SVG file:', err);
          } else {
            console.log('Created logo successfully!');
          }
        });
      };

// Initialize app
    const init = async () => {
        try {
          const userAnswers = await userInput();
          const svgContent = createSVG(
            userAnswers.shape,
            userAnswers.shapeColor,
            userAnswers.text,
            userAnswers.textColor
          );
          saveSVGToFile(svgContent);
        } catch (error) {
          console.error('An error occurred:', error.message);
        }
      };
      
      init();

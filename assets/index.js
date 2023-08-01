//Required
const inquirer = require('inquirer');
const fs = require('fs');


// Import packages; import the module from shape.js
const { Shape, Triangle, Circle, Square, Heart } = require("./lib/shapes.js");

// Prompt the user for input
const userInput = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
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
            choices: ['Triangle', 'Circle', 'Square', 'Heart'],
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
        case 'Heart':
            shape = new Heart(shapeColor, textColor, text, shapeType);
            break;
        default:
            throw new Error('Error: must select Triangle, Circle, Heart or Square');
    }

    return shape.render();
};

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

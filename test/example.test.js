// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { rockPaperScissors } from '../utils.js';

const test = QUnit.test;

test('Should return tie when both inputs are the same', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResultsBoulder = 'tie';
    const expectedResultsParchment = 'tie';
    const expectedResultsShears = 'tie';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualResultsBoulder = rockPaperScissors('Boulder', 'Boulder');
    const actualResultsParchment = rockPaperScissors('Parchment', 'Parchment');
    const actualResultsShears = rockPaperScissors('Shears', 'Shears');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResultsBoulder, expectedResultsBoulder);
    expect.equal(actualResultsParchment, expectedResultsParchment);
    expect.equal(actualResultsShears, expectedResultsShears);
});

test('Should return win when player has winning choice', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResultsBoulder = 'won';
    const expectedResultsParchment = 'won';
    const expectedResultsShears = 'won';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualResultsBoulder = rockPaperScissors('Boulder', 'Shears');
    const actualResultsParchment = rockPaperScissors('Parchment', 'Boulder');
    const actualResultsShears = rockPaperScissors('Shears', 'Parchment');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResultsBoulder, expectedResultsBoulder);
    expect.equal(actualResultsParchment, expectedResultsParchment);
    expect.equal(actualResultsShears, expectedResultsShears);
});

test('Should return defeat when player has losing choice', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedResultsBoulder = 'lost';
    const expectedResultsParchment = 'lost';
    const expectedResultsShears = 'lost';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualResultsBoulder = rockPaperScissors('Boulder', 'Parchment');
    const actualResultsParchment = rockPaperScissors('Parchment', 'Shears');
    const actualResultsShears = rockPaperScissors('Shears', 'Boulder');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResultsBoulder, expectedResultsBoulder);
    expect.equal(actualResultsParchment, expectedResultsParchment);
    expect.equal(actualResultsShears, expectedResultsShears);
});
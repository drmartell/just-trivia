// IMPORT MODULES under test here:
import { findById, shuffle } from '../common/utils.js';

const test = QUnit.test;

test('findById should return an object match to an ID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testArr = [{ id: 12 }, { id: 123 }, { id: 234 }];
    const testId = 123;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(testArr, testId);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, testArr[1]);
});

test('shuffle should return an Array of equal length to input Array', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testArr = ['a', 'b', 'c', 'd', 'e'];
    //Act 
    // Call the function you're testing and set the result to a const
    const result = shuffle(testArr);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.length, testArr.length);
});

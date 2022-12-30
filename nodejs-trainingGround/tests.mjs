/* eslint-disable no-undef */
import  assert  from 'assert';

import { getAge,getAgeGroup } from './index.mjs';

describe('age calculator', () => {
  it('someone born 1972 is 50 2022', () => {
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });
  it('someone born 2021 is 1 2022', () => {
    // arrange
    //act
    const result = getAge(2021, 2022);

    // assert
    assert.equal(result, 1);
  });
});
describe('age classifier', () => {
  it('0-3 years old should be toddler', () => {
    //arrange
    //act
    const result = getAgeGroup(0);
    // assert
    assert.equal(result, "toddler");
  });
  it('4-12 years old should be kid', () => {
    //arrange
    //act
    const result = getAgeGroup(4);
    // assert
    assert.equal(result, "kid");
  }); 
  it('13-19 years old should be teenager', () => {
    //arrange
    //act
    const result = getAgeGroup(13);
    // assert
    assert.equal(result, "teenager");
  });
  it('20-39 years old should be adult', () => {
    //arrange
    //act
    const result = getAgeGroup(20);
    // assert
    assert.equal(result, "adult");
  });
  it('above 39 years old ... you are just old', () => {
    //arrange
    //act
    const result = getAgeGroup(40);
    // assert
    assert.equal(result, "old");
  });
  it('But 50 - that is prime age, my friend. PRIME. AGE.', () => {
    //arrange
    //act
    const result = getAgeGroup(50);
    // assert
    assert.equal(result, "prime");
  });
  it("Age 0 can't be negative", () => {
    //arrange
    //act
    const result = getAgeGroup(-1);
    // assert
    assert.equal(result, "Age can't be negative");
  });
  it('unitialized variables are undefined', () => {
    // act
    let aNumber;
    // assert
    assert.equal('undefined', typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  
});
describe('constants and variables', () =>{
  it.skip('const means constant', () => {
    const aNumber = 1;
    aNumber = 2;
  });
  it('you can change a let variable', () => {
    // arrange
    let aNumber = 1;

    // act
    aNumber = 2;

    // assert
    assert.equal(aNumber, 2);
  });
  it('uninitialized variable are undefined', () =>{
    // act
    let aNumber;

    // assert
    assert.equal('undefined', typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  it('null should be used for not set', () => {
    // arrange
    // declaring a dummy function
    const peekIntoTheBox = () => { return false;}

    // act
    let isCatAlive = null;

    // assert
    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
  });
  it('array keep values', () => {
    // arrange
    const array1 = [1,2,3,4];
    const array2 = ["Marcus", "Eliza", "Obaid"];
    const array3 = ["Marcus",49, true];
  });
  it('getting elements out of arrays', () => {
    // arrange
    const names = ["Marcus","Eliza","Obaid"];

    // act
    const firstElement = names[0];
    const secondElement = names[1];

    const length = names.length;
    const indexLastElement= names.lastIndexOf("Obaid");
    const lastElement = names[names.length-1];
    // assert
    assert.equal(firstElement, "Marcus");
    assert.equal(secondElement,"Eliza");
    assert.equal(lastElement,"Obaid");
    assert.equal(length,3);
    assert.equal(indexLastElement,2);
  });
  it('while-loops just keeps going unless we stop them', () => {
    // arrange
    let counter = 0;

    // act
    while (counter < 2) {
      console.log(`counter is now'${counter}'`);

      counter ++;
    }
  });
  it('loop through an array whith while', () => {
    // arrange
    let index = 0;
    const names = ["Marcus", "Eliza", "Obaid"];

    // act
    while(index < names.length) {
      console.log(`Index is now '${index}'`);
      console.log(`Curent element is'${names[index]}'`);
      index ++;
    }
  });
  it('loop through an array with for', () => {
    // arrange
    const names =["Marcus","Eliza","Obaid"];
    // act
    for( let i = 0; i < names.length; i++) {
      console.log(`Index from for loop is now '${i}'`);
      console.log(`Curent element from for loop'${names[i]}'`);
    }
  });
  it('calling getAge for loop for each age', () =>{
    // arrange
    const currentYear = 2022;
    const birthYear = [1972, 2022, 1980];

    // act
    let age = null;

    for(let i = 0; i < birthYear.length; i++) {
      const age =getAge(birthYear[i],currentYear)
      console.log(`if you are born in '${birthYear[i]}' you are: '${age}' in '${currentYear}'`)
    }
  });
  it('calling getAge forEach for each age', () =>{
    // arrange
    const currentYear = 2022;
    const birthYear = [1972, 2022, 1980];

    // act
    let age = null;

    birthYear.forEach(birth => {
      console.log(`if you are born in '${birth}' you are: '${getAge(birth,currentYear)}' in '${currentYear}'`)
    });
  });

})
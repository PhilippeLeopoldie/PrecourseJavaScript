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
});
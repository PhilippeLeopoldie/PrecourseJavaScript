/* eslint-disable no-undef */
import  assert  from 'assert';

import { getAge, getAgeGroup, getAgeForPerson, division, addWithLog } from './index.mjs';

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
    //aNumber = 2;
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
  it('adding elements to array with push', () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length,3);

    // act
    names.push("Arvid");

    // arrange
    assert.equal(names.length,4);
    assert.equal(names[3], "Arvid");
  });
  it('removing elements from array with pop',() => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid","Arvid"];

    // act
    names.pop();

    // assert
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  it('removing the last element from array using splice', () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid","Arvid"];
    assert.equal(names.length,4);

    // act
    names.splice(names.length-1,1);

    // assert
    assert.equal(names.length,3);
    assert.equal(names[3], undefined);
    assert.equal(names[names.length-1],"Obaid");
  });
  it('removing the first element from array using splice', () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid","Arvid"];
    assert.equal(names.length,4);

    // act
    names.splice(0,1);

    // assert
    assert.equal(names.length,3);
    assert.equal(names[3], undefined);
    assert.equal(names[0],"Eliza");
  });
  it('adding elements to an immutable array', () => {
     // arrange
     const names = ["Marcus", "Eliza", "Obaid"];
     assert.equal(names.length,3);

     // act
     const newNames = [...names,"Arvid"];

     // assert
     assert.equal(names.length, 3);
     assert.equal(newNames.length, 4);
    });
  it('filter an array - mutable for every element >10', () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];

    // act
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i]>10) {
        numbers.splice(i,1);
      }
    }
    // assert
    assert.equal(numbers.length,3);
  });
  it('filter an array - immutable for every element >10', () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];

    // act
    const lowNumbers = numbers.filter(x => x > 10);
    // assert
    assert.equal(lowNumbers.length,3);
  });
});
describe('object are for building things', () => {
  it('our first object - a human', ()=> {
    // act
    const person= {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true
    };
    // assert
    assert.equal(person.name, 'Marcus');
    assert.equal(person.birthYear, 1972);
    assert.equal(person.isTeacher, true)
  });
  it('get age for person', () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: 'Marcus',
      birthYear: 1972,
      isTeacher: true
    };
    // act
    const age = getAgeForPerson(person, currentYear);
    // assert
    assert.equal(age, 50);
  });
  it('a person with array of favorit film titles', () => {
    // arrange
    const person = {
      name: 'phil',
      favoriteFilm: ['film1','film2','film3']
    };
    // assert
    assert.equal(person.favoriteFilm.length, 3);
    assert.equal(person.favoriteFilm[0],'film1');
    assert.equal(person.favoriteFilm[1], 'film2');
    assert.equal(person.favoriteFilm[person.favoriteFilm.length-1], 'film3');
  });
  it('a person has a list of favorite movies with releaseYears', () =>{
    // act
    const person = {
      name: 'Marcus',
      favoriteFilm: [
        {
          title: 'film1',
          releaseYear: 2001
        },
        {
          title: 'film2',
          releaseYear: 2002
        },
        {
          title: 'film3',
          releaseYear: 2003
        }
      ],
    };
    // assert
    assert.equal(person.favoriteFilm.length,3);
    assert.equal(person.favoriteFilm[0].title, 'film1');
    assert.equal(person.favoriteFilm[2].releaseYear, 2003);
  });
  it(' people is a list of person who has a list of movies which has a list of actors', () =>{
    // act
    const people = [
      {
        person1:
        {
          name:'phil1',
          favoriteMovie:[
            {
              title:'title1',
              actors:['actor1','actor2','actor3'],
            }
          ]
        },
      },
      {
        person2:
        {
          name:'phil2',
          favoriteMovie:[
            {
              title:'title1',
              actors:['actor1','actor5','actor8'],
            },
            {
              title:'title2',
              actors:['actor5','actor12','actor8'],
            },
          ]
        },
      },
      {
        person3:
        {
          name:'phil3',
          favoriteMovie:[
            {
              title:'title3',
              actors:['actor5','actor2','actor9'],
            }
          ]
        },
      },
    ]
    // assert
    assert.equal(people.length, 3);
    assert.equal(people[0].person1.name, 'phil1');
    assert.equal(people[1].person2.favoriteMovie.length,2);
    assert.equal(people[1].person2.favoriteMovie[1].title,'title2');
    assert.equal(people[1].person2.favoriteMovie[1].actors[2],'actor8');
  });
});
describe('exception for when things go awry', () =>{
  it('division 10/2', () => {
    // act
    const result = division(10,2);
    // assert
    assert.equal(result,5);
  });
  it('4 divided with is ???', () => {
    // arrange
    try{
    // act
    const result = division(4,0);
    }catch (error){
    // assert
    assert.notEqual(error, undefined);
    assert.equal(error.message, 'Division with zero is impossible');
    }
  });
});
describe('callbacks', () => {
  it('adding with logger', () => {
    // arrange
    const logThis2 = (message) => {
      console.log(message);
    }
    // act
    const result = addWithLog(1,89,logThis2);
    // assert
    assert.equal(result,90);
  });
  it('adding with inline logger', () => {
    // act
    const result = addWithLog(1,89,(message) => {
      console.log(message);
    });
    // assert
    assert.equal(result, 90);
  });
});

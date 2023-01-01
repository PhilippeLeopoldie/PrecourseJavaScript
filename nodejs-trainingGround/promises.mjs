import fetch from "node-fetch";

fetch('https://randomuser.me/api/?results=30') // return promise which if resolves the next .then will be called
  .then (response => response.json())
  .then(data => { throw new Error('This is the error that I made')})
  .then (data => data.results)
  .then (results => console.table(results))
 /*.then (results => console.log(`we got ${results[0].email} rows`));*/
  //.then(results => console.log(`we got ${results.length} rows`));
  .catch(err => console.log('Something went wrong', {err}));

/*import {readFile} from 'fs';
readFile('thisFileDoesntExist','utf8',(err,file) => {
  if(err) {
    console.log('We got an error', {err});
  }
  // no error
  console.log(`That file has lines`);
});*/

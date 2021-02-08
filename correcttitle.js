function correctTitle(str) {
  let arr = str.split(" ");
  let newArr = [];
  let indexArr = [];
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "and" || "the" || "of" || "in") {
      newArr.push(arr[i].toLowerCase());
    } else {
      let indexArr = arr[i].split("");
    }
    for (let j = 0; j < indexArr.length; j++) {
      if (indexArr[j] !== indexArr[0]) {
        store.push(indexArr[j].toLowerCase());
      }
      if (indexArr[j] === "-") {
        store.push(indexArr[j + 1].toUpperCase());
      } else {
        store.push(indexArr[0].toUpperCase());
      }
      newArr.push(store);
    }
  }
  return newArr.join(" ");
}

// let obj1 = 
//     {
//   "name": "Matthew",
//   "lastName": "Chen",
//   "age": 30,
//   "hobbies": {
//     "one": "tennis",
//     "two": "golf",
//     "three": "video games"
//     },
//   "style": 'none'
//   }


// obj1.name; //accessing a property 
// obj1.hobbies.two;
// obj1[0].name
// obj1.style = 'none'; //adding a property 
// obj1.hobbies.one = 'vegetating' //update (change) a property

// delete obj1.name; // deleting (removing) a property

// //CRUD, Create, Read, Update, Delete


// //for in loop 

// for(const key in obj1){
//   console.log(obji[key]);
// }
//Matthew 
//Chen 
//30
//{...}
//none

//filmCredits
// writer: "Phil D. Page",
// director: "Silas Onda Sett",
// producer: "Maximus Budgitt",
// intern: "Minnie Mumbwaige"

//writer
//director
//producer
//intern

//Phil D. Page as writer 
//Silas Onda Sett as director 


//why don't i understand..?

// ##### Instructions ######
// Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

// The words and, the, of and in should be lowercase.
// All other words should have the first character as uppercase and the rest lowercase.

// ##### Examples #####
// correctTitle("jOn SnoW, kINg IN thE noRth.")
// ➞ "Jon Snow, King in the North."
// correctTitle("sansa stark, lady of winterfell.")
// ➞ "Sansa Stark, Lady of Winterfell."

// currently code returns everything as lowercase***** find out why

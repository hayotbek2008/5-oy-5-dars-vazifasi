// Majburiy masalalar
// 1 - misol
// function capitalizeName(fullname) {
//   return fullname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// let res = capitalizeName('jon, deo');
// console.log(res);



// 2-misol
// function stringReverse(arg) {
//   let reversed = ''
//   for (let i = arg.length - 1; i >= 0; i--) {
//     reversed += arg[i]
//   }
//   return reversed
// }
// let res = stringReverse('hello')
// console.log(res);


// 4-misol
// function theLengthOfTheArray(lengths) {
//   return lengths.map(len => len.length)
// }
// let res  = ['apple', 'banana']
// console.log(theLengthOfTheArray(res));


// 5-misol
// function numbers(num) {

//   let OddNumbers = []
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 1) {
//       OddNumbers.push(num[i])
//     }
//   }
//   return OddNumbers;
// }

// let res = numbers([1, 2, 3, 4, 5])
// console.log(res);


// 6-misol
// let car = {
//   name: 'BMW',
//   year: 2023,
//   color: 'black'
// }


// let person = {
//   name: 'Alix',
//   age: 25,
//   hobbies: ['music']
// }


// let res = Object.assign({}, car, person);
// console.log(res);


// 7-misol
// function string(str) {
//   return str.trim()
// }
// let res = '       hello world!       '
// console.log(string(res));


// 8-misol
// const book = {
//   name: 'Shum bola',
//   author: 'G`afur G`ulom',
// }
// let keys = Object.keys(book)
// console.log(keys);

// 9-misol ??

// 10-misol
// function vowelLetters(arg) {
//   const unliharflar = 'aeiouAEIOU'
//   let sum = 0;

//   arg.split('').forEach(harf => {
//     if (unliharflar.includes(harf)) {
//       sum++
//     }
//   })
//   return sum
// }
// console.log(vowelLetters('salom'));


// 11-misol
// function twosum(arg) {
//   return arg.map(sums => sums + 2)
// }

// console.log(twosum([2, 3, 4, 5]));



// 12-misol
// function theLongest(arg) {
//   let engSoz = ''

//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i].length > engSoz.length) {
//       engSoz = arg[i]
//     }
//   }
//   return engSoz
// }
// console.log(theLongest(['salom', 'yaxshimisiz']));


// 14-misol
// let str = '   !!!salom!!!      '
// let res = str.trim()
// console.log(res);


// 15-misol
// function sumOfSquares(square) {
//   let sum = 0;
//   square.forEach(num => {
//     sum += num * num
//   })
//   return sum
// }
// console.log(sumOfSquares([1, 2, 3, 4, 5]));

// 16-misol
// function massivreverse(reverse) {
//   let reversed = []

//   for (let i = reverse.length - 1; i >= 0; i--) {
//     reversed.push(reverse[i])
//   }
//   return reversed
// }

// console.log(massivreverse([1, 2, 3, 4, 5]));



// 17-misol
// function capitalizeEachWord(args) {
//   return args.split(' ').map(arg => arg.charAt(0).toUpperCase() + arg.slice(1)).join(' ')
// }

// let res = 'hello world'
// console.log(capitalizeEachWord(res));





// 18-misol
// function filterAdults(people, ageLimit) {
//   return people.filter(person => person.age > ageLimit)
// }

// function User(name, age,) {
//   this.name = name;
//   this.age = age;
// }
// let john = new User('john', 34)
// let David = new User('David', 55)
// let Alex = new User('Alex', 12)

// let users = [john, David, Alex]


// let adults = filterAdults(users, 18)
// console.log(adults);


// 19-misol
// function elementMet(arg, element) {
//   let count = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] == element) {
//       count++
//     }
//   }
//   return count
// }

// console.log(elementMet(['salom', 'hayr', 'salom'], 'salom')); 



// 20-misol ????

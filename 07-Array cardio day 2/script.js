const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// is at least one person 19 or older?

const date = new Date();
const currentYear = date.getFullYear();

for (const {year: y, name: n} of people) {
    var edad = currentYear - y;
    if (edad >= 19) {
        console.log(n, edad);
    }
}

// Array.prototype.every() // is everyone 19 or older?

const everyone = ()=> edad >= 19;

console.log(people.every(everyone));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const found = comments.find(found => found.id == 823423)

console.log(found);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIndex = comments.findIndex( comment => comment.id == 823423)

console.log({commentIndex})



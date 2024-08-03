const questionsData = [
  {
    id: 1,
    text: "What is the output of the following code?",
    code: `
    console.log(1 == '1');
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the output of the following code?",
    code: `
    console.log(1 === '1');
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "What is the output of the following code?",
    code: `
    console.log([] + []);
    `,
    options: [
      { id: 1, text: "[]", isCorrect: false },
      { id: 2, text: "''", isCorrect: true },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the output of the following code?",
    code: `
    console.log([] == []);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "Error", isCorrect: false },
      { id: 4, text: "false", isCorrect: true },
    ],
  },
  {
    id: 5,
    text: "What is the output of the following code?",
    code: `
    console.log(Boolean('false'));
    `,
    options: [
      { id: 1, text: "false", isCorrect: false },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "true", isCorrect: true },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "What is the output of the following code?",
    code: `
    let a = null;
    console.log(a);
    `,
    options: [
      { id: 1, text: "null", isCorrect: true },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What is the output of the following code?",
    code: `
    console.log(NaN == NaN);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the output of the following code?",
    code: `
    console.log('10' / 2);
    `,
    options: [
      { id: 1, text: "5", isCorrect: true },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What is the output of the following code?",
    code: `
    let x = 10;
    let y = x++;
    console.log(y, x);
    `,
    options: [
      { id: 1, text: "11 11", isCorrect: false },
      { id: 2, text: "9 10", isCorrect: false },
      { id: 3, text: "10 11", isCorrect: true },
      { id: 4, text: "10 10", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What is the output of the following code?",
    code: `
    const arr = [1, 2, 3];
    arr[10] = 10;
    console.log(arr[8]);
    `,
    options: [
      { id: 1, text: "undefined", isCorrect: true },
      { id: 2, text: "empty", isCorrect: false },
      { id: 3, text: "null", isCorrect: false },
      { id: 4, text: "error", isCorrect: false },
    ],
  },
  {
    id: 11,
    text: "What is the output of the following code?",
    code: `
    let a = 5;
    let b = (function() {
      return a;
      var a = 10;
    })();
    console.log(b);
    `,
    options: [
      { id: 1, text: "5", isCorrect: false },
      { id: 2, text: "undefined", isCorrect: true },
      { id: 3, text: "10", isCorrect: false },
      { id: 4, text: "error", isCorrect: false },
    ],
  },
  {
    id: 12,
    text: "What is the output of the following code?",
    code: `
    const person = { name: 'Alice' };
    Object.seal(person);
    person.name = 'Bob';
    person.age = 25;
    console.log(person);
    `,
    options: [
      { id: 1, text: "{ name: 'Alice' }", isCorrect: false },
      { id: 2, text: "{ name: 'Bob' }", isCorrect: true },
      { id: 3, text: "{ name: 'Bob', age: 25 }", isCorrect: false },
      { id: 4, text: "{ name: 'Alice', age: 25 }", isCorrect: false },
    ],
  },
  {
    id: 13,
    text: "What is the output of the following code?",
    code: `
    console.log('3' - - '2');
    `,
    options: [
      { id: 1, text: "1", isCorrect: false },
      { id: 2, text: "32", isCorrect: false },
      { id: 3, text: "5", isCorrect: true },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 14,
    text: "What is the output of the following code?",
    code: `
    console.log('10' + 10 - 10);
    `,
    options: [
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "1010", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "100", isCorrect: true },
    ],
  },
  {
    id: 15,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof []);
    `,
    options: [
      { id: 1, text: "object", isCorrect: true },
      { id: 2, text: "array", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 16,
    text: "What is the output of the following code?",
    code: `
    let a = [1, 2, 3];
    let b = a;
    b.pop();
    console.log(a);
    `,
    options: [
      { id: 1, text: "[1, 2, 3]", isCorrect: false },
      { id: 2, text: "[1, 2]", isCorrect: true },
      { id: 3, text: "[2, 3]", isCorrect: false },
      { id: 4, text: "[1, 2, 3, undefined]", isCorrect: false },
    ],
  },
  {
    id: 17,
    text: "What is the output of the following code?",
    code: `
    let y = 2;
    function test() {
      console.log(y);
      var y = 3;
    }
    test();
    `,
    options: [
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: true },
      { id: 4, text: "ReferenceError", isCorrect: false },
    ],
  },
  {
    id: 18,
    text: "What is the output of the following code?",
    code: `
    console.log(null == undefined);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 19,
    text: "What is the output of the following code?",
    code: `
    console.log([1, 2, 3] + [4, 5, 6]);
    `,
    options: [
      { id: 1, text: "[1, 2, 3, 4, 5, 6]", isCorrect: false },
      { id: 2, text: "123456", isCorrect: true },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 20,
    text: "What is the output of the following code?",
    code: `
    let a = {};
    console.log(a.__proto__ === Object.prototype);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
];

export default questionsData;

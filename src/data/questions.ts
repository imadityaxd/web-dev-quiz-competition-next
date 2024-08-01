const questionsData = [
  {
    id: 1,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof 42);
    `,
    options: [
      { id: 1, text: "number", isCorrect: true },
      { id: 2, text: "string", isCorrect: false },
      { id: 3, text: "boolean", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof 'Hello, world!');
    `,
    options: [
      { id: 1, text: "number", isCorrect: false },
      { id: 2, text: "string", isCorrect: true },
      { id: 3, text: "boolean", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "What is the output of the following code?",
    code: `
    console.log(5 + '5');
    `,
    options: [
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "55", isCorrect: true },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the output of the following code?",
    code: `
    console.log('5' - 2);
    `,
    options: [
      { id: 1, text: "3", isCorrect: true },
      { id: 2, text: "52", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the output of the following code?",
    code: `
    console.log(Boolean(0));
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "What is the output of the following code?",
    code: `
    let a;
    console.log(a);
    `,
    options: [
      { id: 1, text: "undefined", isCorrect: true },
      { id: 2, text: "null", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What is the output of the following code?",
    code: `
    console.log(null == undefined);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "null", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the output of the following code?",
    code: `
    console.log('5' * 2);
    `,
    options: [
      { id: 1, text: "10", isCorrect: true },
      { id: 2, text: "55", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What is the output of the following code?",
    code: `
    let x = 0;
    let a = x++;
    let b = ++x;
    console.log(a, b, x);
    `,
    options: [
      { id: 1, text: "0 1 0", isCorrect: false },
      { id: 2, text: "0 2 2", isCorrect: true },
      { id: 3, text: "1 2 0", isCorrect: false },
      { id: 4, text: "none", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What is the output of the following code?",
    code: `
    const num = [1, 2, 3];
    num[6] = 6;
    console.log(num[5]);
    `,
    options: [
      { id: 1, text: "undefined", isCorrect: true },
      { id: 2, text: "empty", isCorrect: false },
      { id: 3, text: "error", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 11,
    text: "What is the output of the following code?",
    code: `
    let a = 10;
    let b = (function() {
      return a;
      a = 20
    })();
    console.log(b);
    `,
    options: [
      { id: 1, text: "20", isCorrect: false },
      { id: 2, text: "10", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "error", isCorrect: false },
    ],
  },
  {
    id: 12,
    text: "What is the output of the following code?",
    code: `
    const person = { name: 'John' };
    Object.freeze(person);
    person.age = 30;
    console.log(person);
    `,
    options: [
      { id: 1, text: "{ name: 'John', age: 30 }", isCorrect: false },
      { id: 2, text: "{ name: 'John' }", isCorrect: true },
      { id: 3, text: "{ age: 30 }", isCorrect: false },
      { id: 4, text: "{}", isCorrect: false },
    ],
  },
  {
    id: 13,
    text: "What is the output of the following code?",
    code: `
    console.log('1' - - '1');
    `,
    options: [
      { id: 1, text: "0", isCorrect: false },
      { id: 2, text: "2", isCorrect: true },
      { id: 3, text: "11", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 14,
    text: "What is the output of the following code?",
    code: `
    console.log('5' + 5 - 5);
    `,
    options: [
      { id: 1, text: "5", isCorrect: false },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "50", isCorrect: true },
    ],
  },
  {
    id: 15,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof null);
    `,
    options: [
      { id: 1, text: "object", isCorrect: true },
      { id: 2, text: "null", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "number", isCorrect: false },
    ],
  },
  {
    id: 16,
    text: "What is the output of the following code?",
    code: `
    let a = [1, 2, 3];
    let b = a;
    b.push(4);
    console.log(a);
    `,
    options: [
      { id: 1, text: "[1, 2, 3]", isCorrect: false },
      { id: 2, text: "[1, 2, 3, 4]", isCorrect: true },
      { id: 3, text: "[1, 2, 3, undefined]", isCorrect: false },
      { id: 4, text: "[4, 3, 2, 1]", isCorrect: false },
    ],
  },
  {
    id: 17,
    text: "What is the output of the following code?",
    code: `
    let x = 1;
    function func() {
      console.log(x);
      let x = 2;
    }
    func();
    `,
    options: [
      { id: 1, text: "1", isCorrect: false },
      { id: 2, text: "2", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "ReferenceError", isCorrect: true },
    ],
  },
  {
    id: 18,
    text: "What is the output of the following code?",
    code: `
    let obj1 = { a: 1 };
    let obj2 = { a: 1 };
    console.log(obj1 === obj2);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 19,
    text: "What is the output of the following code?",
    code: `
    let arr = [1, 2, 3, 4, 5];
    let result = arr.map(num => {
      if (num % 2 === 0) {
        return num * 2;
      }
    });
    console.log(result);
    `,
    options: [
      {
        id: 1,
        text: "[undefined, 4, undefined, 8, undefined]",
        isCorrect: true,
      },
      { id: 2, text: "[1, 4, 3, 8, 5]", isCorrect: false },
      { id: 3, text: "[null, 4, null, 8, null]", isCorrect: false },
      { id: 4, text: "[2, 4, 6, 8, 10]", isCorrect: false },
    ],
  },
  {
    id: 20,
    text: "What is the output of the following code?",
    code: `
    let x = function() {
      return {
        message: "Hello"
      };
    };
    console.log(x().message);
    `,
    options: [
      { id: 1, text: "Hello", isCorrect: true },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "Error", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 21,
    text: "What is the output of the following code?",
    code: `
    let obj = { a: 1, b: 2 };
    let { a, b, c } = obj;
    console.log(c);
    `,
    options: [
      { id: 1, text: "undefined", isCorrect: true },
      { id: 2, text: "1", isCorrect: false },
      { id: 3, text: "2", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 22,
    text: "What is the output of the following code?",
    code: `
    function add(a, b) {
      return a + b;
    }
    console.log(add(2, '3'));
    `,
    options: [
      { id: 1, text: "5", isCorrect: false },
      { id: 2, text: "23", isCorrect: true },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 23,
    text: "What is the output of the following code?",
    code: `
    let a = 1;
    let b = a++;
    console.log(a, b);
    `,
    options: [
      { id: 1, text: "2 1", isCorrect: true },
      { id: 2, text: "1 1", isCorrect: false },
      { id: 3, text: "2 2", isCorrect: false },
      { id: 4, text: "1 2", isCorrect: false },
    ],
  },
  {
    id: 24,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof NaN);
    `,
    options: [
      { id: 1, text: "number", isCorrect: true },
      { id: 2, text: "NaN", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "object", isCorrect: false },
    ],
  },
  {
    id: 25,
    text: "What is the output of the following code?",
    code: `
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
    `,
    options: [
      { id: 1, text: "1 2", isCorrect: false },
      { id: 2, text: "2 1", isCorrect: true },
      { id: 3, text: "undefined undefined", isCorrect: false },
      { id: 4, text: "null null", isCorrect: false },
    ],
  },
];
export default questionsData;

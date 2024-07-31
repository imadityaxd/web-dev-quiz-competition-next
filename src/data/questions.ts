const questionsData = [
  {
    id: 1,
    text: "What is the output of the following code?",
    code: `
    console.log(2 + '2' - 1);
    `,
    options: [
      { id: 1, text: "20", isCorrect: false },
      { id: 2, text: "22", isCorrect: false },
      { id: 3, text: "21", isCorrect: true },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the output of the following code?",
    code: `
    const obj = { a: 1 };
    obj.b = 2;
    console.log(Object.keys(obj));
    `,
    options: [
      { id: 1, text: "'a', 'b'", isCorrect: true },
      { id: 2, text: "'a'", isCorrect: false },
      { id: 3, text: "'b'", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "What is the output of the following code?",
    code: `
    function greet() {
      return "Hello, " + name;
      let name = "World";
    }
    console.log(greet());
    `,
    options: [
      { id: 1, text: "Hello, World", isCorrect: false },
      { id: 2, text: "Hello, undefined", isCorrect: false },
      { id: 3, text: "Hello, ", isCorrect: false },
      { id: 4, text: "ReferenceError", isCorrect: true },
    ],
  },
  {
    id: 4,
    text: "What is the output of the following code?",
    code: `
    let x = 1;
    if (function f() {}) {
      x += typeof f;
    }
    console.log(x);
    `,
    options: [
      { id: 1, text: "1function", isCorrect: false },
      { id: 2, text: "1undefined", isCorrect: true },
      { id: 3, text: "1NaN", isCorrect: false },
      { id: 4, text: "1", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the output of the following code?",
    code: `
    console.log([1] == [1]);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "What is the output of the following code?",
    code: `
    const arr = [1, 2, 3];
    arr.length = 2;
    console.log(arr);
    `,
    options: [
      { id: 1, text: "[1, 2, 3]", isCorrect: false },
      { id: 2, text: "[1, 2, undefined]", isCorrect: false },
      { id: 3, text: "[1, 2]", isCorrect: true },
      { id: 4, text: "[]", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What is the output of the following code?",
    code: `
    const arr = [10, 20, 30];
    arr[1] = 40;
    console.log(arr[1]);
    `,
    options: [
      { id: 1, text: "40", isCorrect: true },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "20", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the output of the following code?",
    code: `
    const num = 2;
    function foo() {
      console.log(num);
      const num = 3;
    }
    foo();
    `,
    options: [
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "ReferenceError", isCorrect: true },
      { id: 3, text: "3", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What is the output of the following code?",
    code: `
    const obj = { x: 1, y: 2 };
    const { x, y } = obj;
    console.log(x, y);
    `,
    options: [
      { id: 1, text: "1 2", isCorrect: true },
      { id: 2, text: "undefined undefined", isCorrect: false },
      { id: 3, text: "1 1", isCorrect: false },
      { id: 4, text: "2 2", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What is the output of the following code?",
    code: `
    console.log('5' - 2);
    `,
    options: [
      { id: 1, text: "52", isCorrect: false },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "3", isCorrect: true },
    ],
  },
  {
    id: 11,
    text: "What is the output of the following code?",
    code: `
    const a = [1, 2, 3];
    const b = [...a];
    b.push(4);
    console.log(a, b);
    `,
    options: [
      { id: 1, text: "[1, 2, 3] [1, 2, 3]", isCorrect: false },
      { id: 2, text: "[1, 2, 3, 4] [1, 2, 3, 4]", isCorrect: false },
      { id: 3, text: "[1, 2, 3, 4] [1, 2, 3]", isCorrect: false },
      { id: 4, text: "[1, 2, 3] [1, 2, 3, 4]", isCorrect: true },
    ],
  },
  {
    id: 12,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof null);
    `,
    options: [
      { id: 1, text: "object", isCorrect: true },
      { id: 2, text: "null", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "error", isCorrect: false },
    ],
  },
  {
    id: 13,
    text: "What is the output of the following code?",
    code: `
    let i = 0;
    while (i < 3) {
      i++;
    }
    console.log(i);
    `,
    options: [
      { id: 1, text: "3", isCorrect: true },
      { id: 2, text: "2", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 14,
    text: "What is the output of the following code?",
    code: `
    let x = 5;
    console.log(x == '5');

    `,
    options: [
      { id: 1, text: "false", isCorrect: false },
      { id: 2, text: "true", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 15,
    text: "What is the output of the following code?",
    code: `
    const a = 1;
    const b = a++;
    console.log(a, b);
    `,
    options: [
      { id: 1, text: "1 2", isCorrect: false },
      { id: 2, text: "2 2", isCorrect: false },
      { id: 3, text: "2 1", isCorrect: true },
      { id: 4, text: "1 1", isCorrect: false },
    ],
  },
  {
    id: 16,
    text: "What is the output of the following code?",
    code: `
    console.log(1 + '1' - 1);
    `,
    options: [
      { id: 1, text: "11", isCorrect: false },
      { id: 2, text: "1", isCorrect: false },
      { id: 3, text: "10", isCorrect: true },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 17,
    text: "What is the output of the following code?",
    code: `
    let x = 1;
    x = x + 1;
    console.log(x);
    `,
    options: [
      { id: 1, text: "2", isCorrect: true },
      { id: 2, text: "1", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 18,
    text: "What is the output of the following code?",
    code: `
    const a = [1, 2, 3];
    const b = a;
    b[0] = 4;
    console.log(a);
    `,
    options: [
      { id: 1, text: "[4, 2, 3]", isCorrect: true },
      { id: 2, text: "[1, 2, 3]", isCorrect: false },
      { id: 3, text: "[4, 4, 3]", isCorrect: false },
      { id: 4, text: "[1, 2, 4]", isCorrect: false },
    ],
  },
  {
    id: 19,
    text: "What is the output of the following code?",
    code: `
    const arr = [1, 2, 3];
    const [x, y, z] = arr;
    console.log(z);
    `,
    options: [
      { id: 1, text: "undefined", isCorrect: false },
      { id: 2, text: "3", isCorrect: true },
      { id: 3, text: "1", isCorrect: false },
      { id: 4, text: "2", isCorrect: false },
    ],
  },
  {
    id: 20,
    text: "What is the output of the following code?",
    code: `
    for (let i = 0; i < 3; i++) {
     if (i === 2) console.log('Done');
    }
    `,
    options: [
      { id: 1, text: "Done", isCorrect: true },
      { id: 2, text: "0 1 2", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "error", isCorrect: false },
    ],
  },
  {
    id: 21,
    text: "What is the output of the following code?",
    code: `
    let num = '123';
    console.log(Number(num) + 1);
    `,
    options: [
      { id: 1, text: "123", isCorrect: false },
      { id: 2, text: "124", isCorrect: true },
      { id: 3, text: "error", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 22,
    text: "What is the output of the following code?",
    code: `
    function test() {
      console.log(a);
      var a = 1;
    }
    test();
    `,
    options: [
      { id: 1, text: "1", isCorrect: false },
      { id: 2, text: "ReferenceError", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: true },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 23,
    text: "What is the output of the following code?",
    code: `
    let isActive = true;
    console.log(!isActive);

    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "NaN", isCorrect: false },
      { id: 3, text: "false", isCorrect: true },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 24,
    text: "What is the output of the following code?",
    code: `
    let d = 1;
    d++;
    console.log(d++);
    `,
    options: [
      { id: 1, text: "1", isCorrect: false },
      { id: 2, text: "4", isCorrect: false },
      { id: 3, text: "2", isCorrect: false },
      { id: 4, text: "3", isCorrect: true },
    ],
  },
  {
    id: 25,
    text: "What is the output of the following code?",
    code: `
    const a = { x: 1 };
    const b = { x: 1 };
    console.log(a == b);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
];

export default questionsData;

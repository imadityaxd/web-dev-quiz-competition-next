const questionsData = [
  {
    id: 1,
    text: "What is the output of the following code?",
    code: `
    console.log(null + 1);
    `,
    options: [
      { id: 1, text: "null", isCorrect: false },
      { id: 2, text: "1", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "0", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the output of the following code?",
    code: `
    console.log([] + []);
    `,
    options: [
      { id: 1, text: "0", isCorrect: false },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "''", isCorrect: true },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "What is the output of the following code?",
    code: `
    console.log('5' - 3);
    `,
    options: [
      { id: 1, text: "5", isCorrect: false },
      { id: 2, text: "2", isCorrect: true },
      { id: 3, text: "53", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the output of the following code?",
    code: `
    console.log(1 + '1' - 1);
    `,
    options: [
      { id: 1, text: "9", isCorrect: false },
      { id: 2, text: "11", isCorrect: false },
      { id: 3, text: "10", isCorrect: true },
      { id: 4, text: "1", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the output of the following code?",
    code: `
    console.log('a' - 'b');
    `,
    options: [
      { id: 1, text: "NaN", isCorrect: true },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "error", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "What is the output of the following code?",
    code: `
    console.log(typeof NaN);
    `,
    options: [
      { id: 1, text: "number", isCorrect: true },
      { id: 2, text: "string", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "object", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What is the output of the following code?",
    code: `
    console.log(0.1 + 0.2 == 0.3);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the output of the following code?",
    code: `
    console.log([] == ![]);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What is the output of the following code?",
    code: `
    console.log('' == 0);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What is the output of the following code?",
    code: `
    console.log('1' == [1]);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 11,
    text: "What is the output of the following code?",
    code: `
    console.log('2' * '2');
    `,
    options: [
      { id: 1, text: "4", isCorrect: true },
      { id: 2, text: "22", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 12,
    text: "What is the output of the following code?",
    code: `
    console.log(true + false);
    `,
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "1", isCorrect: true },
      { id: 4, text: "0", isCorrect: false },
    ],
  },
  {
    id: 13,
    text: "What is the output of the following code?",
    code: `
    console.log('5' - 3 + 1);
    `,
    options: [
      { id: 1, text: "undefined", isCorrect: false },
      { id: 2, text: "2", isCorrect: false },
      { id: 3, text: "3", isCorrect: true },
      { id: 4, text: "1", isCorrect: false },
    ],
  },
  {
    id: 14,
    text: "What is the output of the following code?",
    code: `
    console.log('a' + 1);
    `,
    options: [
      { id: 1, text: "a1", isCorrect: true },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "1a", isCorrect: false },
    ],
  },
  {
    id: 15,
    text: "What is the output of the following code?",
    code: `
    console.log('' + 1 + 2);
    `,
    options: [
      { id: 1, text: "12", isCorrect: true },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "21", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 16,
    text: "What is the output of the following code?",
    code: `
    console.log('a' - 'b');
    `,
    options: [
      { id: 1, text: "NaN", isCorrect: true },
      { id: 2, text: "undefined", isCorrect: false },
      { id: 3, text: "0", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    id: 17,
    text: "What is the output of the following code?",
    code: `
    console.log(1 < 2 < 3);
    `,
    options: [
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 18,
    text: "What is the output of the following code?",
    code: `
    console.log(3 + 4 + '5');
    `,
    options: [
      { id: 1, text: "75", isCorrect: true },
      { id: 2, text: "12", isCorrect: false },
      { id: 3, text: "7", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 19,
    text: "What is the output of the following code?",
    code: `
    console.log(+'1' + 1);
    `,
    options: [
      { id: 1, text: "2", isCorrect: true },
      { id: 2, text: "11", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    id: 20,
    text: "What is the output of the following code?",
    code: `
    console.log([] + {});

    `,
    options: [
      { id: 1, text: "[object Object]", isCorrect: true },
      { id: 2, text: "[]", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
];

export default questionsData;

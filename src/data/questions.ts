const questionsData = [
  {
    id: 1,
    text: "What is the output of the following code?",
    code: `
          console.log(5 + '5');
      `,
    options: [
      { id: 1, text: "'55'", isCorrect: true },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "Error", isCorrect: false },
      { id: 4, text: "'5 5'", isCorrect: false },
    ],
  },
  {
    id: 2,
    text: "What is the output of the following code?",
    code: `
          let x = 10;
          if (x > 5) {
              console.log('Greater');
          } else {
              console.log('Smaller');
          }
      `,
    options: [
      { id: 1, text: "'Greater'", isCorrect: true },
      { id: 2, text: "'Smaller'", isCorrect: false },
      { id: 3, text: "10", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 3,
    text: "What is the output of the following code?",
    code: `
          for (let i = 0; i < 3; i++) {
              console.log(i);
          }
      `,
    options: [
      { id: 1, text: "0 1 2", isCorrect: true },
      { id: 2, text: "1 2 3", isCorrect: false },
      { id: 3, text: "0 1 2 3", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 4,
    text: "What is the output of the following code?",
    code: `
          function add(a, b) {
              return a + b;
          }
          console.log(add(3, 4));
      `,
    options: [
      { id: 1, text: "7", isCorrect: true },
      { id: 2, text: "34", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 5,
    text: "What is the output of the following code?",
    code: `
          const obj = { name: 'Alice', age: 25 };
          console.log(obj.name);
      `,
    options: [
      { id: 1, text: "'Alice'", isCorrect: true },
      { id: 2, text: "'Alice, 25'", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "'25'", isCorrect: false },
    ],
  },
  {
    id: 6,
    text: "What is the output of the following code?",
    code: `
          const arr = [1, 2, 3];
          arr.push(4);
          console.log(arr.length);
      `,
    options: [
      { id: 1, text: "4", isCorrect: true },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "5", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    id: 7,
    text: "What is the output of the following code?",
    code: `
          let x = '10';
          let y = 5;
          console.log(x - y);
      `,
    options: [
      { id: 1, text: "5", isCorrect: true },
      { id: 2, text: "105", isCorrect: false },
      { id: 3, text: "Error", isCorrect: false },
      { id: 4, text: "15", isCorrect: false },
    ],
  },
  {
    id: 8,
    text: "What is the output of the following code?",
    code: `
          const numbers = [1, 2, 3];
          console.log(numbers[3]);
      `,
    options: [
      { id: 1, text: "undefined", isCorrect: true },
      { id: 2, text: "4", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
      { id: 4, text: "Error", isCorrect: false },
    ],
  },
  {
    id: 9,
    text: "What is the output of the following code?",
    code: `
          let x = 10;
          x += 5;
          console.log(x);
      `,
    options: [
      { id: 1, text: "15", isCorrect: true },
      { id: 2, text: "10", isCorrect: false },
      { id: 3, text: "5", isCorrect: false },
      { id: 4, text: "20", isCorrect: false },
    ],
  },
  {
    id: 10,
    text: "What is the output of the following code?",
    code: `
          const arr = [1, 2, 3];
          const [a, b] = arr;
          console.log(a, b);
      `,
    options: [
      { id: 1, text: "1 2", isCorrect: true },
      { id: 2, text: "2 3", isCorrect: false },
      { id: 3, text: "1 3", isCorrect: false },
      { id: 4, text: "undefined undefined", isCorrect: false },
    ],
  },
];
export default questionsData;

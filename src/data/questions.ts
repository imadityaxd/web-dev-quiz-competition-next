const questionsData = [
    {
      id: 1,
      text: "What is the output of `console.log(typeof null);`?",
      code: "console.log(typeof null);",
      options: [
        { id: 1, text: "object", isCorrect: true },
        { id: 2, text: "null", isCorrect: false },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "string", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "What will `2 + '2'` evaluate to?",
      code: "console.log(2 + '2');",
      options: [
        { id: 1, text: "4", isCorrect: false },
        { id: 2, text: "22", isCorrect: true },
        { id: 3, text: "NaN", isCorrect: false },
        { id: 4, text: "undefined", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "Which method is used to convert a JavaScript object to a JSON string?",
      code: "const jsonString = JSON.stringify(obj);",
      options: [
        { id: 1, text: "parse()", isCorrect: false },
        { id: 2, text: "stringify()", isCorrect: true },
        { id: 3, text: "toString()", isCorrect: false },
        { id: 4, text: "convert()", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "What will be the result of `[1] == [1]`?",
      code: "console.log([1] == [1]);",
      options: [
        { id: 1, text: "true", isCorrect: false },
        { id: 2, text: "false", isCorrect: true },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "Which of the following is a correct way to define a function in JavaScript?",
      code: "function myFunction() {}",
      options: [
        { id: 1, text: "function myFunction() {}", isCorrect: true },
        { id: 2, text: "function:myFunction() {}", isCorrect: false },
        { id: 3, text: "def myFunction() {}", isCorrect: false },
        { id: 4, text: "func myFunction() {}", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "What does `isNaN('123')` return?",
      code: "console.log(isNaN('123'));",
      options: [
        { id: 1, text: "true", isCorrect: false },
        { id: 2, text: "false", isCorrect: true },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
    {
      id: 7,
      text: "How do you create a new array in JavaScript?",
      code: "const arr = [];",
      options: [
        { id: 1, text: "const arr = [];", isCorrect: true },
        { id: 2, text: "const arr = ();", isCorrect: false },
        { id: 3, text: "const arr = new Array();", isCorrect: true },
        { id: 4, text: "const arr = {}; ", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: "What will be the output of `0 == false`?",
      code: "console.log(0 == false);",
      options: [
        { id: 1, text: "true", isCorrect: true },
        { id: 2, text: "false", isCorrect: false },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
    {
      id: 9,
      text: "What is the result of `'10' - 5`?",
      code: "console.log('10' - 5);",
      options: [
        { id: 1, text: "10", isCorrect: false },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "15", isCorrect: true },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "Which operator is used to compare both value and type?",
      code: "console.log(1 === '1');",
      options: [
        { id: 1, text: "===", isCorrect: true },
        { id: 2, text: "==", isCorrect: false },
        { id: 3, text: "!=", isCorrect: false },
        { id: 4, text: "<=", isCorrect: false },
      ],
    },
    {
      id: 11,
      text: "How do you declare a variable in JavaScript?",
      code: "let variableName;",
      options: [
        { id: 1, text: "let variableName;", isCorrect: true },
        { id: 2, text: "var variableName;", isCorrect: true },
        { id: 3, text: "const variableName;", isCorrect: true },
        { id: 4, text: "variableName;", isCorrect: false },
      ],
    },
    {
      id: 12,
      text: "What will `console.log([] + [])` output?",
      code: "console.log([] + []);",
      options: [
        { id: 1, text: "[]", isCorrect: true },
        { id: 2, text: "[object Object]", isCorrect: false },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
    {
      id: 13,
      text: "What does `typeof` operator do?",
      code: "console.log(typeof 'string');",
      options: [
        { id: 1, text: "Returns the type of a variable", isCorrect: true },
        { id: 2, text: "Converts variable to string", isCorrect: false },
        { id: 3, text: "Checks if variable is undefined", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      id: 14,
      text: "What will be the output of `Boolean('false')`?",
      code: "console.log(Boolean('false'));",
      options: [
        { id: 1, text: "true", isCorrect: true },
        { id: 2, text: "false", isCorrect: false },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
    {
      id: 15,
      text: "What is the result of `null == undefined`?",
      code: "console.log(null == undefined);",
      options: [
        { id: 1, text: "true", isCorrect: true },
        { id: 2, text: "false", isCorrect: false },
        { id: 3, text: "undefined", isCorrect: false },
        { id: 4, text: "NaN", isCorrect: false },
      ],
    },
  ];
  
  export default questionsData;
  
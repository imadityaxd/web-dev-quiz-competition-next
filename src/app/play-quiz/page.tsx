"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import questionsData from "@/data/questions.json";


const Page: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string | null;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  console.log("selected options: ", selectedOptions);
  console.log("submitted: ", submitted);
  const handleOptionChange = (questionId: number, optionText: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: optionText,
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;

    questionsData.forEach((question) => {
      const selectedAnswer = selectedOptions[question.id];
      const correctAnswer = question.options.find((option) => option.isCorrect)?.text;
  
      if (selectedAnswer === correctAnswer) {
        calculatedScore += 1;
      }
    });
  
    setScore(calculatedScore);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black-100 md:px-8 px-4">
      <div className="pt-40">
        {questionsData.map((question) => (
          <div key={question.id} className="mb-8">
            <h2 className="pb-2 text-white">{`Q${question.id}. ${question.text}`}</h2>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {question.code}
            </SyntaxHighlighter>
            <div className="mt-4">
              {question.options.map((option) => (
                <div key={option.id} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`option-${question.id}-${option.id}`}
                    name={`question-${question.id}`}
                    value={option.text}
                    checked={selectedOptions[question.id] === option.text}
                    onChange={() =>
                      handleOptionChange(question.id, option.text)
                    }
                    className="mr-2"
                  />
                  <label
                    htmlFor={`option-${question.id}-${option.id}`}
                    className="text-white"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit Quiz
        </button>
        {submitted && (
          <div className="mt-8 text-white">
            <h2>Quiz Results</h2>
            <p>Your score: {score} / {questionsData.length}</p>
            {questionsData.map((question) => (
              <div key={question.id} className="mb-4">
                <h3>{`Q${question.id}. ${question.text}`}</h3>
                <p>
                  Your answer:{" "}
                  {selectedOptions[question.id] || "No answer selected"}
                </p>
                <p>
                  Correct answer:{" "}
                  {question.options.find((option) => option.isCorrect)?.text}
                </p>
                <p>
                  {selectedOptions[question.id] ===
                  question.options.find((option) => option.isCorrect)?.text
                    ? "Correct"
                    : "Incorrect"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

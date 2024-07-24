"use client";
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import questionsData from "@/data/questions";

const Page = () => {
  const [selectedOptions, setSelectedOptions] = useState<any>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Initialize state with data from local storage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOptions = localStorage.getItem("selectedOptions");
      console.log("Loaded from localStorage:", savedOptions); // Debugging
      if (savedOptions) {
        try {
          const parsedOptions = JSON.parse(savedOptions);
          // Process and validate the loaded data
          const processedOptions: any = Object.fromEntries(
            Object.entries(parsedOptions).map(([key, value]) => {
              const numericKey = Number(key);
              if (isNaN(numericKey)) return [numericKey, null];
              if (value === "null") return [numericKey, null];
              if (value === "NaN") return [numericKey, "NaN"];
              if (value === "undefined") return [numericKey, "undefined"];
              return [numericKey, value];
            })
          );

          setSelectedOptions(processedOptions);
          console.log("Processed options:", processedOptions); // Debugging
        } catch (e) {
          console.error("Error parsing localStorage data:", e);
        }
      } else {
        console.log("No saved options found in localStorage."); // Debugging
      }
    }
  }, []);

  // Save selected options to local storage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        console.log("Saving to localStorage:", selectedOptions); // Debugging
        localStorage.setItem(
          "selectedOptions",
          JSON.stringify(selectedOptions)
        );
      } catch (e) {
        console.error("Error saving to localStorage:", e);
      }
    }
  }, [selectedOptions]);

  const handleOptionChange = (questionId: number, optionText: string) => {
    setSelectedOptions((prevSelectedOptions: any) => ({
      ...prevSelectedOptions,
      [questionId]: optionText,
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;

    questionsData.forEach((question: any) => {
      const selectedAnswer = selectedOptions[question.id];
      const correctAnswer = question.options.find(
        (option: any) => option.isCorrect
      )?.text;

      if (selectedAnswer === correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setSubmitted(true);

    // Clear local storage after form submission if needed
    if (typeof window !== "undefined") {
      console.log("Clearing localStorage");
      localStorage.removeItem("selectedOptions");
    }
  };

  return (
    <div className="min-h-screen bg-black-100 md:px-8 px-4">
      <div className="pt-40">
        {questionsData.map((question: any) => (
          <div key={question.id} className="mb-8">
            <h2 className="pb-2 text-white">{`Q${question.id}. ${question.text}`}</h2>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {question.code}
            </SyntaxHighlighter>
            <div className="mt-4">
              {question.options.map((option: any) => (
                <div key={option.id} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`option-${question.id}-${option.id}`}
                    name={`question-${question.id}`}
                    value={option.text}
                    checked={selectedOptions?.[question.id] === option.text}
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
            <p>
              Your score: {score} / {questionsData.length}
            </p>
            {questionsData.map((question: any) => (
              <div key={question.id} className="mb-4">
                <h3>{`Q${question.id}. ${question.text}`}</h3>
                <p>
                  Your answer:{" "}
                  {selectedOptions[question.id] || "No answer selected"}
                </p>
                <p>
                  Correct answer:{" "}
                  {question.options.find((option: any) => option.isCorrect)?.text}
                </p>
                <p>
                  {selectedOptions[question.id] ===
                  question.options.find((option: any) => option.isCorrect)?.text
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

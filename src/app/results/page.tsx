// app/results/page.tsx
"use client";

import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import questionsData from "@/data/questions"; // Adjust import according to your project structure
import Link from "next/link";
import Button from "@/components/Button";

type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  text: string;
  code: string;
  options: Option[];
};

type ResultsPageProps = {
  searchParams: {
    selectedOptions: string;
    score: string;
  };
};

const ResultsPage: React.FC<ResultsPageProps> = ({ searchParams }) => {
  const selectedOptions = JSON.parse(
    searchParams.selectedOptions || "{}"
  ) as Record<number, string>;
  const score = parseInt(searchParams.score, 10);

  useEffect(() => {
    // Store the score in localStorage
    localStorage.setItem(
      "latestScore",
      JSON.stringify({ selectedOptions, score })
    );
  }, [selectedOptions, score]);

  return (
    <div className="min-h-screen bg-black-100 text-gray-100 py-36 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-400">
            Quiz Results
          </h1>
          <p className="text-lg sm:text-xl mt-1 font-semibold">
            Your score: {score} / {questionsData.length}
          </p>
        </header>
        <div className="space-y-6 sm:space-y-8">
          {questionsData.map((question: Question) => (
            <div
              key={question.id}
              className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-purple mb-2">
                {`Q${question.id}. ${question.text}`}
              </h2>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={{ borderRadius: "8px" }}
              >
                {question.code}
              </SyntaxHighlighter>
              <div className="mt-4 space-y-2">
                <p className="text-base sm:text-lg mb-1">
                  <span className="font-semibold">Your answer: </span>
                  {selectedOptions?.[question.id] || " No answer selected"}
                </p>
                <p className="text-base sm:text-lg mb-1">
                  <span className="font-semibold">Correct answer: </span>
                  {question.options.find((option) => option.isCorrect)?.text}
                </p>
                <p
                  className={`text-base sm:text-lg font-semibold ${
                    selectedOptions?.[question.id] ===
                    question.options.find((option) => option.isCorrect)?.text
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {selectedOptions?.[question.id] ===
                  question.options.find((option) => option.isCorrect)?.text
                    ? "Correct"
                    : "Incorrect"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/leaderboard"
          className="text-center flex justify-center mt-10"
        >
          <Button text="Go to Leaderboard" />
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;

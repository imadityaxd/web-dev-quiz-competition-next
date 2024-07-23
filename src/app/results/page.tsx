"use client";
import React from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import questionsData from "@/data/questions.json";

const Results: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const results = JSON.parse(searchParams.get('results') || '{}');
  
  const getQuestionById = (id: number) => {
    return questionsData.find((q) => q.id === id);
  };

  return (
    <div className="min-h-screen bg-black-100 md:px-8 px-4">
      <div className="pt-40">
        <h1 className="pb-4 text-white">Quiz Results</h1>
        {Object.keys(results).map((questionIdStr) => {
          const questionId = parseInt(questionIdStr, 10);
          const selectedOption = results[questionId];
          const question = getQuestionById(questionId);

          if (!question) return null;

          const correctOption = question.options.find((option) => option.isCorrect);

          return (
            <div key={questionId} className="mb-8">
              <h2 className="pb-2 text-white">{`Q${questionId}. ${question.text}`}</h2>
              <div className="mt-4">
                <div className="mb-2">
                  <strong>Your Answer:</strong> {selectedOption}
                </div>
                <div className="mb-2">
                  <strong>Correct Answer:</strong> {correctOption?.text}
                </div>
                <div className="mb-2">
                  <strong>Code:</strong>
                  <pre className="bg-gray-800 p-4 text-white rounded">
                    <code>{question.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;

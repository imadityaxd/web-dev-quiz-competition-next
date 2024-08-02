"use client";
import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import questionsData from "@/data/questions";
import { useRouter } from "next/navigation";
import axios from "axios";
import { showToast } from "@/helpers/toastModifier/modifyToast";
import { FaSpinner } from "react-icons/fa";
import ShiftingCountdown from "@/components/Timer";
import { LuLoader2 } from "react-icons/lu";

const Page = () => {
  const [selectedOptions, setSelectedOptions] = useState<any>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTwo, setLoadingTwo] = useState<boolean>(false);
  const router = useRouter();

  // Ref to store the latest selectedOptions state
  const selectedOptionsRef = useRef<any>(selectedOptions);

  // Update the ref whenever selectedOptions changes
  useEffect(() => {
    selectedOptionsRef.current = selectedOptions;
  }, [selectedOptions]);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get("/api/getuser");
        setUserName(response.data.data);
      } catch (error) {
        showToast("Failed to fetch user", "error");
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  // Initialize state with data from local storage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedOptions = localStorage.getItem("selectedOptions");
      if (savedOptions && !(savedOptions == "null")) {
        try {
          const parsedOptions = JSON.parse(savedOptions);
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
        } catch (e) {
          console.error("Error parsing localStorage data:", e);
        }
      }
    }
  }, []);

  // Save selected options to local storage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
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

  const handleSubmit = async () => {
    setLoadingTwo(true);
    let calculatedScore = 0;

    // Use ref to get the latest selectedOptions
    const currentSelectedOptions = selectedOptionsRef.current;

    questionsData.forEach((question: any) => {
      const selectedAnswer = currentSelectedOptions?.[question.id];
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
      localStorage.removeItem("selectedOptions");
    }

    // Clear local storage after form submission if needed
    if (typeof window !== "undefined") {
      localStorage.removeItem("endTime");
    }

    try {
      // Redirect to the results page with query parameters
      await axios.post("/api/score", { score: calculatedScore });
      setTimeout(() => {
        router.push(
          `/results?selectedOptions=${encodeURIComponent(
            JSON.stringify(currentSelectedOptions)
          )}&score=${calculatedScore}`
        );
      }, 0);
      await axios.get("/api/logout");
    } catch (error) {
      showToast("Error submitting score", "error");
      console.error("Error submitting score:", error);
    } finally {
      setLoadingTwo(false);
    }
  };

  const handleTimerEnd = () => {
    // console.log("Timer has ended. Perform actions here.");
    handleSubmit();
  };

  return (
    <div className="min-h-screen bg-black-100 md:px-8 px-4">
      <ShiftingCountdown onEnd={handleTimerEnd} />
      {loading ? (
        <div className="flex flex-col items-center">
          <FaSpinner className="animate-spin text-6xl mb-4" />
          <h1 className="text-xl font-semibold">Loading...</h1>
        </div>
      ) : (
        <p className="text-purple text-center text-3xl pt-14">
          welcome <span className="font-semibold">{userName}</span>
        </p>
      )}

      <div className="pt-10">
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
          className={`mt-8 px-4 py-2 bg-blue-500 text-white rounded ${
            loadingTwo && "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={loadingTwo}
        >
          {loadingTwo ? (
            <div className="flex items-center justify-center">
              <LuLoader2 className="animate-spin text-white mr-2" size={24} />
              <span>Loading...</span>
            </div>
          ) : (
            "Submit Quiz"
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;

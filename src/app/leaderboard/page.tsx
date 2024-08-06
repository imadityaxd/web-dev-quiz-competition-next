"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { showToast } from "@/helpers/toastModifier/modifyToast";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/Button";

interface User {
  userId: string;
  name: string;
  instaId: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [latestScore, setLatestScore] = useState<{
    selectedOptions: Record<number, string>;
    score: number;
  } | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.post("/api/leaderboard");
        setLeaderboard(response.data.data);
      } catch (err) {
        setError("An error occurred while fetching the leaderboard.");
        showToast("An error occurred while fetching the leaderboard.", "error");
        console.log("error: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  //fetching score from local storage
  useEffect(() => {
    // Retrieve the score from localStorage
    const storedScore = localStorage.getItem("latestScore");
    if (storedScore) {
      setLatestScore(JSON.parse(storedScore));
    }
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="flex flex-col items-center">
          <FaSpinner className="animate-spin text-6xl mb-4" />
          <h1 className="text-xl font-semibold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen p-4 bg-black-100 text-white overflow-auto text-center">
        <h2 className="text-2xl font-bold mb-8 text-center pt-32 text-purple">
          Leaderboard
        </h2>

        <div className="max-w-4xl mx-auto px-4 py-6 bg-gray-800 rounded-lg shadow-lg mb-8">
          {latestScore && (
            <p className="text-lg sm:text-xl mt-1 font-semibold text-purple">
              Your Last Score: {latestScore.score}
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-4 py-3 border-b text-purple border-gray-500 text-left w-1/12">
                    Rank
                  </th>
                  <th className="px-4 py-3 border-b text-purple border-gray-500 text-center w-4/12">
                    Name
                  </th>
                  <th className="px-4 py-3 border-b text-purple border-gray-500 text-center w-4/12">
                    Instagram ID
                  </th>
                  <th className="px-4 py-3 border-b text-purple border-gray-500 text-left w-1/12">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                  >
                    <td className="px-4 py-3 border-b border-gray-500 text-center text-purple font-semibold">
                      {index + 1}.
                    </td>
                    <td className="px-4 py-3 border-b border-gray-500 text-white-100 font-semibold">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-500 font-semibold text-white-100">
                      {user.instaId ? (
                        <a
                          href={`https://www.instagram.com/${user.instaId.replace(
                            "@",
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {user.instaId}
                        </a>
                      ) : (
                        "____"
                      )}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-600 font-semibold text-white-100 text-center">
                      {user.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link href="/start-quiz" className="mt-14 text-center">
          <Button text="Play-Again" />
        </Link>
      </div>
    </>
  );
};

export default Leaderboard;

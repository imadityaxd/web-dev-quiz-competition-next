"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { showToast } from "@/helpers/toastModifier/modifyToast";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";

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
        const response = await axios.get("/api/leaderboard");
        setLeaderboard(response.data.data);
        console.log("leaderboard-response-debugging: ", response);
        console.log("leaderboard-data-debugging: ", response.data.data);
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

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
  //       <div className="text-center p-4 text-red-500">Error: {error}</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="h-screen p-4 bg-black-100 text-white overflow-auto text-center">
        <h2 className="text-2xl font-bold mb-8 text-center pt-32 text-purple">
          Leaderboard
        </h2>

        <div className="max-w-4xl mx-auto px-4 py-6 bg-gray-700 rounded-lg shadow-lg mb-8">
          {latestScore && (
            <p className="text-lg sm:text-xl mt-1 font-semibold text-purple">
              Your Last Score: {latestScore.score}
            </p>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
              <thead>
                <tr className="bg-gray-700">
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
                    className={index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"}
                  >
                    <td className="px-4 py-3 border-b border-gray-500 text-center text-purple font-semibold">
                      {index + 1}.
                    </td>
                    <td className="px-4 py-3 border-b border-gray-500 text-white-100 font-semibold">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-500 font-semibold text-white-100">
                      {user.instaId ? user.instaId : "____"}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-500 font-semibold text-white-100 text-center">
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
          <MagicButton title="Play-Again" icon={""} position="right" />
        </Link>
      </div>
    </>
  );
};

export default Leaderboard;

"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/api/leaderboard');
        setLeaderboard(response.data.data);
      } catch (err) {
        setError('An error occurred while fetching the leaderboard.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center p-4">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center p-4 text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen p-4 bg-black-100 text-white overflow-auto">
      <h2 className="text-2xl font-bold mb-8 text-center pt-32 text-purple">Leaderboard</h2>
      <div className="max-w-4xl mx-auto px-4 py-6 bg-gray-700 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-3 border-b text-purple border-gray-500 text-left w-1/12">Rank</th>
                <th className="px-4 py-3 border-b text-purple border-gray-500 text-left w-4/12">Name</th>
                <th className="px-4 py-3 border-b text-purple border-gray-500 text-left w-4/12">Instagram ID</th>
                <th className="px-4 py-3 border-b text-purple border-gray-500 text-left w-1/12">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, index) => (
                <tr
                  key={user.userId}
                  className={index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                >
                  <td className="px-4 py-3 border-b border-gray-500 text-center text-purple font-semibold">{index + 1}.</td>
                  <td className="px-4 py-3 border-b border-gray-500 text-white-100 font-semibold">{user.name}</td>
                  <td className="px-4 py-3 border-b border-gray-500 font-semibold text-white-100">{user.instaId ? user.instaId : '____'}</td>
                  <td className="px-4 py-3 border-b border-gray-500 font-semibold text-white-100 text-center">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

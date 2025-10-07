"use client";

import { useEffect, useState } from "react";

const RandomJocks = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setRandomJokes(data);
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center relative">
        <h1 className="text-2xl font-bold mb-4 text-violet-300">Random Jokes Generator ☕</h1>

      
        <p className="text-gray-500 mb-4 text-lg ">{randomJokes.setup}🤔</p>

        {showPunchline ? (
          <div className="mb-4">
            <h2 className="text-xl font-extrabold mb-2 text-red-400 p-2 rounded-2xl border border-amber-400 bg-amber-200 ">{randomJokes.punchline}😆</h2>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition cursor-pointer"
              onClick={() => setShowPunchline(false)}
            >
              Hide Punchline
            </button>
          </div>
        ) : (
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded  hover:bg-yellow-600 transition mb-4 cursor-pointer"
            onClick={() => setShowPunchline(true)}
          >
            Reveal Punchline
          </button>
        )}

        <button
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition mt-2 cursor-pointer"
          onClick={() => {
            fetchRandomJokes();
            setShowPunchline(false);
          }}
        >
          Next
        </button>

   
        <p className="text-gray-400 text-sm mt-4">Joke ID: {randomJokes.id}</p>
      </div>
    </div>
  );
};

export default RandomJocks;


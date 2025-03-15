'use client';

import React from "react";
import { useState } from "react";


export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to My Next.js Application
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            This is a sample Next.js page with a counter.
          </p>
          
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Count: {count}
          </button>
        </div>
      </div>
    </main>
  );
}
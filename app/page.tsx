"use client";

import Loading from "./components/Loading";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateClick = () => {
    setIsLoading(true);
    // Simulate an async operation, like fetching data.
    setTimeout(() => {
      // handle blog generation logic here
    }, 2000);
  };

  return (
    <div
      className={"flex flex-col min-h-screen bg-gray-100 font-sans antialis"}
    >
      {/* Nav Bar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div>
          <a href="#" className="text-white hover:underline">
            Logout
          </a>
        </div>
      </nav>

      <br />
      <br />

      {/* Main */}
      <div className="flex-grow container mx-auto mt-10 px-4 sm: px-0">
        <div className="max-w-3x mx-auto bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
          {/* Intro */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to the AI Blog Generator
            </h2>
            <p className="text-gray-700">
              Generate high-quality blog articles from YouTube videos using AI.
              Simply enter the link to the YouTube video below and let the AI
              create the content for you!
            </p>
          </div>
          <br />
          {/* youtube section */}
          <div>
            <h2 className="text-xl mb-4 font-semibold">Enter YouTube link</h2>
            <div className="flex space-x-4">
              <input
                id="youtubeLink"
                type="url"
                placeholder="Paste Youtube url here"
                className="flex-grow p-2 border border-gray-300 rounded-l-md"
              />
              <button
                id="generateBlogButton"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                onClick={handleGenerateClick}
              >
                Generate
              </button>
            </div>

            {/* section for loading circle */}
            <div id="loadingCircle" className="load">
              {isLoading && <Loading />}
            </div>

            {/* Generated Blog Display */}
            <section className="mt-10 flex-grow">
              <h2 className="text-xl mb-4 font-semibold">
                Generated Blog Article
              </h2>
              <div
                id="blogContent"
                className="mt-2 text-gray-700 space-y-4"
              ></div>
            </section>
          </div>
        </div>
      </div>

      <footer className="text-center p-4 text-black mt-6">
        Powered by @jananadiw
      </footer>
    </div>
  );
}

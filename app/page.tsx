"use client";

export default function Home() {
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
        <div className="max-w-3x mx-auto bg-white p-6 rounded-lg shadow-md transition">
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
        </div>
      </div>
    </div>
  );
}

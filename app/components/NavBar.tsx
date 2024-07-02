"use client";

export default function NavBar() {
  return (
    <div>
      {/* Nav Bar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div className="flex justify-between">
          <a href="#" className="text-white hover:underline">
            Login
          </a>
          <a href="#" className="text-white hover:underline">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}

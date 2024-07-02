"use client";

import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Login() {
  return (
    <>
      <NavBar />
      <br />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
          {/* login form */}
          <form className="space-y-4">
            <h2 className="text-xl font-semibold">Login</h2>
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

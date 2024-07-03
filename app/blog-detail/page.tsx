"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function BlogDetail() {
  return (
    <div className="bg-gray-100 font-sans antialiased">
      <NavBar />
      {/* Main content */}
      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <section>
            <h2 className="text-xl mb-4 font-semibold">Blog Post Details</h2>
            <div className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Blog Post Title</h3>
              <p className="text-gray-700">
                This is the content of the blog post
              </p>
              <hr className="my-4 border-gray-300" />
              <h4 className="text-lg font-semibold">Youtube Title</h4>
              <p className="text-gray-700">
                Title of the associated youtube video
              </p>
              <h4 className="text-lg font-semibold mt-4">Youtube Link</h4>
              <a href="#" className="text-blue-600 hover:underline">
                https://www.youtube.com
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

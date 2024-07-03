"use client";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function AllBlogs() {
  return (
    <div className="bg-gray-100 font-sans antialiased">
      <NavBar />
      {/* Main content */}
      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Blog post section */}
          <section>
            <h2 className="text-xl mb-4 font-semibold">All Blog Posts</h2>
            <div className="space-y-4">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Blog Post Title</h3>
                <p>Content of the blog post...</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Blog Post Title</h3>
                <p>Content of the blog post...</p>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Blog Post Title</h3>
                <p>Content of the blog post...</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

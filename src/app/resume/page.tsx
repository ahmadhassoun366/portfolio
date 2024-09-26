"use client";
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css"; 
import "./style.css"; // Import custom styless

const ResumePage = () => {
  const pdfUrl = "/resume/AhmadHassoun-Resume-.pdf"; 

  return (
    <main className="p-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div>
          <section className="relative bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-10">
            <div className="container mx-auto px-4 text-center flex flex-col gap-4 justify-center items-center">
              <h1 className="text-5xl font-extrabold mb-4">My Resume</h1>
              <a
                href={pdfUrl}
                download="AhmadHassoun-Resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </section>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <div className="pdf-viewer-container">
              <Viewer fileUrl={pdfUrl} />
            </div>
          </Worker>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
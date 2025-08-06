import React, { useState } from "react";
import logo from "./images/logo.png"; 



export default function About({ mode }) {
  const [activeSection, setActiveSection] = useState("intro");


  const navItems = [
    { id: "intro", label: "About TEXTIFY", icon: "📖" },
    { id: "features", label: "What I Built", icon: "🛠️" },
    { id: "github", label: "GitHub Link", icon: "🌐" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return (
          <>
            <h2 className="mb-4 fs-2">📖 About Textify</h2>
            <ul className="fs-5 lh-lg">
              <li className="mb-2">Simple and modern case converter tool for students and content creators.</li>
              <li className="mb-2">Convert your text to <strong>UPPERCASE</strong>, <strong>lowercase</strong>, and more instantly.</li>
              <li className="mb-2">Includes character, word, sentence, and line counter functionalities.</li>
              <li className="mb-2">Offers a clean, distraction-free, and responsive interface.</li>
              <li className="mb-2">Free to use and works in all modern browsers.</li>
            </ul>
          </>
        );
      case "features":
        return (
          <>
            <h2 className="mb-4 fs-3">🛠️ What I Built</h2>
            <div className="row g-4">
              {[
                { title: "Case Converter", desc: "Convert to UPPERCASE, lowercase, capitalized, and more." },
                { title: "Word Counter", desc: "Count how many words are in your text." },
                { title: "Sentence Counter", desc: "Detect and count number of sentences." },
                { title: "Line Counter", desc: "Counts each line in your input." },
                { title: "Character Counter", desc: "Counts all characters with and without spaces." },
                { title: "Reading Time", desc: "Estimates how long it will take to read the text based on word count." },
              ].map((feature, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card h-100 border rounded-3 shadow-sm p-4">
                    <h5 className="fw-bold mb-2">{feature.title}</h5>
                    <p className="mb-0 text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "github":
        return (
          <>
            <h2 className="mb-3 fs-3">🌐 GitHub Link</h2>
            <p className="fs-5">
              Explore the complete source code of TEXTIFY on GitHub. This repository contains all core logic
              for text processing, counters, themes, and user interface implementation. Feel free to check it out.
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/kuldeep-creates/TEXTIFY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary px-4"
              >
                Visit Repository on GitHub
              </a>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`py-5 ${mode === "dark" ? "bg-dark text-light" : "text-dark"}`}>
      <div className="container-fluid">
        <div className="row flex-column flex-md-row" style={{ minHeight: "80vh" }}>
          <aside className="col-md-3 border-end d-flex flex-column align-items-center pt-4">
            <div className="text-center mb-4">
              <img
                src={logo}
                alt="avatar"
                className="img-fluid pd-10"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <nav className="nav flex-column w-100 px-3 d-flex align-items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`btn mb-2 w-75 ${
                    activeSection === item.id ? "btn-primary" : "btn-outline-secondary"
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </aside>
          <main className="col-md-9 px-4" style={{ paddingLeft: "20%" }}>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
} 
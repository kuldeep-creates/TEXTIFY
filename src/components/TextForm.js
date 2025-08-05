import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleonclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleclick = () => {
    setText("");
    props.showAlert("Write Something", "danger");
  };

  const capitalizeText = () => {
    if (text.length === 0) return;
    let newText2 = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText2);
    props.showAlert("First letter capitalized", "success");
  };

  const TitleText = () => {
    if (text.length === 0) return;
    const list = text.trim().split(/\s+/);
    const newText = list
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Title Case", "success");
  };

  const AlternatingText = () => {
    if (text.length === 0) return;
    let newText4 = "";
    for (let i = 0; i < text.length; i++) {
      newText4 += i % 2 === 1 ? text[i].toUpperCase() : text[i].toLowerCase();
    }
    setText(newText4.trim());
    props.showAlert("Converted to Alternating Case", "success");
  };

  const InverseText = () => {
    if (text.length === 0) return;
    let newText5 = "";
    for (let i = 0; i < text.length; i++) {
      newText5 += i % 2 === 0 ? text[i].toUpperCase() : text[i].toLowerCase();
    }
    setText(newText5.trim());
    props.showAlert("Converted to Inverse Case", "success");
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container text-center my-20">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleonchange}
            className={`form-control text-light custom-textarea ${props.darkMode === "dark" ? "dark-mode" : ""}`}
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Type something here..."
            style={{
              backgroundColor: props.darkMode === "dark" ? "#1e1e1e" : "#ffffff",
              color: props.darkMode === "dark" ? "#f5f5f5" : "#000000",
              border: "1px solid",
              borderColor: props.darkMode === "dark" ? "#777" : "#ccc",
            }}
          ></textarea>

        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <button className="btn btn-primary m-2" onClick={handleonclick}>
            Uppercase
          </button>
          <button className="btn btn-primary m-2" onClick={handleloclick}>
            Lowercase
          </button>
          <button className="btn btn-primary m-2" onClick={capitalizeText}>
            Capitalize First
          </button>
          <button className="btn btn-primary m-2" onClick={TitleText}>
            Title Case
          </button>
          <button className="btn btn-primary m-2" onClick={AlternatingText}>
            Alternating Case
          </button>
          <button className="btn btn-primary m-2" onClick={InverseText}>
            Inverse Case
          </button>
          <button className="btn btn-danger m-2" onClick={handleclick}>
            Clear
          </button>
        </div>
      </div>

      <div className="container mx-auto my-4">
        <h2>Your Summary</h2>
        <p>
          Total Words:{" "}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} | Total
          Characters: {text.length}
        </p>
        <p>
          Reading Time: {(0.008 * text.trim().split(/\s+/).length).toFixed(2)}{" "}
          minutes
        </p>
        <p>
          Total Sentences:{" "}
          {
            text
              .trim()
              .split(/(?<=[.?!])\s+(?=[A-Z])/)
              .filter((sentence) => sentence.trim() !== "").length
          }
        </p>
        <p>
          Total Lines:{" "}
          {text.split("\n").filter((line) => line.trim() !== "").length}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Enter your details",
};

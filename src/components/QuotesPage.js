import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { timeStamp } from "../config";
import GetData from "../hooks/getData";
import { sendData } from "../hooks/sendData";
import "animate.css";

const QuotesPage = () => {
  const { docs } = GetData("quotes");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [inputBox, setInputBox] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const submitQuote = () => {
    const quoteObject = {
      name,
      text,
      createdAt: timeStamp(),
    };

    sendData(quoteObject);

    setName("");
    setText("");
  };

  const showInputBox = () => {
    setInputBox(!inputBox);
  };
  return (
    <Container fluid>
      <div className="quote-container d-flex flex-column align-items-center">
        <div onClick={showInputBox} className="toggle-box my-3">
          <i className="fas fa-pencil-alt"></i>
        </div>
        {inputBox && (
          <div className="input-box d-flex flex-column my-5 align-items-center">
            <input
              placeholder="Drop your instagram account (or name)"
              className="name-area my-2"
              value={name}
              onChange={handleChangeName}
            />
            <textarea
              placeholder="Write your thoughts on manglish awareness"
              className="text-area my-2"
              value={text}
              onChange={handleChangeText}
            ></textarea>
            <div>
              <button className="share-button-2 my-3" onClick={submitQuote}>
                {" "}
                Share{" "}
              </button>
            </div>
          </div>
        )}
        {/* <div
          className="input-box d-flex flex-column my-5 align-items-center"
          
        >
          <input
            placeholder="Enter your name"
            className="name-area my-2"
            value={name}
            onChange={handleChangeName}
          />
          <textarea
            placeholder="Write your experience or motivational word"
            className="text-area my-2"
            value={text}
            onChange={handleChangeText}
          ></textarea>
          <div>
            <button className="share-button-2 my-3" onClick={submitQuote}>
              {" "}
              Share{" "}
            </button>
          </div>
        </div> */}
      </div>
      <div className="quote-display-container d-flex flex-wrap justify-content-around my-5">
        {/* <div className="quote-card d-flex flex-column">
          <h1 className="card-title my-3">Rujhan Najib</h1>
          <p className="card-caption">Broken English is still English</p>
        </div> */}
        {docs.map((item, index) => (
          <div
            key={index}
            className="quote-card d-flex flex-column my-2 animate__fadeInUp animate__animated"
          >
            <h1 className="card-title my-3">{item.name}</h1>
            <p className="card-caption">{item.text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default QuotesPage;

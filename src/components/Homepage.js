import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import axios from "axios";

const Homepage = () => {
  let history = useHistory();
  const [visitors, setVisitors] = useState(0);

  //https://api.countapi.xyz/hit/manglishawareness/visits
  //{"namespace":"manglishwareness","key":"0206a3ca-4feb-48d8-9251-81e05997f98e","value":0}
  //https://api.countapi.xyz/hit/manglishawareness/enable_reset
  //https://api.countapi.xyz/set/manglishawareness/0206a3ca-4feb-48d8-9251-81e05997f98e?value=0
  return (
    <Container fluid className="">
      <div className="homepage-container flex-column d-flex justify-content-center align-items-center ">
        <h1 className="main-title text-center ">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Manglish Awareness")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Manglish Awareness")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Manglish Awareness")
                .pauseFor(2500)
                .start();
            }}
          />
        </h1>
        <p className="text-center">
          {" "}
          Broken English is still English, right ?{" "}
        </p>
        <button
          className="share-button-1 mx-5"
          onClick={() => history.push("/manglishawareness/quotespage")}
        >
          Share your story
        </button>
      </div>

      <div className="content1 d-flex flex-column justify-content-center align-items-center my-5">
        <h1 className="text-center content1-title mb-5">
          {" "}
          What is Manglish ?{" "}
        </h1>
        <h4 className="text-center content1-info">
          {" "}
          An informal form of Malaysia English with features of an English-based
          creole principally in Malaysia
        </h4>
      </div>

      <div className="p-2 content2 d-flex justify-content-center space-around align-items-center my-5 flex-column">
        <h1 className="text-center content2-title mb-5">
          {" "}
          So, What is Manglish Awareness?{" "}
        </h1>
        <h4 className="text-center content2-info">
          {" "}
          An awareness to prevent people from judging the way others talk.
        </h4>
      </div>

      <div className="content3 d-flex flex-column justify-content-center  align-items-center my-5">
        <h1 className="text-center content3-title mb-5"> Want to help us? </h1>
        <h4 className="text-center content3-info">
          {" "}
          <a
            target="blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeF329zSXc2X3a_SoDAhmkt5jrcIoHi69rXFgVJTdd-i87q7A/viewform?usp=sf_link"
          >
            <button className="share-button-1">Fill this survey</button>
          </a>
        </h4>
      </div>

      <div className="d-flex justify-content-center align-items-center my-5">
        <a
          href="https://www.instagram.com/manglishawareness/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <i className="fab fa-instagram mx-2"></i>
        </a>
        <a href="https://github.com/janjib" target="_blank" rel="noreferrer">
          {" "}
          <i className="fab fa-github mx-2"></i>{" "}
        </a>
      </div>
    </Container>
  );
};

export default Homepage;

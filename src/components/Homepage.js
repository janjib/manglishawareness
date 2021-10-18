import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import axios from "axios";

const Homepage = () => {
  let history = useHistory();
  const [visitors, setVisitors] = useState(0);

  const getVisitorsData = async () => {
    try {
      const resp = await axios.get(
        `https://api.countapi.xyz/hit/manglishawareness`
      );
      setVisitors(resp.data.value);
    } catch (err) {
      // Handle Error Here
      console.error(err, "There is an error !");
    }
  };

  useEffect(() => {
    getVisitorsData();
  }, []);

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

      <div className="d-flex justify-content-center align-items-center">
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
      <div className="d-flex flex-column justify-content-center align-items-center my-5">
        <h1>{visitors && visitors}</h1>
        <p>Visitors</p>
      </div>
    </Container>
  );
};

export default Homepage;

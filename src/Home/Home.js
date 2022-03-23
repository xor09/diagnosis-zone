import React, { useState, useMemo } from "react";
import "./Home-css.css";
import p_lady from "../images/p_lady.jpg";
import covid_img from "../images/covid_img.jpg";
import cancelImg from "../images/cancel.png";
import general_img from "../images/general_img.jpg";
import firebase from "../firebase";

const Home = ({ container, getContainer, subList, bookNowFunc }) => {
  return container ? (
    <div id="hostipleContainer" className="hostipleContainer">
      <header>
        <h5>Hospitals List</h5>
        <button>
          <img src={cancelImg} onClick={() => getContainer("", 0)}></img>
        </button>
      </header>
      <div className="hospitalCards">
        {subList ? (
          subList.map((data, index) => {
            return (
              <div className="hospitalcard">
                <header className="hospitalcard_header">
                  <img className="cardImg" src={p_lady} alt="card photo"></img>
                </header>
                <main>
                  <div>
                    <h4>{data[0]}</h4>
                  </div>
                  <div>
                    <h5>{data[1].type}</h5>
                  </div>
                  <div>
                    <p>{data[1].description}</p>
                  </div>
                  <div>
                    <p>{data[1].address}</p>
                  </div>
                  <div>
                    <p>
                      {data[1].city} - {data[1].pincode}, {data[1].district}
                    </p>
                  </div>
                  <div>
                    <p>{data[1].state}</p>
                  </div>
                  <div>
                    <hr
                      style={{
                        height: 5,
                        backgroundColor: "white",
                        borderRadius: 10,
                      }}
                    ></hr>
                  </div>
                  <div className="hospitalDitails">
                    <span>General beds: {data[1].generalBeds}</span>
                    <span>Covid beds: {data[1].covidBeds}</span>
                    <span>ICU beds: {data[1].ICU_Beds}</span>
                    <span>Oxygen Cylinders: {data[1].oxygen_cylinder}</span>
                  </div>
                  <hr
                    style={{
                      height: 5,
                      backgroundColor: "white",
                      borderRadius: 10,
                    }}
                  ></hr>
                  <div className="hospitalPricingDetails">
                    <span>ICU bed price: {data[1].covidBedPrice}</span>
                  </div>
                  <hr
                    style={{
                      height: 5,
                      backgroundColor: "white",
                      borderRadius: 10,
                    }}
                  ></hr>
                  <div className="bookNowContainer">
                    <button
                      data-id={index}
                      onClick={() => bookNowFunc(data[0])}
                      type="button"
                      className="bookBtn"
                    >
                      Book Now
                    </button>
                    <button type="button" className="bookBtn">
                      <a className="contactUsLink" href="tel:+919016236434">
                        contact us
                      </a>
                    </button>
                  </div>
                </main>
              </div>
            );
          })
        ) : (
          <span>No data found..</span>
        )}
      </div>
    </div>
  ) : (
    <div id="home" class="home">
      <div class="row flex-item-left">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1 frontCards">
            <div class="card-content white-text">
              <span class="card-title">General</span>
              <img src={general_img} class="center"></img>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action frontCardFooter">
              <button href="#" onClick={() => getContainer("General", 1)}>
                more..
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-item-center">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1 frontCards">
            <div class="card-content white-text">
              <span class="card-title">Covid</span>
              <img src={covid_img} class="center"></img>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action frontCardFooter">
              <button href="#" onClick={() => getContainer("covid", 1)}>
                more..
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-item-right">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1 frontCards">
            <div class="card-content white-text">
              <span class="card-title">Maternity</span>
              <img src={p_lady} class="center"></img>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action frontCardFooter">
              <button href="#" onClick={() => getContainer("maternity", 1)}>
                more..
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

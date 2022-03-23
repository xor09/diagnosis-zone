import React from "react";
import "./AdminRegistration.css";
import cancelBtn from "../images/x-button.png";
import firebase from "../firebase";
const database = firebase.database();

function AdminRegistration() {
  const closeForm = () => {
    document.getElementById("AdminRegistration").style.height = "0%";
    document.getElementById("AdminRegistration").style.width = "0%";
    document.getElementById("AdminRegistration").style.display = "none";
    document.getElementById("home").style.display = "flex";
  };
  const submitForm = () => {
    const Name = document.getElementById("Name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const descrpt = document.getElementById("descrpt").value;
    const district = document.getElementById("district").value;
    const state = document.getElementById("state").value;
    const type = document.getElementById("type").value;
    const ICU = document.getElementById("ICU").value;
    const gnrl = document.getElementById("gnrl").value;
    const covid = document.getElementById("covid").value;
    const oxyCyl = document.getElementById("oxyCyl").value;
    const pincode = document.getElementById("pincode").value;

    if (
      Name === "" ||
      address === "" ||
      city === "" ||
      descrpt === "" ||
      district === "" ||
      state === "" ||
      type === "" ||
      ICU === "" ||
      gnrl === "" ||
      covid === "" ||
      oxyCyl === "" ||
      pincode === ""
    )
      alert("please fill properly..");
    else {
      database
        .ref("Hospitals/" + `${Name}`)
        .set({
          ICU_Beds: ICU,
          Name: Name,
          address: address,
          city: city,
          covidBeds: covid,
          description: descrpt,
          district: district,
          generalBeds: gnrl,
          oxygen_cylinder: oxyCyl,
          pincode: pincode,
          state: state,
          type: type,
        })
        .then(() => {
          alert("Your successfully registered...");
          document.getElementById("Name").value = "";
          document.getElementById("address").value = "";
          document.getElementById("city").value = "";
          document.getElementById("descrpt").value = "";
          document.getElementById("district").value = "";
          document.getElementById("state").value = "";
          document.getElementById("type").value = "";
          document.getElementById("ICU").value = "";
          document.getElementById("gnrl").value = "";
          document.getElementById("covid").value = "";
          document.getElementById("oxyCyl").value = "";
          document.getElementById("pincode").value = "";
        })
        .catch((error) => alert(error.text));
    }
  };
  return (
    <div id="AdminRegistration" className="AdminRegistration">
      <header>
        <h4>Hospital Registration</h4>
        <button>
          <img
            onClick={() => closeForm()}
            src={cancelBtn}
            alt="cancelBtn"
          ></img>
        </button>
      </header>
      <div>
        <input id="Name" placeholder="Hospital Name" type="text"></input>
        <input id="address" placeholder="Address" type="text"></input>
        <input id="city" placeholder="City" type="text"></input>
        <input id="descrpt" placeholder="description" type="text"></input>
        <input id="district" placeholder="district" type="text"></input>
        <input id="state" placeholder="state" type="text"></input>
        <input id="type" placeholder="type of hospital" type="text"></input>
        <input id="pincode" placeholder="pincode" type="number"></input>
        <input
          id="ICU"
          min="0"
          placeholder="no. ICU beds"
          type="number"
        ></input>
        <input
          id="gnrl"
          min="0"
          placeholder="no. general beds"
          type="number"
        ></input>
        <input
          id="covid"
          min="0"
          placeholder="no. covid beds"
          type="number"
        ></input>
        <input
          id="oxyCyl"
          placeholder="no. oxygen cylinders"
          type="number"
        ></input>
      </div>
      <button
        id="submitBtn"
        onClick={() => submitForm()}
        type="button"
        className="submitButton"
      >
        Submit
      </button>
    </div>
  );
}

export default AdminRegistration;

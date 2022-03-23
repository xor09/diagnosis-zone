import React from "react";
import "./BookingForm_css.css";
import cancelBtn from "../images/x-button.png";
import firebase from "../firebase";
const database = firebase.database();

const BookingForm = () => {
  const email = localStorage.getItem("userName");
  const hospitalName = localStorage.getItem("hospitalName");

  const closeForm = () => {
    document.getElementById("bookForm").style.height = "0%";
    document.getElementById("bookForm").style.width = "0%";
    document.getElementById("bookForm").style.display = "none";
    document.getElementById("hostipleContainer").style.display = "flex";
  };

  const submitBooking = () => {
    const Name = document.getElementById("PName").value;
    const address = document.getElementById("Paddress").value;
    const age = document.getElementById("Age").value;
    const type = document.getElementById("wardType").value;
    console.log("WardType: ", type);
    const Phone = document.getElementById("Phone").value;
    const Disease = document.getElementById("Disease").value;
    const RelativeName = document.getElementById("RelativeName").value;
    const RelativePhoneNo = document.getElementById("RelativePhoneNo").value;
    const gender = document.getElementById("gender").value;
    console.log(Name + "," + address);
    if (
      //   Name === "" ||
      //   address === "" ||
      //   age < 0 ||
      //   type === "" ||
      //   Phone.length !== 10 ||
      //   Disease === "" ||
      //   RelativeName === "" ||
      //   RelativePhoneNo.length !== 10 ||
      gender === ""
    )
      alert("please fill properly..");
    else {
      database
        .ref("bookings/" + `${email.slice(0, email.length - 4)}`)
        .set({
          Name: Name,
          address: address,
          hospital_name: hospitalName,
          age: age,
          type: type,
          Phone: Phone,
          Disease: Disease,
          RelativeName: RelativeName,
          RelativePhoneNo: RelativePhoneNo,
          gender: gender,
        })
        .then(() => {
          alert("Your successfully registered...");
          document.getElementById("PName").value = "";
          document.getElementById("Paddress").value = "";
          document.getElementById("Age").value = "";
          document.getElementById("wardType").value = "";
          document.getElementById("Phone").value = "";
          document.getElementById("Disease").value = "";
          document.getElementById("RelativeName").value = "";
          document.getElementById("RelativePhoneNo").value = "";
          document.getElementById("gender").value = "";
          let beds = -1;
          database
            .ref(`Hospitals/${localStorage.getItem("hospitalName")}/${type}`)
            .on("value", (data) => {
              beds = Number(data.val());
              console.log(data.val());
              console.log(type);
              console.log(beds - 1);
            });
          if (beds !== -1 && beds > 0) {
            if (type === "covidBeds")
              database
                .ref(`Hospitals/${localStorage.getItem("hospitalName")}`)
                .update({ covidBeds: beds - 1 });
            else if (type === "ICU_Beds")
              database
                .ref(`Hospitals/${localStorage.getItem("hospitalName")}`)
                .update({ ICU_Beds: beds - 1 });
            else
              database
                .ref(`Hospitals/${localStorage.getItem("hospitalName")}`)
                .update({ generalBeds: beds - 1 });
          }
        })
        .catch((error) => alert(error.text));
    }
  };
  return (
    <div className="bookForm" id="bookForm">
      <header>
        <h5>Booking Form</h5>
        <button>
          <img
            onClick={() => closeForm()}
            id="BookingFormCancelBtn"
            src={cancelBtn}
            alt="BookingForm"
          ></img>
        </button>
      </header>
      <div className="bookForm_inputs">
        <input id="PName" type="text" placeholder="Name.." />
        <input id="Paddress" type="text" placeholder="Address.." />
        <input id="Age" type="number" min="0" placeholder="Age" />
        <input
          id="gender"
          type="text"
          placeholder="gender (male/female/other)"
        />
        <input
          id="Phone"
          type="number"
          placeholder="Phone no. (+91 1234-5678-90).."
        />
        <input id="Disease" type="text" placeholder="Disease.." />
        <select className="wardType" name="ingredients[]" id="wardType">
          <option value="-">Select Bed Type</option>
          <option value="covidBeds">covid</option>
          <option value="ICU_Beds">ICU</option>
          <option value="generalBeds">general</option>
        </select>
        <input id="RelativeName" type="text" placeholder="Relative Name.." />
        <input
          id="RelativePhoneNo"
          type="text"
          placeholder="Relative Phone no."
        />
        <input id="checkBox" type="checkbox" />
      </div>
      <button
        onClick={() => submitBooking()}
        className="bookFormBtn"
        id="bookFormBtn"
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

export default BookingForm;

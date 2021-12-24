import React, { Component } from "react";
const AddRestaurant = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "pink",
          padding: "20px"
        }}
      >
        <form action="add">
          <h2>Please fill the following form</h2>
          <div style={{ borderRadius: "20px", fontSize: "18x" }}>
            <input
              type="text"
              placeholder="Enter the name of Restaurant"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Capacity of Restaurant"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter the Email"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="create new password"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter again password"
              style={{
                height: "40px",
                width: "400px",
                background: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                fontSize: "20px",
                borderRadius: "10px"
              }}
            />
          </div>
          <div>
            <button
              style={{
                height: "40px",
                background: "teal",
                color: "white",
                padding: "10px",
                marginTop: "40px",
                fontSize: "20px",
                borderRadius: "10px",
                marginLeft: "180px"
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <div style={{ width: "90%", margin: "auto" }}>
          <h2 style={{ color: "grey" }}>Cities We Deliver To</h2>
          <div style={{ color: "grey", display: "flex", gap: "2rem" }}>
            <div style={{ width: "18%" }}>
              <p>Delhi NCR</p>
              <p>Hyderabad</p>
              <p>Shimla</p>
              <p>Allahabad</p>
              <p>Agra</p>
            </div>
            <div style={{ width: "18%" }}>
              <p>Bhopal</p>
              <p>Mysore</p>
              <p>Udaipur</p>
              <p>Pushkar</p>
              <p>Thrissur</p>
            </div>
            <div style={{ width: "18%" }}>
              <p>Goa</p>
              <p>Ludhiana</p>
              <p>Leh</p>
              <p>Patna</p>
              <p>Kota</p>
            </div>
            <div style={{ width: "18%" }}>
              <p>Haridwar</p>
              <p>Hyderabad</p>
              <p>Shimla</p>
              <p>Allahabad</p>
              <p>Agra</p>
            </div>
            <div style={{ width: "18%" }}>
              <p>Jodhpur</p>
              <p>Hyderabad</p>
              <p>Shimla</p>
              <p>Allahabad</p>
              <p>Agra</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddRestaurant;

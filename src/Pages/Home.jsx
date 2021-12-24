import React, { Component } from "react";
const Home = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            width: "90%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
          <div
            style={{
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "cornsilk"
            }}
          >
            <img
              src="/images/f1.webp"
              alt="img"
              height="250"
              width="250"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
            />
            <p>Order Food Online</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "pink"
            }}
          >
            <img
              src="/images/f2.webp"
              alt="img"
              height="250"
              width="250"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
            />
            <p>Order Food Online</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "yellow"
            }}
          >
            <img
              src="/images/f3.webp"
              alt="img"
              height="250"
              width="250"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
            />
            <p>Order Food Online</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "lightpink"
            }}
          >
            <img
              src="/images/f4.jpeg"
              alt="img"
              height="250"
              width="250"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px"
              }}
            />
            <p>Order Food Online</p>
          </div>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <h1>Collections</h1>
        <p style={{ fontSize: "22px" }}>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Mughalsarai, based on trends
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: "cornsilk"
          }}
        >
          <img
            src="/images/f1.webp"
            alt="img"
            height="250"
            width="250"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          />
          <p>Order Food Online</p>
        </div>
        <div
          style={{
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: "pink"
          }}
        >
          <img
            src="/images/f2.webp"
            alt="img"
            height="250"
            width="250"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          />
          <p>Order Food Online</p>
        </div>
        <div
          style={{
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: "yellow"
          }}
        >
          <img
            src="/images/f3.webp"
            alt="img"
            height="250"
            width="250"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          />
          <p>Order Food Online</p>
        </div>
        <div
          style={{
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: "lightpink"
          }}
        >
          <img
            src="/images/f4.jpeg"
            alt="img"
            height="250"
            width="250"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          />
          <p>Order Food Online</p>
        </div>
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
export default Home;

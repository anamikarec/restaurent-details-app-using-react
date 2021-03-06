import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import UserForm from "../UserForm/UserForm";
import axios from "axios";

const NavBar = () => {
  // const api = process.env.REACT_APP_API_KEY;
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/photos/restaurant-gourmet-food-on-dark-background-picture-id902558446?k=20&m=902558446&s=170667a&w=0&h=-mr8LaG_pKDXhwA5n-jkYeqMsKwUtNdSFIIggfjicu0=')",
          height: "500px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* <p style={{color:"white"}}>hi: {api}</p> */}
        <div className={styles.navbar}>
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
          <Link to="/login" className={styles.navbarLink}>
            Login Page
          </Link>
          <Link to="/signup" className={styles.navbarLink}>
            Sign Up
          </Link>
          <Link to="/addrestaurants" className={styles.navbarLink}>
            Add Reastaurants
          </Link>
        </div>
        <div className={styles.imgLogo}>
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="image"
            height="50"
          />
        </div>
        <div className={styles.imgLogo}>
          <p style={{ fontSize: "40px" }}>
            Discover the best food & drinks in Mughalsarai
          </p>
        </div>
      </div>
      <div>
        <UserForm />
      </div>
    </>
  );
};
export default NavBar;

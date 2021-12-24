import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [userInput, setUser] = useState("Arrabiata");
  const [data, setData] = useState([]);
  const handleSearch = (userInput) => {
    const config = {
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    };
    return axios(config);
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = () => {
    console.log(userInput);
    handleSearch(userInput).then(
      (res) => setData(res.data.meals)
      // var foodData = res.data.meals;
      // console.log(foodData);
    );
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          name="city"
          id="city"
          style={{
            padding: "10px",
            fontSize: "18px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            border: "1px solid black",
            borderRight: "1px solid grey",
            marginTop: "50px"
          }}
        >
          <option value="Lucknow">Lucknow</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Siddharthnagar">Kalpi</option>
          <option value="Basti">Basti</option>
          <option value="Delhi">Delhi</option>
        </select>
        <input
          type="text"
          onChange={handleChange}
          style={{
            padding: "10px",
            fontSize: "18px",
            width: "400px",
            // borderTopRightRadius: "10px",
            // borderBottomRightRadius: "10px",
            // border: "0",
            marginTop: "50px",
            border: "1px solid black"
          }}
          placeholder="🔍Search for restaurant, cuisine or a dish"
        />
        <input
          type="submit"
          onClick={handleSubmit}
          style={{
            padding: "10px",
            fontSize: "18px",
            width: "400px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            // border: "0",
            marginTop: "50px",
            border: "1px solid black"
          }}
          placeholder="🔍Search for restaurant, cuisine or a dish"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          width: "90%",
          margin: "auto"
        }}
      >
        {data.map((item) => {
          return (
            // <h3>{item.idMeal}</h3>
            <div
              style={{
                textAlign: "center",
                borderRadius: "10px",
                backgroundColor: "cornsilk"
              }}
            >
              <img
                src={item.strMealThumb}
                alt="img"
                height="250"
                width="250"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px"
                }}
              />
              <p>Order Id : {item.idMeal}</p>
              <p>{item.strMeal}</p>
              <p>Meal Time: {item.strCategory}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default UserForm;

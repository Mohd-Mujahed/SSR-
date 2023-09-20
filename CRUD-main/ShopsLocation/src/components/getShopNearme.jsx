import React, { useState } from "react";
import Nearme from "./nearme";
import axios from "axios";

/*
define get shops near me. if error, catch, if res, navigate to nearme
* */

const initialState = {
  longitude: "",
  latitude: "",
  range: "",
};

export default function GetShopNearme() {
  const [formInputData, setFormInputData] = useState(initialState);
  const { longitude, latitude, range } = formInputData;
  const [loading, setLoading] = useState(false);
  const [nearshops, setNearShops] = useState([]);

  //update the changes in form input
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputData({ ...formInputData, [name]: value });
  };

  //submit formData to api for processing
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios({
        method: "post",
        url: "http://localhost:8000/getshopsnearme",
        data: {
          coordinates: [+longitude, +latitude],
          range: +range,
        },
      }).then((res) => {
        setLoading(false);
        setNearShops(res.data);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="longitude"
          type="text"
          name="longitude"
          value={longitude}
          onChange={(e) => handleFormInputChange(e)}
        />
        <input
          placeholder="latitude"
          type="text"
          name="latitude"
          value={latitude}
          onChange={(e) => handleFormInputChange(e)}
        />
        <input
          type="text"
          placeholder="range in km"
          name="range"
          value={range}
          onChange={(e) => handleFormInputChange(e)}
        />
        <button variant="contained" color="primary" type="submit">
          Get shops
        </button>
      </form>

      {/* render nearshops below */}
      <div>
        {loading && <p>Loading...</p>}

        {nearshops.length !== 0 && (
          <>
            <Nearme shops={nearshops} />
          </>
        )}
      </div>
    </>
  );
}

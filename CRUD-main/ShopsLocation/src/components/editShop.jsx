// main file

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addShop, editShop, getShop } from "../service/api";
import Shop from "../../../server/schema/shop-schema.js";
import axios from "axios";

export default function EditShop() {
  //access shop details from redux
  const { shopDetails } = useSelector((store) => store["shopDetails"]);
  const {
    name: shopName,
    location: { type, coordinates },
    category: shopCategory,
  } = shopDetails;

  //initial state
  const initialValues = {
    name: shopName,
    longitude: coordinates[0],
    latitude: coordinates[1],
    category: shopCategory,
  };

  const [shop, setShop] = useState(initialValues);
  const { name, longitude, latitude, category } = shop;
  const { id } = useParams();

  let navigate = useNavigate();

  //update form input changes
  const onValueChange = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
  };

  const editShopDetails = async (e) => {
    e.preventDefault();

    const updates = {
      name,
      location: {
        type,
        coordinates: [+longitude, +latitude],
      },
      category,
    };

    console.log(updates);

    try {
      await axios({
        method: "patch",
        url: `http://localhost:8000/edit/${id}`,
        data: updates,
      }).then((res) => {
        console.log(res.data);
        navigate("/all");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={editShopDetails}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) => onValueChange(e)}
          value={name}
        />

        <input
          placeholder="longitude"
          type="text"
          name="longitude"
          onChange={(e) => onValueChange(e)}
          value={longitude}
        />

        <input
          placeholder="latitude"
          type="text"
          name="latitude"
          onChange={(e) => onValueChange(e)}
          value={latitude}
        />

        <input
          placeholder="category"
          type="text"
          name="category"
          onChange={(e) => onValueChange(e)}
          value={category}
        />

        <button variant="contained" color="primary" type="submit">
          Edit Shop
        </button>
      </form>
    </>
  );
}

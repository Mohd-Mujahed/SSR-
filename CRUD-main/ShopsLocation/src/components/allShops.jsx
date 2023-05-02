import React, { useEffect, useState } from "react";
import { deletShop, getShops } from "../service/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { STORE_SHOP_DETAILS } from "../redux/slices/shopDetailsSlice";
import axios from "axios";

export default function AllShops() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [Shops, setShops] = useState([]);
  const [deletedShop, setDeletedShop] = useState(false);

  useEffect(() => {
    getAllShops();
  }, [deletedShop]);

  const getAllShops = async () => {
    let response = await getShops();
    setShops(response.data);
  };

  const deleteShop = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:8000/delete/${id}`,
      }).then((res) => {
        res.data === "Deleted" && setDeletedShop(true);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">cordinates</th>
            <th scope="col">category</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {Shops.map((shop, index) => {
            return (
              <tr key={index} id={index}>
                <td>{shop._id}</td>
                <td>{shop.name}</td>
                <td>{` [${shop.location.coordinates}]`}</td>
                <td>{shop.category}</td>
                <td>
                  <Link to={`/edit/${shop._id}`}>
                    <button onClick={() => dispatch(STORE_SHOP_DETAILS(shop))}>
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => {
                      deleteShop(shop._id);
                    }}
                  >
                    Delet
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

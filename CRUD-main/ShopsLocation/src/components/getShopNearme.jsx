import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getShopsNearMe  } from '../service/api';
import NearShop from '../../../server/schema/nearshop-schema';
import Nearme from './nearme';

const initvalues ={
  range: '',
  coordinates: ['', '']
}

export default function GetShopNearme() {
    const [shop, setShop] = useState(initvalues);
    const [filteredShops, setFilteredShops] = useState([]); 
    const { range,coordinates  } = shop;
    
    let navigate = useNavigate();


    const onValueChange = (e) => {
      if (e.target.name === 'lon' || e.target.name === 'lat') {
        const newCoords = [...coordinates];
        newCoords[e.target.name === 'lon' ? 0 : 1] = e.target.value;
        setShop({...shop, coordinates: newCoords });
      } else {
        setShop({...shop, [e.target.name]: e.target.value});
      }
    }
  
    const addShopDetails = async() => {
      const newShop = new NearShop ({
        range,
        location: {
          type: 'Point',
          coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
        }
      });
      const response = await getShopsNearMe(newShop); // call the API and get the filtered data
      setFilteredShops(response); // set the filtered data in state
    //   navigate('/nearme');
    }
  return (
   <>
   <input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)}  />
        <input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)} /><input type="text" placeholder='distance' name='range' onChange={(e) => onValueChange(e)} />
        <button variant="contained" color="primary" onClick={() => addShopDetails()}>Get shops</button>
        {filteredShops.length > 0 && <Nearme shops={filteredShops} />}
   </>
  )
}

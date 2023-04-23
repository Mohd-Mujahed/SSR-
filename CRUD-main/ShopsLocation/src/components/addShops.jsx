import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addShop } from '../service/api';
import Shop from '../../../server/schema/shop-schema.js';

const initvalues ={
  name: '',
  coordinates: ['', ''],
  category: ''
}

export default function AddShops() {




  const [shop, setShop] = useState(initvalues);
    const { name,coordinates, category } = shop;
    
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
      const newShop = new Shop({
        name,
        location: {
          type: 'Point',
          coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
        },
        category
      });
      await addShop(newShop);
      navigate('/all');
    }
  return (
    <>
  <div>

   <input type="text" placeholder='name' name='name' onChange={(e) => onValueChange(e)} value={name} /><input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)} value={coordinates[0]} /><input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)} value={coordinates[1]}/><input placeholder='category' type="text" name='category' onChange={(e) => onValueChange(e)} value={category} />
   <button variant="contained" color="primary" onClick={() => addShopDetails()}>Add Shop</button>
  </div>

    </>
  )
}


// main file 




import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addShop, editShop, getShop } from '../service/api';
import Shop from '../../../server/schema/shop-schema.js';

const initValues ={
  name: '',
  coordinates: [undefined, undefined],
  category: ''
}

export default function EditShop() {

  const [shop, setShop] = useState(initValues);
  const { name, coordinates, category } = shop;

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadShopDetails();
  }, []);
  console.log(shop)

  const loadShopDetails = async () => {
    const response = await getShop(id);
    setShop( response.data);

    console.log('data',response.data,'data')
  }

  const onValueChange = (e) => {
    if (e.target.name === 'lon' || e.target.name === 'lat') {
      const newCoords = shop.location.coordinates ? [...shop.location.coordinates] : [undefined, undefined];
      newCoords[e.target.name === 'lon' ? 0 : 1] = e.target.value || undefined;
      setShop({ ...shop, location: { ...shop.location, coordinates: newCoords } });
    } else {
      setShop({ ...shop, [e.target.name]: e.target.value });
    }
  }

  const editShopDetails = async () => {
    const newShop = new Shop({
      name,
      location: {
        type: 'Point',
        coordinates: [parseFloat(shop.location.coordinates[0]), parseFloat(shop.location.coordinates[1])]
      },
      category
    });
    await editShop(id,newShop);
    navigate('/all');
  }

  return (
    <>
       <div>
//         <input type="text" placeholder='name' name='name' onChange={(e) => onValueChange(e)} value={ shop.name } />
//         <input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)} value={shop.location?.coordinates[0] ?? ''} />
//         <input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)} value={shop.location?.coordinates[1] ?? ''} />
//         <input placeholder='category' type="text" name='category' onChange={(e) => onValueChange(e)} value={shop.category} />
//         <button variant="contained" color="primary" onClick={() => editShopDetails()}>Edit Shop</button>
//       </div>
    </>
  )
}



// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { addShop, editShop, getShop } from '../service/api';
// import Shop from '../../../server/schema/shop-schema.js';

// const initValues ={
//   name: '' ,location: {
//     coordinates: [undefined, undefined]
//   },
//   category: ''
// }

// export default function EditShop() {

//   const [shop, setShop] = useState(initValues);

//   let navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     loadShopDetails();
//   }, []);
// console.log(shop.name);

// console.log('hi',shop,shop.name);
//   const loadShopDetails = async () => {
//     const response = await getShop(id);
//     setShop(response.data);
//     console.log(response.data);
//   }

//   const onValueChange = (e) => {
//     if (e.target.name === 'lon' || e.target.name === 'lat') {
//       const newCoords = shop.location.coordinates ? [...shop.location.coordinates] : [undefined, undefined];
//       newCoords[e.target.name === 'lon' ? 0 : 1] = e.target.value || undefined;
//       setShop({ ...shop, location: { ...shop.location, coordinates: newCoords } });
//     } else {
//       setShop({ ...shop, [e.target.name]: e.target.value });
//     }
//   }

//   const editShopDetails = async () => {
//     const updatedShop = {
//       name: shop.name,
//       location: {
//         type: 'Point',
//         coordinates: [parseFloat(shop.location.coordinates[0]), parseFloat(shop.location.coordinates[1])]
//       },
//       category: shop.category
//     }; 
//     console.log( updatedShop)
//     await editShop(id,updatedShop);
//     // navigate('/all');
//   }
  

//   return (
//     <>
//       <div>
//         <input type="text" placeholder='name' name='name' onChange={(e) => onValueChange(e)} value={ shop.name } />
//         <input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)} value={shop.location?.coordinates[0] ?? ''} />
//         <input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)} value={shop.location?.coordinates[1] ?? ''} />
//         <input placeholder='category' type="text" name='category' onChange={(e) => onValueChange(e)} value={shop.category} />
//         <button variant="contained" color="primary" onClick={() => editShopDetails()}>Edit Shop</button>
//       </div>
//     </>
//   )
// }

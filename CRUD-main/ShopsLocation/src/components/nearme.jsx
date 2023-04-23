import React, { useEffect, useState } from 'react'
import { deletShop, getShopsNearMe } from '../service/api'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Nearme({shops}) {

    // let navigate = useNavigate();
    // const [Shops,setShops]= useState([]);
    // useEffect(()=>{
    //     getShopsNearMe()
    // },[])

    // const getAllShops = async ()=>{
    //   let response =  await getShopsNearMe();
    //   setShops(response.data)
    //   console.log(Shops)
    // }
    // const delShop = async (id)=>{
    //     await deletShop(id)
       
    // }
    return (
        <>
     <table className='table table-dark table-striped mt-5'>
    <thead>
    <tr>
        <th  scope="col">id</th>
        <th  scope="col">name</th>
        <th  scope="col">cordinates</th>
        <th  scope="col">category</th>
        <th  scope="col">action</th>


    </tr>
    </thead>
   <tbody>
        
        
         {
            shops.map((shop,index)=>{
                return(
                    <tr key={index} id={index} >
                        <td>{shop._id}</td>
                        <td>{shop.name}</td>
                        <td>{` [${shop.location.coordinates}]`}</td>
                        <td>{shop.category}</td>
                        <Link to={`/edit/${shop._id}`}>  <button >Edit</button></Link>
                      
                       {/* <button onClick={()=>{
                        delShop(shop._id)
                       }} >Delet</button> */}
                  
        
                    </tr>
                )
            })
         }
          
           </tbody>
          
        </table>
        
        
        
        </>
          )
}

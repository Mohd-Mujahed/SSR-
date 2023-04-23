import axios from "axios";
const URL = 'http://localhost:8000';

export const  addShop = async (data)=>{
    try{
      return await axios.post(`${URL}/add`,data);
      
    }
    catch(error){
        console.log(error);
    }
}

export const getShops = async ()=>{
  try{
    return  await axios.get(`${URL}/all`);
 
  }
  catch(error){
      console.log(error);
  }
}
export const getShop = async (id)=>{
  try{
    const response = await axios.get(`${URL}/edit/${id}`);
    return response;
 
  }
  catch(error){
      console.log(error);
  }
}
export const editShop = async (id,data)=>{
  console.log('hi',data._doc,id);
  try{
    return await axios.put(`${URL}/edit/${id}`,data._doc);
 
  }
  catch(error){
      console.log('api',error);
  }
}
export const deletShop = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
}


export const  getShopsNearMe = async (data)=>{
  // console.log('api',data)
  try{
    const response = await axios.post(`${URL}/getshopsnearme`, data);
    return response.data; // return the filtered data
    
  }
  catch(error){
      console.log(error);
  }
}
// export const  NearMe = async ()=>{
//   // console.log('api',data)
//   try{
//     return await axios.get(`${URL}/getshopsnearme`);
   
    
//   }
//   catch(error){
//       console.log(error);
//   }
// }
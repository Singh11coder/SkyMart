import axios from "../config/axiosInstance.jsx";

export let getProductData = async() => {
     try{
       console.log("Api Calling...");
       let res = await axios("/products");
       return res.data.products;
      
     }catch(error){
       console.log("Error in fetching Data",error);
     }
}
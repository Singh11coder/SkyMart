import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading,setIsLoading]  = useState(false);

  let getProductData = async() => {
     try{
       setIsLoading(true);
       let res = await axios.get("https://dummyjson.com/products");
       console.log(res.data.products);
       setProductsData(res.data.products);
     }catch(error){
       console.log("Error in fetching Data",error);
     }finally{
       setIsLoading(false);
     }
  }
 

  useEffect(() => {
    getProductData();
  },[])

  return (
    <div className="flex flex-wrap ">
       {productsData.map((product) => {
          return <ProductCard key={product.id} product={product}/>
       })}
    </div>
  )
}

export default Shop

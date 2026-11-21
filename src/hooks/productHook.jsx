import {getProductData} from "../api/ProductApi.js";
import {useQuery} from "@tanstack/react-query";

export const useProduct = () => {
  const {isPending, data, error} = useQuery({
     queryKey: ["products"],
     queryFn: getProductData,
     staletime: 15000
  }) 
  
  return {
    isPending,
    data,
    error
  }
}


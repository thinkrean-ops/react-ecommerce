import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProducts = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, []);
  

  return {
    data, 
    isloading

  }
};

export default useGetAllProducts;

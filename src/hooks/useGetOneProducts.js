import axios from "axios";
import { useEffect, useState } from "react";

const useGetOneProducts = (id) =>{

     const [data, setData] = useState([]);


  const [isloading, setIsloading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log("Error:", error);
      }finally{
        setIsloading(false)
      }
    };

    fetchData();
  }, [id]);

    return{

        data,isloading

    }
}
export default useGetOneProducts
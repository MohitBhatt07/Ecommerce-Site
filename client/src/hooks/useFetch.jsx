import {useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = ({url})=>{
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError ] = useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setIsLoading(true);
        const response = await axios.get(process.env.REACT_APP_API_URL +url ,{
           headers: {
              Authorization : "bearer "+ process.env.REACT_APP_API_TOKEN2,
           }
        });
        
        setData(response.data.data);
      }
      catch(err){
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  },[url]);
  return {data,isLoading,error};
}
export default useFetch
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Bcd() {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) =>setdata(res.data))
    .catch((err) => {
      console.log(err);
    });
  },[])

  const handlePost=()=>{
    axios.post('http://localhost:3004/post',data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return <div>
    {data.map((x) => x.id)}
    <button onClick={handlePost}>Post data</button>
    </div>;
}

"use client";

import { useEffect, useState } from "react";
import Counter from "./Counter";


const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {




  const [postDta, setPostDta] = useState([]);
  const [dataShow, setDataShow] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setPostDta(data)
      return data
    };
    fetchData();
  }, [])


  const handleClick = () => {
    setDataShow(true)
  };


  return (
    <>
      <h1>Client component</h1>
      <Counter/>
      <button
        className="p-1 rounded-2xl bg-green-600 text-white mt-5  cursor-pointer"
        onClick={handleClick}
      >Click here
      </button>

      {dataShow ? <ul className="grid grid-cols-3 gap-5 mt-3 p-1">
        {postDta.map((curElem, index) => {
          return (
            <li className="border border-blue-300 p-1 rounded-2xl" key={index}>{curElem.body}</li>
          )
        })}
      </ul> : null}


    </>
  )
}

export default ClientComp;

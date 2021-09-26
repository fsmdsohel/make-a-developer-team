import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AsideCart from "../AsideCart/AsideCart";
import SingleCart from "../SingleCart/SingleCart";
import "./Developer.css";


const Developer = () => {
  
  const [data, setData] = useState([]);
  const [carts, setCart] = useState([]);

  const url = "./fakeData.JSON";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dev) => setData(dev));
  }, []);


  
  const handleCartData = (selectectCart) => {
    for(const singleCart of carts){
      if(singleCart._id === selectectCart._id){
        toast.warn("This person already added choice list ");
        return;
      }
    }
      const data = [...carts, selectectCart];
      setCart(data);
  };

  return (
   <>
   <ToastContainer 
   autoClose={3000}
   position="top-center"
   />
    <div className="developer-container">
      <div className="dev-container">
        {data.map((developer) => (
          <SingleCart
            key={developer._id}
            data={developer}
            handleCartData={handleCartData}
          ></SingleCart>
        ))}
      </div>
      <AsideCart carts={carts}></AsideCart>
    </div>
   </>
  );
};

export default Developer;

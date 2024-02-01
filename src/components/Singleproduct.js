import React, { useEffect, useState } from "react";
import Getsingle from "../api/Getsingle ";
import { Link, useParams } from "react-router-dom";

export default function Singleproduct() {
  const [car, setCar] = useState({});
  const params = useParams();
  const getproducts = async () => {
    const apiproducts = await Getsingle(params.id);
    setCar(apiproducts);
  };
  useEffect(() => {
    getproducts();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
     { car && <div className="car">
        <img
          src={car.image}
          className="img-side"
          alt="car"
        />
        <div>
          <div className="car-body">
            <h2>{car.name}</h2>
            <h4>
            {car.description}
            </h4>
            <h5>&#8377; {car.price}.00/-</h5>
           <Link to="/Testdrive"> <button type="test" class="btn btn-outline-success">Test Drive</button>  </Link>      
          </div>
        </div>
      </div>}
    </>
  );
}

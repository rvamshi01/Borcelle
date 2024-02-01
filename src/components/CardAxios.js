import { useEffect, useState } from "react";
import Getproductsapi from "../api/Getproducts";
import { Link } from "react-router-dom";
// import axios from 'axios'

export default function CardAxios() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const getproducts = async () => {
    const apiproducts = await Getproductsapi();
    setProducts(apiproducts);
  };
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="search brand"
        className="setside mt-3"
        onChange={(ev) => setSearch(ev.target.value)}
        value={search}
      />
      <div className="container mt-4">
        <h2>Cars Details</h2>
        <div className="row">
          {products
            .filter((productdetails) =>
              productdetails.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <div className="col-md-4 mb-4" key={product._id}>
                <div className="card">
                  <Link to={`/card/${product._id}`}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      width="150px"
                      height="350px"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{product.name}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

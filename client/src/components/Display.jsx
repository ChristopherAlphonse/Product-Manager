import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Display(props) {
  const { productList, setProductList } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteFilter = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/products/${idFromBelow}`)
      .then((res) => {
        console.log(res.data);
        setProductList(
          productList.filter((product, index) => product._id !== idFromBelow)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>All Products</header>
      {productList.map((product, index) => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`} className="products">
            {product.title}
          </Link>
          <br />
          <Link to={`/product/edit/${product._id}`} className="edit">
            Edit
          </Link>
          <button onClick={() => deleteFilter(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Display;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function DisplayOne(props) {
  const { id } = useParams();
  const [displayOne, setDisplayOne] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setDisplayOne(res.data);
      })
      .catch((err) => {
        console.log(`Something went wrong check deleteFilter ${err}`);
      });
  }, [id]);

  const deleteFilter = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(`Something went wrong check deleteFilter ${err}`);
      });
  };

  return (
    <div className="displayId">
      <h2>{displayOne.title}</h2>
      <br />
      <p>Price: ${displayOne.price}</p>
      <br />
      <p>Description: {displayOne.description}</p>
      <button className="deleteButton" onClick={deleteFilter}>
        Delete
      </button>
      <br />
      <Link to={"/"}>Return Home </Link>
    </div>
  );
}

export default DisplayOne;

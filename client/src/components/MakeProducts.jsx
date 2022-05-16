import { useState, useEffect } from "react";
import axios from "axios";

const MakeProducts = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setDescription("");
    setPrice("");
    setTitle("");
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(`Axios error occurred in the MakeProducts file${err}`);
      });
  };

  return (
    <main>
      <header>Product Manager</header>
      <form onSubmit={submitHandler}>
        <section>
          <label htmlFor="product"> Product </label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </section>

        <section>
          <label htmlFor="price"> Price</label>
          <input
            type="number"
            value={price}
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </section>

        <section>
          <label htmlFor="description">Description </label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </section>
        <button type="submit" onSubmit={submitHandler}>
          Update
        </button>
      </form>
    </main>
  );
};

export default MakeProducts;

import { useState, useEffect } from "react";
import axios from "axios";

const MakeProducts = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <header>Product Manager</header>
      <form>
        <section>
          <label htmlFor="title"> Title </label>
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
          <label htmlFor="price"> Price </label>
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
        <button type="submit"> Update </button>
      </form>
    </main>
  );
};

export default MakeProducts;

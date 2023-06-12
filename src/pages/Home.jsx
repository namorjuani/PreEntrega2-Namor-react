import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { ProductsData } from "../json/Products";

const Home = () => {
  return (
    <div>
      <ItemDetailContainer productsData={ProductsData} />
    </div>
  );
};

export default Home;
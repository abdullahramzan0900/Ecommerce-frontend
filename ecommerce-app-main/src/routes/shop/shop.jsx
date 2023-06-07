import useFetcher from "../../fetcher";
import "./shop.css";
import { requests } from "../../requests";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import CategoryCard from "../../components/category-card/category-card";
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";

const Shop = () => {
  const [typing, setTyping] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [allProductsProducts] = useFetcher(requests.allProducts);

  const allProducts = allProductsProducts.map((product) => {
    return { ...product, quantity: 1 };
  });

  const handleTyping = (e) => {
    const typingValue = e.target.value;
    setTyping(typingValue);
  };

  useEffect(() => {
    const filteredProductsArr = allProducts.filter((product) => {
      const productName = product.title.toLowerCase();
      return productName.includes(typing);
    });
    setFilteredProducts(filteredProductsArr);
  }, [typing, allProducts]);

  return (
    <Fragment>
      <Navbar handleTyping={handleTyping} />
      <div className="all-container">
        <h1 className="shop-title">Find something you love </h1>
        <CategoryCard products={filteredProducts} />
      </div>
      <Footer />
    </Fragment>
  );
};
export default Shop;

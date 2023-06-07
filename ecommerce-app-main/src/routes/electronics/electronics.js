import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import CategoryCard from "../../components/category-card/category-card";
import Navbar from "../../components/navbar/navbar";
import { Fragment } from "react";
import "./electronics.css";
import Footer from "../../components/footer/footer";

const Electronics = () => {
  const [electronicsProducts] = useFetcher(requests.electronics);

  const electronics = electronicsProducts.map((product) => {
    return { ...product, quantity: 1 };
  });

  return (
    <Fragment>
      <Navbar />
      <h1 className="electronics-title">Find Electronic Items</h1>
      <CategoryCard products={electronics} />
      <Footer />
    </Fragment>
  );
};
export default Electronics;

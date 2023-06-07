import "./womensClothing.css";
import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import CategoryCard from "../../components/category-card/category-card";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const WomensClothing = () => {
  const [womenclothingProducts] = useFetcher(requests.womenclothing);

  const womenclothing = womenclothingProducts.map((product) => {
    return { ...product, quantity: 1 };
  });

  return (
    <Fragment>
      <Navbar />
      <h1 className="womens-title">Find Amazing Items for Her</h1>
      <CategoryCard products={womenclothing} />
      <Footer />
    </Fragment>
  );
};
export default WomensClothing;

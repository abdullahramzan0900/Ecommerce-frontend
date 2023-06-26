import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import CategoryCard from "../../components/category-card/category-card";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Jewelery = () => {
  const [jeweleryProduct] = useFetcher(requests.jewelery);

  const jewelery = jeweleryProduct.map((product) => {
    return { ...product, quantity: 1 };
  });

  return (
    <Fragment>
      <Navbar />
     
      <CategoryCard products={jewelery} />

    </Fragment>
  );
};
export default Jewelery;

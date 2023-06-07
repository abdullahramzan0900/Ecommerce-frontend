import "./home.css";

import CategoriesBanner from "../../components/categories-banner/categories-banner";
import InformationTab from "../../components/information/information";
import Footer from "../../components/footer/footer";
import useFetcher from "../../fetcher";
import { Fragment } from "react";
import { requests } from "../../requests";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  const [alltopProducts] = useFetcher(requests.topProducts);

  const topProducts = alltopProducts.map((product) => {
    return { ...product, quantity: 1 };
  });
  return (
    <Fragment>
      <Navbar />
      <CategoriesBanner categories={topProducts} />
      <InformationTab />
      <Footer />
    </Fragment>
  );
};
export default Home;

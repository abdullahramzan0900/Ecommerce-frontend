  import "./mensClothing.css";
  import useFetcher from "../../fetcher";
  import { requests } from "../../requests";
  import { Fragment } from "react";
  import Navbar from "../../components/navbar/navbar";
  import CategoryCard from "../../components/category-card/category-card";
  import Footer from "../../components/footer/footer";

  const MensClothing = () => {
    const [mensClothingProduct] = useFetcher(requests.menclothing);
    console.log(mensClothingProduct,"aaaaa")
    

    const mensClothing = mensClothingProduct.map((product) => {
      return { ...product, quantity: 1 };
    });
    return (
      <Fragment>
        <Navbar />
        {/* <h1 className="mens-title">Find Amazing Products For Men</h1> */}
        <CategoryCard products={mensClothing} />

      </Fragment>
    );
  };
  export default MensClothing;

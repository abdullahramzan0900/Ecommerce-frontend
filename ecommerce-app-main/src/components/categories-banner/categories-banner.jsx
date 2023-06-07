import "./categories-banner.css";
import Spinner from "../spinner/spinner";

import CategoryCard from "../category-card/category-card";

const CategoriesBanner = ({ categories }) => {
  const categoryTypes = categories;

  if (categoryTypes.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="categories-container">
      <h1 className="categories-title">Our Top Products</h1>
      <CategoryCard products={categoryTypes} />
    </div>
  );
};
export default CategoriesBanner;

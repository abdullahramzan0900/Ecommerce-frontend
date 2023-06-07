import { Link } from "react-router-dom";
import "./categories.css";

const CategoriesBar = ({ categories }) => {
  const categoryNames = categories;

  return (
    <div className="category-names-container">
      {categoryNames.map((categoryName, i) => {
        return (
          <Link
            to={`/${categoryName.replace(/\s+/g, "")}`}
            className="category-name"
            key={i}
          >
            {categoryName}
          </Link>
        );
      })}
    </div>
  );
};
export default CategoriesBar;

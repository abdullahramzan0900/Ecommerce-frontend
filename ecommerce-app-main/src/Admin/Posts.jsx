import { Fragment, useState } from "react";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";
import "./Index.css";
import Button from "@mui/material/Button";

const Posts = ({ data, api, setdata }) => {
  const [open, setOpen] = useState(false); // for model
  const [show, setShow] = useState(false); // for edit model
  const [id, setId] = useState();

  const allProducts = data;

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product!");
      }

      console.log("Product deleted successfully!");

      // Update the data prop with the new data
      const updatedData = data.filter((product) => product._id !== id);
      setdata(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <>
        <div className="add-button">
          <Button onClick={() => setOpen(!open)}>Add Product</Button>
        </div>
        <div className="products-container">
          {allProducts?.map((product) => (
            <div className="product-container" key={product._id}>
              <img src={product.Image} alt="" className="product-image" />
              <span className="product-title"></span>
              <div className="product-info">
                <span className="product-price">$ {product.Price}</span>
              </div>
              <Button onClick={() => deleteProduct(product._id)}>
                Delete
              </Button>
              <Button
                onClick={() => {
                  setId(product._id);
                  setShow(true);
                }}
              >
                Edit
              </Button>
            </div>
          ))}
        </div>
        {show && <EditProduct show={show} setshow={setShow} api={api} id={id} />}
        <div>
          <AddProducts open={open} api={api} setopen={setOpen} />
        </div>
      </>
    </Fragment>
  );
};

export default Posts;

// import "./category-card.css";

import { Fragment, useState } from "react";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";
import "./Index.css";
import Button from "@mui/material/Button";

const Posts = ({ products, api }) => {
  const [open, Setopen] = useState(false); // for model
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [Date, Setdate] = useState(null);
  const [show,setshow]=useState(false)// for editmodel
  const [imageurl, setImageUrl] = useState(null);
  const [id,setid]=useState();


  const allProducts = products;

  const DelProducts = async (id) => {

    try {
      const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
      
      });

      if (!response.ok) {
        throw new Error("Failed to upload the product information!");
      }

      const data = await response.json();
    //   SetAllProducts(data);
      // setImageUrl(data);

      console.log("Product information uploaded successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  const EditProducts=async (id)=>{


    const formData = new FormData();
    formData.append("name", name);
    formData.append("Price", price);
    formData.append("Description", description);
    formData.append("TestImage", image);
    formData.append("Date", Date);
    try {
        const response = await fetch(`${api}/${id}`, {
          method: "Put",
          body:formData

        });
  
        if (!response.ok) {
          throw new Error("Failed to upload the product information!");
        }
  
        const data = await response.json();
      //   SetAllProducts(data);
        // setImageUrl(data);
  
        console.log("Product information uploaded successfully!");
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <Fragment>
      <>
        <div className="add-button">
          <Button
            onClick={() => {
              Setopen(!open);
            }}
            style={
              {
              
              }
            }
          >
            Add Product
          </Button>
        </div>
        <div className="products-container">
          {allProducts?.map((product, i) => {
            return (
              <div className="product-container" key={i} id={product._id}>
                <img src={product.Image} alt="" className="product-image" />
                <span className="product-title"></span>
                <div className="product-info">
                  {/* <span className="product-category">{product.category}</span> */}
                  <span className="product-price">$ {product.Price}</span>
                </div>
                <Button
                  onClick={() => {
                    DelProducts(product._id);
                  }}
                >
                  Delete
                </Button>
                <Button onClick={()=>{
                     setid(product._id);
                    setshow(!show)
                }}>Edit</Button>
                
              </div>
            );
          })}
        </div>
          {
              show && <EditProduct show={show} setshow={setshow} api={api} Id={id}/>

          }
        <div>
          <AddProducts open={open} api={api} setopen={Setopen}   product={products} />
                
        </div>



      </>
    </Fragment>
  );
};

export default Posts;

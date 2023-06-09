// import "./category-card.css";

import { Fragment, useState } from "react";
import AddProducts from "./AddProducts";


const Posts = ({ products,api }) => {
const [open,Setopen]=useState(false);// for model
  const allProducts = products;
  if (allProducts?.length === 0) {
    return (
      <div className="no-products">
        <h1>No products Found</h1>
      </div>
    );
  }
  return (
    <Fragment>
        <>
        <div>
<button onClick={()=>{
    Setopen(!open)
}} style={{
    display:'flex',
 justifyContent:'end'
}}>
    Add Product
</button>
        </div>
      <div className="products-container">
        {allProducts?.map((product, i) => {
            return (
            <div className="product-container" key={i} id={product._id}>
              <img src={product.image} alt="" className="product-image" />
              <span className="product-title">
              
              </span>
              <div className="product-info">
                {/* <span className="product-category">{product.category}</span> */}
                <span className="product-price">$ {product.Price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div>

        {
         open && <AddProducts api={api}/>
        }
      </div>
        </>

    </Fragment>
  );
    }

export default Posts;
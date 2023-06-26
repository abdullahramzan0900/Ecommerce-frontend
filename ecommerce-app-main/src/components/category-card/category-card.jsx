import "./category-card.css";
import CartButton from "../cartbutton/cartbutton";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/cart/cartAction";
import { makeCartItems } from "../../store/cart/cartSelector";
import { createSelector } from "reselect";
import { Fragment, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Spin,
  Typography,
  Select,
} from "antd";


const cartItemsStateSelector = createSelector(makeCartItems, (cartItems) => ({
  cartItems,
}));

const cartItemsActionDispatcher = (dispatch) => ({
  setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
});

const CategoryCard = ({ products }) => {
  const { cartItems } = useSelector(cartItemsStateSelector);
  const { setCartItems } = cartItemsActionDispatcher(useDispatch());

  const [state,setstate]=useState([])
  // useEffect(()=>{
  //   setstate(allProducts);
  // },[state])

  const addCartItem = (cartItems, productToAdd) => {
    console.log(cartItems);
    //  If cart contains product to add
    const existingCartItem = cartItems.find(
      (item) => item._id === productToAdd._id
    );

    //  if found increase quantity
    if (existingCartItem) {
      return cartItems.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    //  if not found return new array with cart item
    return [...cartItems, productToAdd];
  };

  const increaseCartItem = (newItemToAdd) => {
    setCartItems(addCartItem(cartItems, newItemToAdd));
  };

  const addingToCart = (e) => {
    console.log(e.target.parentElement,"aa")
    const productId = e.target.parentElement.getAttribute("id");
    
    const [added] = products.filter((product) => {
      if (product._id === productId) {
        return product;
      }
    });
    increaseCartItem(added);
  };

  var allProducts = products;

  if (allProducts.length === 0) {
    return (
      <div className="no-products">
        <h1>No products Found</h1>
      </div>
    );
  }

function setSortOrder(value){
  console.log("sss")
  if(value==="lowHigh")
  { console.log("aaa");
  allProducts= allProducts.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
  setstate(allProducts);
  console.log(allProducts,"allproducts")

  }
  else if(value==="highLow")
  {
    allProducts= allProducts.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
    setstate(allProducts);  
    console.log(allProducts,"allproducts")
  }
}

  return (
    <Fragment>
      <div className="productsContainer">
        <div>
          <Typography.Text>View Items Sorted By: </Typography.Text>
          <Select
            onChange={(value) => {
              setSortOrder(value);
            }}
            defaultValue={"aa"}
            options={[

              {
                label: "Price Low to High",
                value: "lowHigh",
              },
              {
                label: "Price High to Low",
                value: "highLow",
              },
            ]}
          ></Select>
        </div>

        <List >
          <div className="main-grid">
            {allProducts?.map((item, index) => {
              return (
                <div id={item._id}>
                       <CartButton clicked={addingToCart} /> <Badge.Ribbon
                    className="itemCardBadge"
                    text={`${item.Price/item.Price + (item.Price * 20) / 100  }% Off`}
                    color="pink"
                    id={item._id}
                  > 
                    <Card
                      className="itemCard"
                      title={item.title}
                      key={index}
                      id={item._id}
                      cover={
                        <Image className="itemCardImage" src={item.Image} />
                      }
                      actions={[<Rate allowHalf disabled value={"4"} />]}
                    >
                      <Card.Meta
                        title={
                          <Typography.Paragraph>
                            Price: ${item.Price}{" "}
                            <Typography.Text delete type="danger">
                              $
                              {parseFloat(
                                item.Price + (item.Price * 20) / 100
                              ).toFixed(2)}
                            </Typography.Text>
                          </Typography.Paragraph>
                        }
                        description={
                          <Typography.Paragraph
                            style={{
                              paddingBottom: '70px',
                            }}
                            ellipsis={{
                              rows: 2,
                              expandable: true,
                              symbol: "more",
                            }}
                            >
                            {item?.Description}
                          </Typography.Paragraph>
                        }
                      ></Card.Meta>
     
                    </Card>
                  </Badge.Ribbon>
                </div>
              );
            })}
          </div>
          {/* // dataSource={getSortedItems()} */}
        </List>
      </div>
    </Fragment>
  );
};

export default CategoryCard;

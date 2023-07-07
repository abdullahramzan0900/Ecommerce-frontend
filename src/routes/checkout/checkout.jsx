import { Fragment, useState,useEffect  } from "react";
import Navbar from "../../components/navbar/navbar";
import { createSelector } from "reselect";
import { makeCartItems } from "../../store/cart/cartSelector";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../../store/cart/cartAction";
import { useAuth0 } from "@auth0/auth0-react";
import { TextField } from "@material-ui/core";
import  './checkout.css'

const cartItemsStateSelector = createSelector(makeCartItems, (cartItems) => ({
  cartItems,
}));

const Checkout = () => {
  const [localData, setLocalData] = useState("");
  const { cartItems } = useSelector(cartItemsStateSelector);



  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setLocalData(name);
  }, []);

  const handleSubmit = async () => {
    const data = {
      email: email,
      date: new Date().toISOString(),
      status: "pending",
      address: address,
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to upload the product information!");
      }

      const responseData = await response.json();
      console.log(responseData);
      // Perform any necessary actions with the response data

      console.log("Product information uploaded successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className="checkout-page-container">
        <div className="checkout-content">
          <div className="form">
            <form className="customer-info">
              <h1>Customer Info</h1>
        <div className="text-div">

                <TextField type="text" id="first-name" required placeholder="First Name" />
             

      
                <TextField
                   placeholder="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
    
    
                <TextField
                  type="text"
                  id="address"
                  required
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
        <button className="pay-button" onClick={handleSubmit}>
          Complete Checkout
        </button>
            
        </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;

import "./checkout.css";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from "react";

const Checkout = () => {
  // const { user } = useAuth0();
  const [localdata,Setlocaldata]=useState();
  useEffect(() => {
    var x = localStorage.getItem("name");
    Setlocaldata(x);
  }, []);
  // const email = user.email;
  return (
    <Fragment>
      <Navbar />
      <div className="checkout-page-container">
        <div className="checkout-content">
          <div className="form">
            <form className=" customer-info">
              <h1>Customer Info</h1>
              <label for="first-name">
                First name
                <input
                  type="text"
                  id="first-name"
                  required
                  placeholder="First Name"
                />
              </label>
              <label for="last-name">
                Last name
                <input
                  type="text"
                  id="last-name"
                  required
                  placeholder="First Name"
                />
              </label>
              <label for="email">
                Email
                <input  defaultValue={localdata} type="email"  required />
              </label>
              <label for="address">
                Address
                <input
                  type="text"
                  id="address"
                  required
                  placeholder="Your Address"
                />
              </label>
              <label for="city">
                Town/City
                <input type="text" placeholder="Enter your town/city" />
              </label>

              <label for="zipcode">
                Zip/Postal
                <input
                  type="number"
                  placeholder="00000"
                  required
                  max={5}
                  minLength={5}
                />
              </label>
            </form>
          </div>

        </div>
        <button className="pay-button">Complete Checkout</button>
      </div>
 
    </Fragment>
  );
};
export default Checkout;

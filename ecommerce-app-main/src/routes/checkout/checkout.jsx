import "./checkout.css";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useAuth0 } from "@auth0/auth0-react";

const Checkout = () => {
  // const { user } = useAuth0();
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
                <input type="email" placeholder="abdullah" required />
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
          <div className="form">
            <form className=" payment-info">
              <h1>Payment Info</h1>
              <label for="card-holder">
                Name on Card
                <input
                  type="text"
                  placeholder="Name on card"
                  required
                  id="card-holder"
                />
              </label>
              <label for="card-number">
                Debit Card Number
                <input
                  type="number"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  required
                  max={19}
                  minLength={19}
                  id="card-number"
                />
              </label>
              <label for="cvc">
                CVC
                <input
                  type="number"
                  placeholder="CVC"
                  max={3}
                  minLength={3}
                  required
                  id="cvc"
                />
              </label>
              <label for="card-month">
                Month
                <input type="month" required />
              </label>
            </form>
          </div>
        </div>
        <button className="pay-button">Complete Checkout and Pay</button>
      </div>
 
    </Fragment>
  );
};
export default Checkout;

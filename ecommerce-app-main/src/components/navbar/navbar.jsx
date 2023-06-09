import "./navbar.css";
import Searchbar from "../searchbar/searchbar";

import { Link, Outlet } from "react-router-dom";

import CategoriesBar from "../categoriesbar/categoriesbar";
import { Fragment } from "react";
import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ handleTyping }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user } = useAuth0();

  const [categories] = useFetcher(requests.categories);
  const onClickFunction = () => {
    loginWithRedirect();
  };

  const logoutClick = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <Fragment>
      <div className="navbar-container ">
        <Link to={"/"} className="link">
          <div className="logo-container container">
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/900/8329618900_4b72b071-24ce-4e77-b991-2dfe32b86fb5.png?cb=1683377514"
              className="logo"
              alt=""
            />
          </div>
        </Link>
        <Link to={"/shop"} className="Link">
          <Searchbar handleTyping={handleTyping} />
        </Link>
        {user && (
          <div className="user-image-container">
            <img src={user.picture} alt="" className="user-image" />
          </div>
        )}
        <Link to={"/shop"} className="link">
          <div className="shop-container container">Shop </div>
        </Link>

        <div className="signin-container container">
          {!user && (
            <span className="sign-in" onClick={onClickFunction}>
              Sign in
            </span>
          )}
          {user && (
            <span className="sign-in" onClick={logoutClick}>
              Log out
            </span>
          )}
        </div>
        <Link to={"/my-cart"} className="link">
          <div className="cart-container container" user={user}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className="cart-logo"
            >
              <path d="M21 10a1 1 0 00-1-1h-3c.059-.682.287-4.44-1.611-6.555A4.363 4.363 0 0012 1a4.363 4.363 0 00-3.394 1.445C6.709 4.56 6.937 8.318 7 9H4a1 1 0 00-1 1c0 .752.008 7.413 1.12 9.478 1.416 2.622 5.92 3.474 7.88 3.474 2.12 0 6.61-1.024 7.888-3.492C20.992 17.326 21 10.74 21 10zm-5.307 7l.283-1.283.159-.717h2.651a25.487 25.487 0 01-.251 2h-2.842zM5.457 17c-.1-.586-.183-1.27-.248-2h2.656l.159.717L8.307 17h-2.85zm4.519-1.717L9.914 15h4.173l-.063.283c-.13.585-.258 1.162-.378 1.717h-3.292c-.119-.554-.247-1.13-.377-1.717h-.001zM9.479 13a39.761 39.761 0 01-.376-2H14.9c-.087.564-.22 1.256-.376 2H9.479zm9.446 0h-2.362c.152-.748.278-1.43.354-2h2.075a61.73 61.73 0 01-.067 2zM10.1 3.78A2.412 2.412 0 0112 3a2.412 2.412 0 011.9.78c1.205 1.338 1.2 4.145 1.1 5.113a.928.928 0 00.01.106H8.984a.923.923 0 00.01-.106c-.101-.968-.102-3.775 1.106-5.114zM7.083 11c.076.57.2 1.252.354 2H5.073a61.441 61.441 0 01-.066-2h2.076zm-.844 8h2.483c.108.562.191 1.061.237 1.457A6.514 6.514 0 016.239 19zm4.756 1.885A13.506 13.506 0 0010.756 19h2.489c-.123.62-.203 1.25-.239 1.881-.334.044-.67.068-1.006.071a8.66 8.66 0 01-1.005-.067zm4.049-.445c.046-.394.129-.886.235-1.44h2.489a6.655 6.655 0 01-2.724 1.44z"></path>
            </svg>
          </div>
        </Link>
        <Outlet />
      </div>
      <CategoriesBar categories={categories} />
    </Fragment>
  );
};
export default Navbar;
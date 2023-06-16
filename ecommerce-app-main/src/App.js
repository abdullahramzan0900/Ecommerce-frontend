import "./App.css";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Electronics from "./routes/electronics/electronics";
import Jewelery from "./routes/jewelery/jewelery";
import MensClothing from "./routes/mens-clothing/mensClothing";
import WomensClothing from "./routes/womens-clothing/womensClothing";
import Checkout from "./routes/checkout/checkout";
import Admin from "./Admin/Admin";

import Cart from "./routes/cart/cart.jsx";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      // path: "shop",
      // element: <Shop />,
    },
    {
      path: "electronics",
      element: <Electronics />,
    },
    {
      path: "jewelery",
      element: <Jewelery />,
    },
    {
      path: "men'sclothing",
      element: <MensClothing />,
    },
    {
      path: "women'sclothing",
      element: <WomensClothing />,
    },

    {
      path: "my-cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    
    },
    {
      path:'Admin',
      element:<Admin/>
    },
    {
      path:"Login",
      element:<Login/>
    },
    {
      path:'Signup',
      element:<Signup/>
      
    },
    {
      path:'ForgetPassword',
      element:<ForgetPassword/>
      
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate,Outlet} from "react-router-dom";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import Electronics from "./routes/electronics/electronics";
import Jewelery from "./routes/jewelery/jewelery";
import MensClothing from "./routes/mens-clothing/mensClothing";
import WomensClothing from "./routes/womens-clothing/womensClothing";
import Checkout from "./routes/checkout/checkout";
import Admin from "./Admin/Admin";
import Order from "./components/Orders/Orders";
import Cart from "./routes/cart/cart.jsx";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

import { useLocation, useNavigate } from "react-router-dom";

// Sample authenticated state


// Protected route component
const PrivateRoute = () => {
  
  let isAuthenticated = false; 
  let  x=localStorage.getItem('name');
  let y=localStorage.getItem('admin');
  if ( y)
  {
    isAuthenticated=true
  } 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
const PrivateRoutecust = () => {
  
  let isAuthenticated = false; 
  let  x=localStorage.getItem('name');
  if(x)
  {
    isAuthenticated=true
  } 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
const PrivateRouteauthentication = () => {
  
  let isAuthenticated = false; 
  let  x=localStorage.getItem('name');
  let y=x.localStorage.getItem('admin')
  if(x || y)
  {
    isAuthenticated=true
  } 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}



function CustomRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
  };

  return (
    <div>
      <Routes location={location} onUpdate={() => {}}>
     
      <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop />} />
        <Route exact path='/electronics' element={<PrivateRoutecust/>}>
      <Route exact path='/electronics' element={<Electronics/>}/>
       </Route>
       <Route exact path='/jewelery' element={<PrivateRoutecust/>}>
      <Route exact path='/jewelery' element={<Jewelery/>}/>
       </Route>
       
        <Route exact path='/mens-clothing' element={<PrivateRoutecust/>}>
      <Route exact path='/mens-clothing' element={<MensClothing/>}/>
       </Route>
       <Route exact path='/womens-clothing' element={<PrivateRoutecust/>}>
      <Route exact path='/womens-clothing' element={<WomensClothing/>}/>
       </Route>
       <Route exact path='/checkout' element={<PrivateRoutecust/>}>
      <Route exact path='/checkout' element={<Checkout/>}/>
       </Route>
       <Route exact path='/admin' element={<PrivateRoute/>}>
      <Route exact path='/admin' element={<Admin/>}/>
       </Route>
       <Route exact path='/cart' element={<PrivateRoutecust/>}>
      <Route exact path='/cart' element={<Cart/>}/>
       </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route exact path='/orders' element={<PrivateRoute/>}>
      <Route exact path='/orders' element={<Order/>}/>
</Route>
      </Routes>  
    </div>
    
  );
}

function App() {
  return (

      <CustomRouter />
    
  );
}

export default App;

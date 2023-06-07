import "./cartbutton.css";

const CartButton = ({ clicked }) => {
  return (
    <button className="cart-adding-button" onClick={clicked}>
      Add To Cart
    </button>
  );
};
export default CartButton;

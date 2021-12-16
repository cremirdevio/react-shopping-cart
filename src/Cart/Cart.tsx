import CartItem from "../CartItem/CartItem";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "../App.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {!cartItems.length ? <p>No Items in Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;

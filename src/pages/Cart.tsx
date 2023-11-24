import MyNavBar from '../components/MyNavBar'
import CartShowCase from '../components/CartShowCase';
import CartMediaCard from '../components/CartMediaCard';

const Cart = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <CartShowCase MediaCard={CartMediaCard}></CartShowCase>
    </>
  );
};

export default Cart;

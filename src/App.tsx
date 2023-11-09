import productsList from './assets/productsList';
import { useState } from 'react';
import AppBarMy from './components/NavBar'
import ShowCase from './components/ShowCase';
// import { Product } from './assets/productsList';

const App = () => {
  const [products, setProducts] = useState(productsList);

  return (
    <>
      <AppBarMy></AppBarMy>
      <ShowCase products={products} setProducts={setProducts}></ShowCase>
    </>
  );
};

export default App;

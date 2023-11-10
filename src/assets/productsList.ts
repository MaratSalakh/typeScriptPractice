export type Product = {
  count: number,
  price: number,
  img: string,
  name: string,
};

const productsList: Product[] = [
  { count: 10, price: 500, img: './src/assets/1.png', name: 'Car One', },
  { count: 223, price: 500, img: './src/assets/1.png', name: 'Car Two', },
  { count: 1424, price: 1500, img: './src/assets/1.png', name: 'Car Three' },
  { count: 12314, price: 120, img: './src/assets/1.png', name: 'Car Four' },
  { count: 123, price: 900, img: './src/assets/1.png', name: 'Car Five' },
  { count: 23, price: 3432, img: './src/assets/1.png', name: 'Car Six' },
  { count: 234, price: 2300, img: './src/assets/1.png', name: 'Car Seven' },
  { count: 234, price: 1200, img: './src/assets/1.png', name: 'Car Eight' },
  { count: 234, price: 1000, img: './src/assets/1.png', name: 'Car Nine' },
  { count: 234, price: 900, img: './src/assets/1.png', name: 'Car Ten' },
  { count: 234, price: 800, img: './src/assets/1.png', name: 'Car Eleven' },
  { count: 235, price: 700, img: './src/assets/1.png', name: 'Car Twelve' },
  { count: 3446, price: 600, img: './src/assets/1.png', name: 'Car Thirteen' },
  { count: 345, price: 400, img: './src/assets/1.png', name: 'Car Fourteen' },
];

export default productsList;

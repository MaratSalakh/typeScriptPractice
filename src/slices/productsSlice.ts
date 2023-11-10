import { createSlice } from "@reduxjs/toolkit";

export type Product = {
  id: string,
  count: number,
  price: number,
  img: string,
  name: string,
};

const initialState = {
  entities: {
    car1: { id: 'car1', count: 0, price: 500, img: './src/assets/1.png', name: 'Car One', },
    car2: { id: 'car2', count: 0, price: 500, img: './src/assets/1.png', name: 'Car Two', },
    car3: { id: 'car3', count: 0, price: 1500, img: './src/assets/1.png', name: 'Car Three' },
    car4: { id: 'car4', count: 0, price: 120, img: './src/assets/1.png', name: 'Car Four' },
    car5: { id: 'car5', count: 0, price: 900, img: './src/assets/1.png', name: 'Car Five' },
    car6: { id: 'car6', count: 0, price: 3432, img: './src/assets/1.png', name: 'Car Six' },
    car7: { id: 'car7', count: 0, price: 2300, img: './src/assets/1.png', name: 'Car Seven' },
    car8: { id: 'car8', count: 0, price: 1200, img: './src/assets/1.png', name: 'Car Eight' },
    car9: { id: 'car9', count: 0, price: 1000, img: './src/assets/1.png', name: 'Car Nine' },
    car10: { id: 'car10', count: 0, price: 900, img: './src/assets/1.png', name: 'Car Ten' },
    car11: { id: 'car11', count: 0, price: 800, img: './src/assets/1.png', name: 'Car Eleven' },
    car12: { id: 'car12', count: 0, price: 700, img: './src/assets/1.png', name: 'Car Twelve' },
    car13: { id: 'car13', count: 0, price: 600, img: './src/assets/1.png', name: 'Car Thirteen' },
    car14: { id: 'car14', count: 0, price: 400, img: './src/assets/1.png', name: 'Car Fourteen' },
  },
  ids: ['car1', 'car2', 'car3', 'car4', 'car5', 'car6', 'car7', 'car8', 'car9', 'car10', 'car11', 'car12', 'car13', 'car14',],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    countPlus(state, action) {
      const { productId } = action.payload;

      state.entities[productId].count += 1;
    },
    countMinus(state, action) {
      const { productId } = action.payload;

      state.entities[productId].count -= 1;
    },
  }
});

export const { countPlus, countMinus } = productsSlice.actions;
export default productsSlice.reducer;

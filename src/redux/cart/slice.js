import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  },

  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    delFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increase: (state, action) => {
      state.items = state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map(item => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter(item => item.amount !== 0);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  getCartTotal,
  delFromCart,
  increase,
  decrease,
  clearCart,
  addToCart,
} = cartSlice.actions;

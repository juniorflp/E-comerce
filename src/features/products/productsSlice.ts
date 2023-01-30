import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterProducts } from "../../@types/api/filter-products-interface";
import {
  IshooppingCart,
  Product,
  ProductsResponse,
} from "../../@types/api/products-interface";
import api from "../../services/api";

// call from API endpoint
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (filter: FilterProducts, thunkApi) => {
    try {
      const response = await api.get<ProductsResponse>("/products", {
        params: filter,
      });
      return response.data.products;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
  shoppingCart: IshooppingCart[];
  numberOfItems: number;
}

const initialState = {
  loading: false,
  error: null,
  products: [],
  shoppingCart: [],
  numberOfItems: 0,
} as ProductsState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id: number = action.payload;
      const product = state.products.find((item) => item.id === id);

      const alreadyInShoppingCart = state.shoppingCart.find(
        (item) => item.id === id
      );
      //if the item already exists in the cart
      if (alreadyInShoppingCart) {
        state.shoppingCart = state.shoppingCart.map((item) => {
          if (item.id === id) ({ ...item, quantity: item.quantity++ });
          return item;
        });
      } else {
        //add item to cart
        if (!product) return;
        const cartItem: IshooppingCart = {
          ...product,
          quantity: 1,
        };
        state.shoppingCart.push(cartItem);
      }
      state.numberOfItems = state.shoppingCart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    },

    removeFromCart(state, action) {
      const id: number = action.payload;
      const alreadyInShoppingCart = state.shoppingCart.find(
        (item) => item.id === id
      );
      //if the item already exists in the cart
      if (alreadyInShoppingCart!.quantity > 1) {
        state.shoppingCart = state.shoppingCart.map((item) => {
          if (item.id === id) ({ ...item, quantity: item.quantity-- });
          return item;
        });
      } else {
        //remove item to cart
        state.shoppingCart = state.shoppingCart.filter(
          (item) => item.id !== id
        );
      }
      state.numberOfItems = state.shoppingCart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    },
    removeAllProductsFromCart(state, action) {
      const id: number = action.payload;
      state.shoppingCart = state.shoppingCart.filter((item) => {
        return item.id !== id;
      });

      state.numberOfItems = state.shoppingCart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    },
  },

  // reducer for async operations
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
export const { addToCart, removeFromCart, removeAllProductsFromCart } =
  productsSlice.actions;

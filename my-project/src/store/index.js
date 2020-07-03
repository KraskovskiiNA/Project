import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    putProducts: (state, products) => {
      state.products = products;
    },
    setCart: (state, product) => {
      if (state.cart.length) {
        let isProduct = false;
        state.cart.forEach((item) => {
          if (item.id === product.id) {
            isProduct = true;
            item.quantity += 1;
          }
        });
        if (!isProduct) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    deleteProduct: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    getProducts({ commit }, url) {
      return axios.get(url, {
        // json-server --watch db.json
        method: 'GET',

      })
        .then((products) => {
          commit('putProducts', products.data);
          return products;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    addCart({ commit }, product) {
      commit('setCart', product);
    },
    deleteFromCart({ commit }, index) {
      commit('deleteProduct', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export const addToCardReducer = (state, { payload }) => {
  if (Array.isArray(payload)) {
    const updatedShop = [...state.shop];
    payload.forEach((newProduct) => {
      const isProductInShop = updatedShop.some(
        (existingProduct) => existingProduct.id === newProduct.id
      );
      if (!isProductInShop) {
        updatedShop.push(newProduct);
      }
    });

    const products = {
      ...state,
      shop: updatedShop,
    };

    return products;
  } else {
    const product = state.allProducts.find((e) => e.id === payload);
    

    if (product) {
      const shopProductsFromStorage = JSON.parse(
        localStorage.getItem("shop") || "[]"
      );

      const isProductInShop = shopProductsFromStorage.some(
        (e) => e.id === payload
      );

      if (!isProductInShop) {
        const updatedShop = [...shopProductsFromStorage, product];
        localStorage.setItem("shop", JSON.stringify(updatedShop));
        return { ...state, shop: state.shop.concat(product) };
      }
    }
  }
};

export const deleteReducer = (state, { payload }) => {
  localStorage.setItem(
    "shop",
    JSON.stringify(state.shop.filter((e) => e.id !== payload))
  );
  return { ...state, shop: state.shop.filter((e) => e.id !== payload) };
};

export const addQuantityReducer = (state, { payload }) => {
  localStorage.setItem(
    "shop",
    JSON.stringify(
      state.shop.map((e) =>
        e.id === payload ? { ...e, quantity: e.quantity + 1 } : e
      )
    )
  );
  return {
    ...state,
    shop: state.shop.map((e) =>
      e.id === payload ? { ...e, quantity: e.quantity + 1 } : e
    ),
  };
};

export const SubtractQuantityReducer = (state, { payload }) => {
  localStorage.setItem(
    "shop",
    JSON.stringify(
      state.shop.map((e) =>
        e.id === payload ? { ...e, quantity: e.quantity - 1 } : e
      )
    )
  );
  return {
    ...state,
    shop: state.shop.map((e) =>
      e.id === payload ? { ...e, quantity: e.quantity - 1 } : e
    ),
  };
};



export const deleteAllReducer = (state, { payload }) => {
  // Remove all items from localStorage and update the state
  localStorage.removeItem("shop");
  return { ...state, shop: [] };
};


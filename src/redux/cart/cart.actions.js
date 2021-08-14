import CartAcionType from "./cart.type";

export const toggleCartHidden = () => ({
    type: CartAcionType.TOGGLE_CART_HIDDEN 
});

export const addItem = item => ({
    type: CartAcionType.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartAcionType.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: CartAcionType.REMOVE_ITEM,
    payload: item
})
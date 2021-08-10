import CartAcionType from "./cart.type";

export const toggleCartHidden = () => ({
    type: CartAcionType.TOGGLE_CART_HIDDEN 
});

export const addItem = item => ({
    type: CartAcionType.ADD_ITEM,
    payload: item
})
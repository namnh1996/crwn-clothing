import { createSelector } from 'reselect';

const selectShop = state => {
    return state.shop
};

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections], 
        //find collection.id matching the url parameter of collection id map
            collections => collections[collectionUrlParam]
    );
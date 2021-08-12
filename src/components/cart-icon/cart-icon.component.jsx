import  React  from  'react';

import {ReactComponent  as  ShoppingIcon} from  '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {selectCartItemsCount} from '../../redux/cart/cart.selecters';

//tu cung cap all state, short code
import { createStructuredSelector } from 'reselect';

import  './cart-icon.styles.scss';

const  CartIcon  = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export  default connect(mapStateToProps, mapDispatchToProps)(CartIcon);  
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'; 
import CartIcon  from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selecters';

import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser
                
                ?
                
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                
                :
                
                (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon/>
        </div>
        {
            hidden 
            ?
            null
            :
            <CartDropdown ></CartDropdown>
        }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

//connect  is  higher  order  component
export default connect(mapStateToProps)(Header);


import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JQcloJP6lqwCqFIR1XFnxHCXb1ybNM60CKbvRHmWnLRVH3piSSIH9AFQTzfKr5Pfzp4gq4sEEiCPXKuCMzjDqgT00dxMF3qei'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

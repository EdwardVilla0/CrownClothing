import React from 'react';
import stripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HoyUEFnGzCsbM6D0Mg3iUHGqsKyNtFbHfgkp6YCOQeePtuVKT2K4sQB2cNT8gJUMTZrbtsOGukqd85XGPklhuEy00oP0Zz6xv'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={'Your total is $${price}'}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
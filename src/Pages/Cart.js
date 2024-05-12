import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../components/ProductCart/ProductCart';
import { Row } from 'react-bootstrap';

const Cart = () => {
    const state = useSelector((state) => state)
    // const cart = useSelector((state) => state.cart)
    return (
        <div>
            <Row gap={2}>
                {
                    state.cart.sort((a, b) => a._id - b._id).map((product, i) => <ProductCart key={i} product={product}></ProductCart>)
                }
            </Row>
        </div>
    );
};

export default Cart;
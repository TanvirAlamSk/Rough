import React, { useEffect, useState } from 'react';
import ProductCart from '../components/ProductCart/ProductCart';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])
    // console.log(state.cart)
    return (
        <div>
            <Row gap={2}>{
                products.map((product) => <ProductCart key={product._id} product={product}></ProductCart>)
            }</Row>
        </div>
    );
};

export default Home;
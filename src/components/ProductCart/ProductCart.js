import React from 'react';
import { Badge, Button, Card, Col, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { model, image, price, keyFeature, quantity } = product
    const location = useLocation()
    const dispatch = useDispatch()
    return (
        <Col xs={4} className='my-2'>
            <Card style={{}}>
                {
                    location.pathname.includes("cart")
                    && <Badge className='' bg="secondary">Quantity: {quantity}</Badge>
                }

                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{model}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {
                        keyFeature.map((feature, i) => <ListGroup.Item key={i} className='text-align-left' xs={{ order: 'last' }}>{feature}</ListGroup.Item>)
                    }
                    {/* <ListGroup.Item className='text-align-left' xs={{ order: 'last' }}> Quantity : {product.quantity}</ListGroup.Item> */}
                </ListGroup>
                <Card.Body >
                    {
                        location.pathname.includes("cart")
                            ?
                            <Button className='w-full'
                                onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: product })}
                            >Remove From Card</Button>
                            :
                            <Button className=' w-full'
                                onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>Add To Card</Button>
                    }


                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCart;
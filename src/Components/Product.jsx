import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {add} from '../Store/CartSlice'
export default function Product() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);


  const addToCart = (product) => {
    dispatch(add(product))
  }

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "20px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });


  

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row" style={{ margin: "0" }}>
        {cards}
      </div>
    </div>
  );
}

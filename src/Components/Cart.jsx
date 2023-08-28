import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../Store/CartSlice";
export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id)=>{
    dispatch(remove(id))
  }
  const cards = products.map((product) => {
    return (
      <div className="col-md-12" style={{ marginBottom: "20px" }}>
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
            <Button variant="danger" onClick={()=>removeToCart(product.id)}>
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div className="row" style={{ margin: "0" }}>
      {cards}
    </div>
  );
}

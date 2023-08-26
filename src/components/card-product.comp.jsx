/* eslint-disable react-refresh/only-export-components */
import { Card } from "react-bootstrap";
import {
  BoxArrowInUpRight,
} from "react-bootstrap-icons";
import PropTypes from "prop-types";

import { memo } from "react";
import { Link } from "react-router-dom";

const CardProductComp = ({ products }) => {
  return (
    <>
      {products
        ? products.map((item) => (
            <div key={item.id}>
              <Card style={{ width: "16rem" }}>
                <div className="row d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    style={{ width: "8rem" }}
                    src={item.photo}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.name.toLowerCase()}</Card.Title>
                  <Card.Text>{item.description.toLowerCase()}</Card.Text>
                  <Card.Text>
                    {item.currency} {item.price}
                  </Card.Text>
                  <Card.Text>stock : {item.stock}</Card.Text>
                  <Link className="mx-1" to={`detail-product/${item.id}`}>
                    <span>detail</span>
                    <BoxArrowInUpRight />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))
        : null}
    </>
  );
};

export default memo(CardProductComp);

CardProductComp.propTypes = {
  products: PropTypes.array,
};

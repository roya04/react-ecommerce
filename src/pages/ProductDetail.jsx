import React from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import "../styles/product-details.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  // console.log(product);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    description,
  } = product;


  const dispatch=useDispatch()
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success("Karta Elave olundu");
  };
  return (
    <div>
      <Helmet title={product.productName}>
        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="6">
                <img style={{ width: "100%" }} src={product.imgUrl} alt="" />
              </Col>

              <Col lg="6">
                <div className="product__details">
                  <h2>{productName}</h2>
                  <div className="product__rating d-flex align-items-center  gap-5 mb-3">
                    <div>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-half-s-line"></i>
                      </span>
                    </div>
                    <p>
                      (<span>{avgRating} </span>.ratings)
                    </p>
                  </div>

                  <h5>{description}</h5>
                  <button className="btn btn-primary mt-3" onClick={addToCart}>Add to Cart</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import Helmet from "../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import Oclock from "../components/UI/Oclock";
const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "chair"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <Helmet title="Ana sehife">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, cumque? Reiciendis, ipsum? Placeat aut quod
                  voluptatibus quia pariatur.
                </p>
                <motion.button whileHover={{ scale: 1.3 }} className="buy__btn">
                  <Link to={"/shop"}>Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="12">
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <h1 className="text-center">TRENDING PRODUCTS</h1>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="trending__products">
        <Container>
<Row>
  <h1 className="text-center">BEST SALES PRODUCTS</h1>
  <ProductList data={bestSalesProducts}/>
</Row>

        </Container>
      </section>
      <Oclock/>
    </Helmet>
  );
};

export default Home;

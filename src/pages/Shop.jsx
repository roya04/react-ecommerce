import React, { useState } from "react";
import Helmet from "../components/helmet/Helmet";
import { Container, Row } from "reactstrap";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filteredValue = e.target.value;

    if (filteredValue === "") {
      setProductsData(products);
    } else {
      const filteredData = products.filter(
        (item) => item.category === filteredValue
      );
      setProductsData(filteredData);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
const searchedProducts=products.filter((item)=>
item.productName.toLowerCase().includes(searchTerm.toLowerCase())
)
setProductsData(searchedProducts);

  };

  const options = [
    { value: "mobile", label: "Mobile" },
    { value: "chair", label: "Chair" },
    { value: "watch", label: "Watch" },
    { value: "wireless", label: "Wireless" },
    { value: "kitab", label: "kitab" },
  ];
  return (
    <Helmet title="Shop sehife">
      <section>
<div>

        <input type="text" onChange={handleSearch} />

</div>
        <select onChange={handleFilter}>
          <option value={""}>Filter By Category</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length !== 0 ? (
              <ProductList data={productsData} />
            ) : (
              <p>LOADING ....</p>
            )}
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Shop;

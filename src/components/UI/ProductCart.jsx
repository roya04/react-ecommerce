import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import {motion} from 'framer-motion'
import '../../styles/product-cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import products from '../../assets/data/products'
const ProductCart = ({item}) => {

  const dispatch=useDispatch()
  const cartState = useSelector(state => state.cart)
  
const addToCart=()=>{
  dispatch(
    cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
  )
  
  toast.success(`${item.productName} sebete elave olundu`)
}

  return (
        <Col lg='3' md='4' className='mb-2'>
        <div className="product__item">
            <Link to={`/shop/${item.id}`}> 
            <div className="product__img">
                <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
            </div>
            <div className="product__info p-2">
            <h3 className="product__name">{item.productName}</h3>
            <span>{item.category}</span>
          </div>
            
            </Link>
            <div className="product__card-bottom d-flex align-items-center justify-content-between">
          <span className="price"> AZN{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i  className="ri-add-line"></i>
          </motion.span>
        </div>
        </div>

        
        
        </Col>

  )
}

export default ProductCart
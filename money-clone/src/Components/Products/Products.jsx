import { Fragment } from 'react';
import PropTypes from 'prop-types';


const Products = ({ product, basket, setBasket }) => {

const basketItem=basket.filter((item)=>item.id===product.id)

  const buyClickHandler = () => {
  const notBasket=basket.filter((item)=>item.id!==product.id)
  const checkBasket=basket.filter((item)=>item.id===product.id)

if(checkBasket){
  checkBasket.amount+=1
  setBasket([...notBasket,checkBasket])

}
else{
  setBasket([...basket,{
    id:product.id,
    amount:1
  }])
}

  }

  const selClickHandler=()=>{

  }

  return (
    <Fragment>
      <div className="flex-col p-3 mb-3 border-l-stone-950">
        <img src={product.image} alt={product.title} />
        <h6 className="pb-3 text-lg">{product.title}</h6>
        <div>${product.price}</div>
        <div className="actions">
          <button onClick={selClickHandler} className="border-solid border-2 rounded-lg w-auto">
            Sat
          </button>
          <span> {basketItem && basketItem.amount || 0}</span>
          <button onClick={buyClickHandler} className="border-solid border-2 rounded-lg w-auto">
            Satın Al
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  basket: PropTypes.array.isRequired,
  setBasket: PropTypes.func.isRequired,
};

export default Products;
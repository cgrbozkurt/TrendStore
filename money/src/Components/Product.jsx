import React, { Fragment } from "react";

const Products = ({ product, basket, setBasket }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket=()=>{
    const checkBasket = basket.find((item) => item.id === product.id);
      checkBasket.amount -= 1;
    if(checkBasket.amount===0){
      setBasket([...basket.filter(item=>item.id!==product.id)])
    }

      else{setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);}
    
  }

  return (
    <Fragment>
      <div className="flex-col p-3 mb-3 border-l-stone-950 ">
        <h6 className="pb-3 text-lg">{product.title}</h6>
        <div>${product.price} </div>
        <div className="actions ">
          <button disabled={!basketItem}  onClick={removeBasket} className="border-solid border-2 rounded-lg w-auto">
            Sat
          </button>
          <span>{(basketItem && basketItem.amount) || 0}</span>
          <button
            onClick={addBasket}
            className="border-solid border-2 rounded-lg w-auto"
          >
            Satın Al
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;

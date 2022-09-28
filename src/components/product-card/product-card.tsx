import React from "react";
import "./product-card.scss";

export interface IProductCard {
  src?: string
  title?: string
  price?: number
  discount?: number
  discountPrice?: number
  onClick?: () => void
  type?: 'disabled' | 'normal'
  size?: 'small' | 'large'
}

const currencyHelper = (num: number) => {
  if (num) {
    const str = num.toString().split(".");
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1.");
    }
    const result = str.join(",");
    return result;
  } else {
    return 0;
  }
};

const ProductCard = (props:IProductCard) => {

  let containerSize;
  switch (props.size) {
    case 'small':
      containerSize = '132px'
      break;
   case 'large':
      containerSize = '182px'
      break;
    default:
      break;
  }
  
  return (
    <div style={{ width: containerSize, minWidth: containerSize }} className="pc-container">
      <div className="pc-image">
        <img
          width="120"
          height="120"
          src={props.src}
          alt="product"
          style={{ opacity: props.type === 'disabled' ? '50%' : '100%' }}
        />
      </div>
      <div className="pc-content">
        <span className="pc-title">
          {props.title}
        </span>
        <div className="pc-container-price">
          <span className="pc-price">Rp{currencyHelper(props.price as number)}</span>
        </div>
        <div className="pc-discount">
          <span>Rp{currencyHelper(props.discountPrice as number)}</span>
          <div>{props.discount}%</div>
        </div>
        <button className="pc-button" onClick={props.onClick} disabled={props.type === "disabled"}>{props.type === 'disabled' ? 'Add to bag' : 'Out of stock'}</button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useState } from 'react';
import {
  ProductCard,
  ProductCardTop,
  ProductCardImage,
  ProductCardDetails,
  ProductCardTitle,
  ProductCardCategory,
  ProductCardCTA,
  ProductCardCTAIcon,
  ProductCardCTADisabled,
  ProductCardRedeemOnHover,
  ProductCardRedeemOnHoverButton,
} from './styles';
import { postRedeem } from '../../pages/api/post';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product, user, history, points }) => {
  const [redeemProduct, setRedeemProduct] = useState(history);
  const notifySuccess = () => toast.success('Bought product succesfully!');
  const notifyErrorFailed = () => toast.error('Error. Please try again.');

  console.log(history);

  const handleRedeemProduct = async (id) => {
    if (user.points < product.cost) {
      return;
    }
    await postRedeem(product._id);
    notifySuccess();
  };

  return (
    <ProductCard>
      <ProductCardTop>
        <ProductCardImage src={product.img.url} alt='' />
        <ProductCardRedeemOnHover>
          {user.points < product.cost ? (
            <ProductCardRedeemOnHoverButton
              onClick={handleRedeemProduct}
              disabled
            >
              BUY {product.cost - user.points} COINS
            </ProductCardRedeemOnHoverButton>
          ) : (
            <ProductCardRedeemOnHoverButton onClick={handleRedeemProduct}>
              REDEEM NOW!
            </ProductCardRedeemOnHoverButton>
          )}
        </ProductCardRedeemOnHover>
      </ProductCardTop>
      <ProductCardDetails>
        <ProductCardTitle>{product.name}</ProductCardTitle>
        <ProductCardCategory>{product.category}</ProductCardCategory>
      </ProductCardDetails>
      {user.points >= product.cost ? (
        <ProductCardCTA>
          Redeem for{' '}
          <ProductCardCTAIcon src='/assets/icons/aeropay-3.svg' alt='' />{' '}
          {product.cost}
        </ProductCardCTA>
      ) : (
        <ProductCardCTADisabled>
          You Need{' '}
          <ProductCardCTAIcon src='/assets/icons/aeropay-4.svg' alt='' />{' '}
          {product.cost}
        </ProductCardCTADisabled>
      )}
    </ProductCard>
  );
};

export default Product;

import React, { useState } from 'react';
import { useRouter } from 'next/router';
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

const Product = ({ product, user }) => {
  const [loading, setLoading] = useState(false);
  const notifySuccess = () => toast.success('Bought product succesfully!');
  const notifyFail = () =>
    toast.error(`Something went wrong. Please try again.`);
  const router = useRouter();

  const handleRedeemProduct = async () => {
    try {
      setLoading(true);
      if (user.points < product.cost) {
        return;
      }
      await postRedeem(product._id);
      notifySuccess();
      setLoading(false);
      router.reload('/');
    } catch (error) {
      setLoading(false);
      notifyFail();
    }
  };

  return (
    <ProductCard>
      <ProductCardTop>
        <ProductCardImage src={product.img.url} alt='' />
        <ProductCardRedeemOnHover>
          {user.points < product.cost ? (
            <ProductCardRedeemOnHoverButton disabled>
              {product.cost - user.points} COINS MORE
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
          {loading ? 'Processing...' : 'Redeem for'}
          <ProductCardCTAIcon src='/assets/icons/aeropay-3.svg' alt='' />
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

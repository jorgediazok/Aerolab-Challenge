import React from 'react';
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
} from './styles';

const Product = ({ product, user }) => {
  return (
    <ProductCard>
      <ProductCardTop>
        <ProductCardImage src={product.img.url} alt='' />
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

import React from 'react';
import {
  ProductsSectionContainer,
  ProductsTitleContainer,
  ProductsTitle,
  ProductsTitleSecond,
  ProductFiltersContainer,
  ProductFiltersText,
  ProductFiltersInput,
  ProductsFilterSortSelectorSelected,
  ProductsFilterSortSelectorNotSelected,
  ProductFiltersInputOption,
  ProductsFilterPaginationContainer,
  ProductsFilterPaginationIconOne,
  ProductsFilterPaginationPager,
  ProductsFilterPaginationIconTwo,
  ProductsDataContainer,
} from './styles';
import Product from '../Product/Product';

const Products = ({ products, user }) => {
  return (
    <ProductsSectionContainer>
      <ProductsTitleContainer>
        <ProductsTitle>Tech</ProductsTitle>
        <ProductsTitleSecond>Products</ProductsTitleSecond>
      </ProductsTitleContainer>
      <ProductFiltersContainer>
        <ProductFiltersText>Filter by:</ProductFiltersText>
        <ProductFiltersInput>
          <ProductFiltersInputOption>All Products</ProductFiltersInputOption>
          <ProductFiltersInputOption>Gaming</ProductFiltersInputOption>
          <ProductFiltersInputOption>Audio</ProductFiltersInputOption>
          <ProductFiltersInputOption>Smart Home</ProductFiltersInputOption>
          <ProductFiltersInputOption>Monitors & TV</ProductFiltersInputOption>
        </ProductFiltersInput>
        <ProductFiltersText>Sort by:</ProductFiltersText>
        <ProductsFilterSortSelectorSelected>
          Most Recent
        </ProductsFilterSortSelectorSelected>
        <ProductsFilterSortSelectorNotSelected>
          Lowest Price
        </ProductsFilterSortSelectorNotSelected>
        <ProductsFilterSortSelectorNotSelected>
          Highest Price
        </ProductsFilterSortSelectorNotSelected>
        <ProductsFilterPaginationContainer>
          <ProductsFilterPaginationIconOne
            src='/assets/icons/chevron-default.svg'
            alt=''
          />
          <ProductsFilterPaginationPager>
            Page 1 of 2
          </ProductsFilterPaginationPager>
          <ProductsFilterPaginationIconTwo
            src='/assets/icons/chevron-active.svg'
            alt=''
          />
        </ProductsFilterPaginationContainer>
      </ProductFiltersContainer>
      <ProductsDataContainer>
        {products.map((product) => (
          <Product key={product._id} product={product} user={user} />
        ))}
      </ProductsDataContainer>
    </ProductsSectionContainer>
  );
};

export default Products;

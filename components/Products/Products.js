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
  ProductsBottomPagination,
  ProductsBottomCounter,
  ProductsBottomCounterSpan,
} from './styles';
import Product from '../Product/Product';

const Products = ({
  products,
  user,
  loading,
  setLoading,
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const prevPage = () => {
    if (currentPage <= 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage >= 2) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

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
            onClick={prevPage}
            style={{ opacity: `${currentPage === 1 ? '0.5' : 1}` }}
          />
          <ProductsFilterPaginationPager>
            Page {currentPage} of 2
          </ProductsFilterPaginationPager>
          <ProductsFilterPaginationIconTwo
            src='/assets/icons/chevron-active.svg'
            alt=''
            onClick={nextPage}
            style={{ opacity: `${currentPage === 2 ? '0.5' : 1}` }}
          />
        </ProductsFilterPaginationContainer>
      </ProductFiltersContainer>
      <ProductsDataContainer>
        {products.map((product) => (
          <Product key={product._id} product={product} user={user} />
        ))}
      </ProductsDataContainer>
      <ProductsBottomPagination>
        <ProductsBottomCounter>
          <ProductsBottomCounterSpan
            style={{ marginRight: '10px', color: '#1667D9' }}
          >
            {productsPerPage} of {totalProducts}
          </ProductsBottomCounterSpan>
          products
        </ProductsBottomCounter>
        <ProductsFilterPaginationContainer>
          <ProductsFilterPaginationIconOne
            src='/assets/icons/chevron-default.svg'
            alt=''
            onClick={prevPage}
            style={{ opacity: `${currentPage === 1 ? '0.5' : 1}` }}
          />
          <ProductsFilterPaginationPager>
            Page {currentPage} of 2
          </ProductsFilterPaginationPager>
          <ProductsFilterPaginationIconTwo
            src='/assets/icons/chevron-active.svg'
            alt=''
            onClick={nextPage}
            style={{ opacity: `${currentPage === 2 ? '0.5' : 1}` }}
          />
        </ProductsFilterPaginationContainer>
      </ProductsBottomPagination>
    </ProductsSectionContainer>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import {
  ProductsSectionContainer,
  ProductsTitleContainer,
  ProductsTitle,
  ProductsTitleSecond,
  ProductFiltersContainer,
  ProductFiltersText,
  ProductFiltersInput,
  ProductsFilterSortSelectorSelectedOne,
  ProductsFilterSortSelectorSelectedTwo,
  ProductsFilterSortSelectorSelectedThree,
  ProductFiltersInputOption,
  ProductsFilterPaginationContainer,
  ProductsFilterPaginationContainerTwo,
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
  totalProducts,
  redeem,
  history,
  points,
}) => {
  //CATEGORIES ARRAY
  const categories = [
    'All Products',
    'Audio',
    'Cameras',
    'Drones',
    'Gaming',
    'Laptops',
    'Monitors & TV',
    'PC Accesories',
    'PC Accessories',
    'Phones',
    'Phone Accessories',
    'Smart Home',
    'Tablets & E-readers',
  ];

  //MEDIA QUERYS
  const isBreakpoint = useMediaQuery(1024);

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // GET CURRENT PRODUCTS

  const [filteredProducts, setFilteredProducts] = useState(
    products.slice(0, 16)
  );
  const [filterIsActive, setFilterIsActive] = useState(true);
  const [filterIsActiveTwo, setFilterIsActiveTwo] = useState(false);
  const [filterIsActiveThree, setFilterIsActiveThree] = useState(false);

  const prevPage = () => {
    if (currentPage <= 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
      setFilteredProducts(
        filteredProducts <= 16
          ? filteredProducts.slice(0, 16)
          : products.slice(0, 16)
      );
    }
  };

  const nextPage = () => {
    if (currentPage >= 2 || filteredProducts.length < 16) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
      setFilteredProducts(
        filteredProducts > 16
          ? filteredProducts.slice(16, 32)
          : products.slice(16, 32)
      );
    }
  };

  const sortByMostRecent = (e) => {
    if (e.target.name === 'mostRecent') {
      setFilterIsActiveTwo(false);
      setFilterIsActiveThree(false);
      const prods = products.map((product) => product);

      setFilteredProducts(prods);
      setFilterIsActive(true);
    }
  };

  const sortByLowestPrice = (e) => {
    if (e.target.name === 'lowestPrice') {
      setFilterIsActive(false);
      setFilterIsActiveThree(false);
      const sortedProducts = products
        .map((product) => product)
        .sort((a, b) =>
          a.cost
            .toString()
            .localeCompare(b.cost.toString(), undefined, { numeric: true })
        );

      setFilteredProducts(
        currentPage === 1
          ? sortedProducts.slice(0, 16)
          : sortedProducts.slice(16, 32)
      );
      setFilterIsActiveTwo(true);
    }
  };

  const sortByHighestPrice = (e) => {
    if (e.target.name === 'highestPrice') {
      setFilterIsActive(false);
      setFilterIsActiveTwo(false);
      const sortedProducts = products
        .map((product) => product)
        .sort((a, b) =>
          a.cost
            .toString()
            .localeCompare(b.cost.toString(), undefined, { numeric: true })
        )
        .reverse();

      setFilteredProducts(
        currentPage === 1
          ? sortedProducts.slice(0, 16)
          : sortedProducts.slice(16, 32)
      );
      setFilterIsActiveThree(true);
    }
  };

  const sortByCategory = (e) => {
    if (e.target.value === 'All Products') {
      setFilteredProducts(products.slice(0, 16));
      return;
    }

    const filtered = products.filter(
      (product) => product.category === e.target.value
    );
    setFilteredProducts(filtered.slice(0, 16));
  };

  return (
    <ProductsSectionContainer>
      <ProductsTitleContainer>
        <ProductsTitle>Tech</ProductsTitle>
        <ProductsTitleSecond>Products</ProductsTitleSecond>
      </ProductsTitleContainer>
      <ProductFiltersContainer>
        {isBreakpoint ? null : (
          <ProductFiltersText>Filter by:</ProductFiltersText>
        )}
        <ProductFiltersInput name='input' onClick={sortByCategory}>
          {categories.map((category, index) => (
            <ProductFiltersInputOption key={index}>
              {category}
            </ProductFiltersInputOption>
          ))}
        </ProductFiltersInput>
        {isBreakpoint ? null : (
          <ProductFiltersText>Sort by:</ProductFiltersText>
        )}
        <ProductsFilterSortSelectorSelectedOne
          name='mostRecent'
          onClick={sortByMostRecent}
          isActive={
            filterIsActive
              ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);`
              : '#E6F0FF'
          }
          isColorActive={
            filterIsActive
              ? '#f5f9ff'
              : `linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)`
          }
        >
          Most Recent
        </ProductsFilterSortSelectorSelectedOne>
        <ProductsFilterSortSelectorSelectedTwo
          name='lowestPrice'
          onClick={sortByLowestPrice}
          isActiveTwo={
            filterIsActiveTwo
              ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);`
              : '#E6F0FF;'
          }
          isColorActiveTwo={
            filterIsActiveTwo
              ? '#f5f9ff'
              : `linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)`
          }
        >
          Lowest Price
        </ProductsFilterSortSelectorSelectedTwo>
        <ProductsFilterSortSelectorSelectedThree
          name='highestPrice'
          onClick={sortByHighestPrice}
          isActiveThree={
            filterIsActiveThree
              ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);`
              : '#E6F0FF'
          }
          isColorActiveThree={
            filterIsActiveThree
              ? '#f5f9ff'
              : `linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)`
          }
        >
          Highest Price
        </ProductsFilterSortSelectorSelectedThree>
        <ProductsFilterPaginationContainer>
          <ProductsFilterPaginationIconOne
            src='/assets/icons/chevron-default.svg'
            alt=''
            onClick={prevPage}
            style={{ opacity: `${currentPage === 1 ? '0.5' : 1}` }}
          />
          <ProductsFilterPaginationPager>
            Page {filteredProducts.length < 16 ? 1 : currentPage} of{' '}
            {filteredProducts.length >= 16 ? 2 : 1}
          </ProductsFilterPaginationPager>
          <ProductsFilterPaginationIconTwo
            src='/assets/icons/chevron-active.svg'
            alt=''
            onClick={nextPage}
            style={{
              opacity: `${
                currentPage === 2 || filteredProducts.length < 16 ? '0.5' : 1
              }`,
            }}
          />
        </ProductsFilterPaginationContainer>
      </ProductFiltersContainer>
      <ProductsDataContainer id='productos'>
        {filteredProducts.map((product) => (
          <Product
            key={product._id}
            product={product}
            user={user}
            redeem={redeem}
            history={history}
            points={points}
          />
        ))}
      </ProductsDataContainer>
      <ProductsBottomPagination>
        <ProductsBottomCounter>
          <ProductsBottomCounterSpan
            style={{ marginRight: '10px', color: '#1667D9' }}
          >
            {filteredProducts.length} of {totalProducts}
          </ProductsBottomCounterSpan>
          products
        </ProductsBottomCounter>
        <ProductsFilterPaginationContainerTwo>
          <ProductsFilterPaginationIconOne
            src='/assets/icons/chevron-default.svg'
            alt=''
            onClick={prevPage}
            style={{ opacity: `${currentPage === 1 ? '0.5' : 1}` }}
          />
          <ProductsFilterPaginationPager>
            Page {filteredProducts.length < 16 ? 1 : currentPage} of{' '}
            {filteredProducts.length >= 16 ? 2 : 1}
          </ProductsFilterPaginationPager>
          <ProductsFilterPaginationIconTwo
            src='/assets/icons/chevron-active.svg'
            alt=''
            onClick={nextPage}
            style={{ opacity: `${currentPage === 2 ? '0.5' : 1}` }}
          />
        </ProductsFilterPaginationContainerTwo>
      </ProductsBottomPagination>
    </ProductsSectionContainer>
  );
};

export default Products;

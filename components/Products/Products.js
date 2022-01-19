import React, { useState, useEffect } from 'react';
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
  ProductsFilterPaginationIconOne,
  ProductsFilterPaginationPager,
  ProductsFilterPaginationIconTwo,
  ProductsDataContainer,
  ProductsBottomPagination,
  ProductsBottomCounter,
  ProductsBottomCounterSpan,
} from './styles';
import Product from '../Product/Product';

const Products = ({ products, user, totalProducts }) => {
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

  //PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // GET CURRENT PRODUCTS

  const [slicedProducts] = useState(products.slice(0, 16));
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filteredProducts, setFilteredProducts] = useState(slicedProducts);
  const [filterIsActive, setFilterIsActive] = useState(false);
  const [filterIsActiveTwo, setFilterIsActiveTwo] = useState(false);
  const [filterIsActiveThree, setFilterIsActiveThree] = useState(false);

  const prevPage = () => {
    if (currentPage <= 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
      setFilteredProducts(products.slice(0, 16));
    }
  };

  const nextPage = () => {
    if (currentPage >= 2) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
      setFilteredProducts(products.slice(16, 32));
    }
  };

  useEffect(() => {
    setFilterIsActive(true);
  }, []);

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
      const sortedProducts = slicedProducts
        .map((product) => product)
        .sort((a, b) =>
          a.cost
            .toString()
            .localeCompare(b.cost.toString(), undefined, { numeric: true })
        );

      setFilteredProducts(sortedProducts);
      setFilterIsActiveTwo(true);
    }
  };

  const sortByHighestPrice = (e) => {
    if (e.target.name === 'highestPrice') {
      setFilterIsActive(false);
      setFilterIsActiveTwo(false);
      const sortedProducts = slicedProducts
        .map((product) => product)
        .sort((a, b) =>
          a.cost
            .toString()
            .localeCompare(b.cost.toString(), undefined, { numeric: true })
        )
        .reverse();

      setFilteredProducts(sortedProducts);
      setFilterIsActiveThree(true);
    }
  };

  const sortByCategory = () => {
    // products.filter(product => selectedCategory==="All" || product.category===selectedCategory)
    const filtered = products.filter(
      (product) =>
        selectedCategory === 'All Products' ||
        product.category === selectedCategory
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductsSectionContainer>
      <ProductsTitleContainer>
        <ProductsTitle>Tech</ProductsTitle>
        <ProductsTitleSecond>Products</ProductsTitleSecond>
      </ProductsTitleContainer>
      <ProductFiltersContainer>
        <ProductFiltersText>Filter by:</ProductFiltersText>
        <ProductFiltersInput
          onChange={(e) => setSelectedCategory(e.target.value)}
          onClick={sortByCategory}
        >
          {categories.map((category, index) => (
            <ProductFiltersInputOption key={index}>
              {category}
            </ProductFiltersInputOption>
          ))}
        </ProductFiltersInput>
        <ProductFiltersText>Sort by:</ProductFiltersText>
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
        {filteredProducts.map((product) => (
          <Product key={product._id} product={product} user={user} />
        ))}
      </ProductsDataContainer>
      <ProductsBottomPagination>
        <ProductsBottomCounter>
          <ProductsBottomCounterSpan
            style={{ marginRight: '10px', color: '#1667D9' }}
          >
            {currentPage === 1 ? 16 : 32} of {totalProducts}
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

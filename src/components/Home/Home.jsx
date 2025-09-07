import React from 'react';
import { useGetAllProductsQuery } from '../../redux/productApi';

const Home = () => {
  const {data, error,isLoading} = useGetAllProductsQuery()
  return (
    <div>
      <h2>home</h2>
    </div>
  );
}

export default Home;

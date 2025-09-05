import React from 'react'
import Navbar from '../components/common/Navbar'
import FilterProducts from '../components/common/FilterProducts'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Products page</h1>

      {/* filter nav section */}
      <div className='flex gap-3 p-4 justify-center items-center'>
        <FilterProducts></FilterProducts>
        <FilterProducts></FilterProducts>
        <FilterProducts></FilterProducts>
        <FilterProducts></FilterProducts>
      </div>
      <hr />


      <br />
      <br />
      <br />
      <h2 className='text-center'>Products will be listed here</h2>
      <div id='productsList' className='w-full h-[100vh] flex justify-between items-start gap-3 my-5 p-4 bg-stone-100'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  )
}

export default Products

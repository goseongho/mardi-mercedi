import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import MainVisual from './MainVisual';
import { useSearchParams } from 'react-router-dom';
import db from '../db.json'; // db.json 파일을 가져오기

const ProductAll = () => {
  const [productList, setProductList]=useState([]);
  const [query, setQuery]=useSearchParams();
  const getProducts = async ()=>{
    let searchQuery= query.get('q')||"";
    console.log(searchQuery);
    // 모든제품 가져오기
    let products = db.products;
    // 검색 쿼리를 포함하는 제품 필터링
    let filteredProducts = products.filter(products => product => product.title.toLowerCase().include(searchQuery.toLowerCase()));
    console.log(filteredProducts);
    setProductList(filteredProducts);
  };
  useEffect(()=>{
    getProducts();
  },[query])
  return (
    <div className='ProductAll'>
      <MainVisual/>
      <div className='ProductAllInner'>
        {productList.map((item)=>(
          <ProductCard item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default ProductAll
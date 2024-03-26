import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../db.json';

const ProductDetail = ({item}) => {
  let [product, setProduct]=useState([null]);
  let { id } = useParams();
  // const getProductDetail =async ()=>{
  //   let url=`https://my-json-server.typicode.com/goseongho/shopmalltest/products/${id}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data);
  // }
  useEffect(()=>{
    //url 파라미터로 받은 상품 아이디에 해당하는 상품을 db.json에서 찾아서 설정
    const selectedProduct = db.products.find((item)=>item.id == parseInt(id));
    setProduct(selectedProduct);
  },[id]); // id가 변경될 때마다 useEffect 실행
  return (
    <div className='ProductDetail'>
      <div className="ProductDetailInner">
        <div className="detailLeft">
          <img src={product?.img} alt="detail" />
        </div>
        <div className="detailRight">
          <h3>{item?.title}</h3>
          <p>₩63,750</p>
          <select name="" id="">
            <option value="">사이즈 선택</option>
          </select>
          <button>장바구니 추가</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
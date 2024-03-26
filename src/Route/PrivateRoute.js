import React from 'react'
import ProductDetail from '../Pages/ProductDetail'
import { Navigate } from 'react-router'
// authentication의 state가 true이냐 false이냐에 따라서 true면 상품 디테일 보여주고 false면 로그인 페이지 보여준다
const PrivateRoute = ({authentication}) => {
  return authentication ==
  true?
  <ProductDetail/>
  :
  <Navigate to="/login" />
}

export default PrivateRoute
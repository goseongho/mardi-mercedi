import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Header = ({ authentication, setAuthenticate}) => {
  const navigate = useNavigate();
  const goTologin = ()=>{
    navigate("/login");
  }
  const search=(event)=>{
    //console.log('키가입력되는중');
    if(event.key==="Enter")
    event.preventDefault();
    //console.log('click Enter key', event.key)
    let keyword = event.target.value;
    console.log("keyword", keyword);
    navigate(`/?q=${keyword}`)
  }
  return (
    <div className='Header'>
      <div className="HeaderInner">
        <div className='TopBanner'>
          KAKAOTALK FRIENDS 10% OFF SPECIAL COUPON
        </div>
        <div className='Nav'>
          <Link to="/"><img src={process.env.PUBLIC_URL + '/Images/logo.png'}/></Link>
          <ul>
            <li>SHOP</li>
            <li>BRAND</li>
            <li>COLLAB.</li>
            <li>STYLING</li>
            <li>STORES</li>
          </ul>
          <div className='User'>
            <Link to="/login" className='login' onClick={goTologin}>로그인</Link>
            <form>
              <input type="text" className='login-link' onKeyPress={search} />
              <img src={process.env.PUBLIC_URL + '/images/search.png'}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

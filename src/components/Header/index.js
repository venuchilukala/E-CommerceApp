import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Header = () => {
  const navigate = useNavigate() // Replaces history in v6
  const { cartList } = useContext(CartContext)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login') // Programmatic navigation using navigate
  }

  const renderCartItemsCount = () => {
    const cartListCount = cartList.length
    return(
      <>
        {cartListCount > 0 ? (<span className='cart-count-badge'>{cartListCount}</span>) : null}
      </>
    )
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header




// import { Link, useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie'
// import './index.css'
// import CartContext from '../../context/CartContext'
// import { useContext } from 'react'

// const Header = () => {

//   const navigate = useNavigate()
//   const {cartList} = useContext(CartContext)

//   const onClickLogOut = () => {
//     Cookies.remove('jwt_token')
//     navigate('/login')
//   }

//   const renderCartItemsCount = () => {
//     const cartListCount = cartList.length
//           return (
//             <>
//               {cartListCount > 0 ? (<span className='cart-count-badge'>{cartListCount}</span>) : null}
//             </>
//           )
//   }

//   return (
//     <nav className="nav-header">
//       <div className="nav-content">
//         <img
//           className="website-logo"
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           alt="website logo"
//         />
//         <ul className="nav-menu">
//           <li>
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="nav-link">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/cart" className="nav-link">
//               Cart
//               {renderCartItemsCount()}
//             </Link>
//           </li>
//         </ul>
//         <button type="button" className="logout-desktop-btn" onClick={onClickLogOut}>
//           Logout
//         </button>
//         <button type="button" className="logout-mobile-btn">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
//             alt="logout icon"
//             className="logout-icon"
//           />
//         </button>
//       </div>

//       <div className="nav-menu-mobile">
//         <ul className="nav-menu-list-mobile">
//           <li className="nav-menu-item-mobile">
//             <Link to="/" className="nav-link">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
//                 alt="nav home"
//                 className="nav-bar-image"
//               />
//             </Link>
//           </li>

//           <li className="nav-menu-item-mobile">
//             <Link to="/products" className="nav-link">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
//                 alt="nav products"
//                 className="nav-bar-image"
//               />
//             </Link>
//           </li>
//           <li className="nav-menu-item-mobile">
//             <Link to="/cart" className="nav-link">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
//                 alt="nav cart"
//                 className="nav-bar-image"
//               />
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }
// export default Header

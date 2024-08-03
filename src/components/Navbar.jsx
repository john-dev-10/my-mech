import React, { useContext } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import BodyMain from '../BodyMain'
import { StoreContext } from './Context/StoreContext'
import { assets } from '../asserts/assets'


const Navbar = (id) => {



  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)


  const [result, setResult] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);


  const [menu, setMenu] = useState("home")

  const navigate = useNavigate()


  const cartClick = () => {
    navigate('/cart')
  }



  const extractedValues = [].concat(...Object.values(BodyMain).map(category =>
    category.map(item => ({
      id: item._id,
      title: item.name,
      image: item.image,
      price: item.price,
      description: item.description,
      category: item.category

    }))
  ));


  const handleClick = (result) => {

    const filtered = extractedValues.filter(val => val.title.toLowerCase().includes(result.toLowerCase()));
    setFilteredValues(filtered);
  }


  const handleChange = (event) => {
    setResult(event.target.value);
  }

  return (
    <div>
      <div className='navbar-heading'>

      </div>
      <div className='navbar-right' >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: "10px" }}>



                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} style={{ color: "black" }}>Home</Link>
                <li class="nav-item">
                  <a style={{ color: "black" }} onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} href='#category'>Category</a>
                </li>
                <li class="nav-item dropdown">
                  <a style={{ color: "black" }} onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} href='#about'>About</a>
                </li>
                <li class="nav-item">
                  <a style={{ color: "black" }}
                    onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""} href='#footer'>Contact</a>
                </li>
              </ul>
              <div className='motor'>
              <a class="navbar-brand" href="#" style={{marginRight:"200px",color:"black"}}>INFINITY MOTORS</a>
</div>
              <div className='navbar-search'>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search" onChange={handleChange} />
                <button className="btn btn-outline-dark" type="submit" onClick={() => handleClick(result)}>Search</button>
 <img onClick={cartClick} className='cart' src='https://raw.githubusercontent.com/ivanoff/react-native-ico-shopping/HEAD/static/shopping-cart.png' style={{ width: "50px", height: "50px", marginLeft: "10px",marginBottom:"80px" }} alt='add to cart image' />
              </div>
             
             

            </div>

          </div>
        </nav>
      </div>
      <div className='food-item'>
      {filteredValues.map((val) => (
          <div className="food-item-img-container" key={val.id}>
            <div>
              <img src={val.image} alt={val.title} />
              {!cartItems[val.id] ? (
                <img className="add" onClick={() => addToCart(val.id)} src={assets.add_icon_white} alt="add icon" />
              ) : (
                <div className="food-item-counter">
                  <img onClick={() => removeFromCart(val.id)} src={assets.remove_icon_red} alt="remove icon" />
                  <p>{cartItems[val.id]}</p>
                  <img onClick={() => addToCart(val.id)} src={assets.add_icon_green} alt="add icon" />
                </div>
              )}
            </div>
            <h2>{val.title}</h2>
            <p>{val.price}</p>
          </div>
        ))}
      </div>


    </div>



  )
}

export default Navbar


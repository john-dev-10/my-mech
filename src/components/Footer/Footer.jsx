import React from 'react'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer>
      <p>Copyright ⓒ Infinity motors.com {year}</p>
    </footer>
</div>
  )
}

export default Footer

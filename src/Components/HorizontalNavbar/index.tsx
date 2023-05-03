import React from 'react'
import "./HorizontalNavbar.scss"
import { Link } from 'react-router-dom'
import Logo from '../../Icons/Logo'
type Props = {}

const HorizontalNavbar = (props: Props) => {
  return (
    <div id='Hnavbar-container'>
        <Link to="#">
            <Logo/>
        </Link>
        <Link to="#" className='hNavbar-links'>Acceuil</Link>
        <Link to="#" className='hNavbar-links'>Profil</Link>   
        <Link to="#" className='hNavbar-links'>Réglages</Link>   
        <Link to="#" className='hNavbar-links'>Communauté</Link>   
    </div>
  )
}

export default HorizontalNavbar
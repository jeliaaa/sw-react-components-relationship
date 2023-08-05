import React from 'react'
import './bookcard.css'
const BookCard = ({title, description, mainHero, heroImg, getInfo }) => {
  return (
    <div className='card'>
        <h1>Book : {title}</h1>
        <h3>Hero : {mainHero}</h3>
        <img src={heroImg} alt={mainHero}/>
        <hr />
        <p>{description}</p>
        <button type='button' onClick={()=> {getInfo(title)}}>get Info</button>
    </div>
  )
}

export default BookCard
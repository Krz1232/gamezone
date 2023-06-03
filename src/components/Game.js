import React from 'react'

export default function Game({name, onClick ,genres, date, img}) {
  return (
    <div id='gameComponent'>
        <div className='img'>
          <img src={img} alt={name} />
        </div>
        <div className='detail'>
            <h3>{name}</h3>
            <p>Released Date: <span> {date}</span></p>
            <p className='last'>Genres: <span> {` ${genres.slice(0,3)} `} </span></p>
        </div>
    </div>
  )
}

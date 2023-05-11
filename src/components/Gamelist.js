import React, { useState } from 'react'
import { useSelector } from 'react-redux'


//import game components
import Game from './Game';
import { Link } from 'react-router-dom';

export default function Gamelist() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(false);

  // use state datas
  const {popIsLoading, popular, popError} = useSelector( state => state.popular);
  const {newIsLoading, new_games, newError} = useSelector( state => state.new_games);
  const {upIsLoading, up_coming, upError} = useSelector( state => state.up_coming);


  // load more function to show more cards
  function load_more_popular() {
    setVisible(!visible)
  }
  function load_more_new_games() {
    setShow(!show)
  }
  function load_more_up_coming() {
    setAdd(!add)
  }

  return (

    //popular games component
    <div id='game-list'>
    {popError !== "" ? <h1>Error while getting the data...</h1> : <div>
    {popIsLoading === true ?  <h1 className='titles first'>Loading...</h1> : <h1 className='titles first'>Popular Games</h1>}
     {!popIsLoading && 
      <div className='gameView'>
      {popular && popular.slice(0, visible ? 999 : 3).map( (game,index) => (
          <Link to={game.slug.toString()} key={game.id}>
          <Game key={index} date={game.released} name={game.name} genres={game.genres.map((game,index) => game.name)} img={game.background_image} />
          </Link>
        ))}
        <span className="loadMore" onClick={load_more_popular}><i class={ visible ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} style={{color: "#B0DAFF"}}></i></span>
      </div> 
    } </div>}
    

    {/* new games component */}
    {newError !== "" ? <h1>Error while getting the data...</h1> : <div>
     {newIsLoading ?  " " : <h1 className='titles'>New Games</h1>}
     {!newIsLoading && 
      <div className='gameView'>
      {new_games && new_games.slice(0, show ? 999 : 3).map( (game,index) => (
          <Link to={game.slug.toString()} key={game.id}>
          <Game key={index} date={game.released} name={game.name} genres={game.genres.map((game,index) => game.name)} img={game.background_image} />
          </Link>
        ))}
        <span className="loadMore" onClick={load_more_new_games}><i class={ show ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} style={{color: "#B0DAFF"}}></i></span>
      </div> 
    } </div>}


    {/* up coming games component */}
    {upError !== "" ? <h1>Error while getting the data...</h1> : <div>
     {newIsLoading ?  " " : <h1 className='titles'>Up-Coming Games</h1>}
     {!upIsLoading && 
      <div className='gameView'>
      {up_coming && up_coming.slice(0, add ? 999 : 3).map( (game,index) => (
            <Link to={game.slug.toString()} key={game.id}>
            <Game key={index} date={game.released} name={game.name} genres={game.genres.map((game,index) => game.name)} img={game.background_image} />
            </Link>
        ))}
        <span className="loadMore" onClick={load_more_up_coming}><i class={ add ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"} style={{color: "#B0DAFF"}}></i></span>
      </div> 
    } </div>}
    </div>
  )
}

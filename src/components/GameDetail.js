import React from 'react'
import { useLoaderData, useParams } from 'react-router'



// import images
import playstation from "../images/playstation-logotype.png";
import xbox from "../images/xbox.png";
import steam from "../images/steam.png";
import nintendo from "../images/nintendo-switch.png";
import gamepad from "../images/games.png";
import fullStar from "../images/star.png"
import emptyStar from "../images/empty-star.png"



export default function GameDetail() {

    const { text } = useParams();
    const {detail, screenshot} = useLoaderData();


    // function to return platform imgs
    const getPlatofmrImages = (text) => {
      switch (text) {
        case "playstation" :
          return playstation;
          break;
        case "xbox" :
          return xbox;
        break;
        case "pc" : 
          return steam;
          break;
        case "nintendo" :
          return nintendo;
          break;
        default :
        return gamepad;
      }
    }

    //function to get stars
    const getStars = (num) => {
      const stars = [];
      const result = Math.floor(num);
      for(let i = 1; i <= 5; i++) {
        if( i <= result) {
          stars.push(<img className='stars' src={fullStar} alt='img' key={i}></img>);
        } else {
          stars.push(<img className='stars' src={emptyStar} alt='img' key={i}></img>);
        }
      }

      return stars
    }

  return (
    <div id='gameDetail'>

    {/* left detail section */}
      <h1>{detail.name}</h1>
      {getStars(detail.rating)}
      <div className='header-detail'>
          <img className='detail-background' src={detail.background_image} alt='background'/>


    {/* right detail section */}

          <div className='more-detail'>
            <div className='platforms'>
              <h2>Platforms</h2><br />
              {detail.parent_platforms && detail.parent_platforms.map(platform => (
                <img key={platform.platform.name} src={getPlatofmrImages(platform.platform.slug)} alt='img'/>
              ))}
            </div>

            {detail.platforms && detail.platforms[1] && detail.platforms[1].requirements && detail.platforms[1].requirements.minimum ?
               <div className='requirements'>
               <h2>System Requirements</h2>
               <p>{detail.platforms[1].requirements.minimum}</p>
               <p>{detail.platforms[1].requirements.recommended}</p>
               </div> : <div className='requirements'> <h2>No System Requirements</h2></div>}
          </div>
      </div>


      {/* description section */}
      <div className='description'>
          <h2>About</h2>
          <p>{detail.description_raw}</p>
      </div>


      {/* Screenshoots section */}
        <div id='screenshoots-view'>
          <h2>Screenshoots</h2>
          <div className='screenshots-container'>
            {screenshot.results && screenshot.results.slice(0, 4).map(screenshot => {
              return (
                <img key={screenshot.id} src={screenshot.image} alt={detail.name} />
              )
            })}
          </div>
        </div>
    </div>
  )
}


// loader function
export const gameDetailLoader = async ({params}) => {
    const {text} = params;

    const request1 = fetch("https://api.rawg.io/api/games/" + `${text}` + "?key=ea622b8db0a042ed9469d92390740884");
    const request2 = fetch("https://api.rawg.io/api/games/" + `${text}` + "/screenshots?key=ea622b8db0a042ed9469d92390740884");
    
    const [response1, response2] = await Promise.all([request1, request2]);
    const [data1, data2] = await Promise.all([response1.json(), response2.json()]);

    return {
      detail: data1,
      screenshot: data2
    }  
}

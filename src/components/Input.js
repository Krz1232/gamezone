/* eslint-disable */
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { searchGameURL } from './url/API';

export default function Input() {

  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState();


  const handleFilterData = (e) => {
    const value = e.target.value;

    if(value.length !== 0) {
      setInputValue(value);
    }  else {
      setInputValue("");
    }
    setType()
  }

  useEffect(() => {
    if(inputValue) {
      fetch(searchGameURL(inputValue))
      .then( response => response.json())
      .then( data => {setFilterData(data.results)})
      .catch( err => { throw Error(err) })
    } else {
      setFilterData([]);
    }
  }, [inputValue])

  const handleErase = () => {
    setFilterData([])
    setType("")
  }

  return (
    <div id="root-input">
        <div className='input-holder'>
          <input type='text' placeholder='Search...' value={type} onChange={handleFilterData} />
          <i className="fa-solid fa-magnifying-glass" style={{color: "white"}}></i>
        </div>
        {filterData.length > 0 &&  
        <div className='hidden-filter'>
            {filterData.map(data => (
                <div className='each-data' key={data.id}>
                  <img src={data.background_image} alt={data.slug} />
                  <Link className='linkto' to={`gamezone/` + data.slug} onClick={handleErase}>
                    <div className='searchShow'>
                      <p>{data.name}</p>
                      <span>({data.released})</span>
                    </div>
                  </Link>
                </div>
              )
            )}
        </div>
        }
    </div>
  )
}

import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Input() {

  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState();

  const {popIsLoading, popular, popError} = useSelector( state => state.popular);
  const {newIsLoading, new_games, newError} = useSelector( state => state.new_games);
  const {upIsLoading, up_coming, upError} = useSelector( state => state.up_coming);

  const datas = [
    ...popular,
    ...new_games,
    ...up_coming
  ]

  const handleFilterData = (e) => {
    const value = e.target.value;
    const SearchedName = datas.filter(data => {
      return data.name.toLowerCase().includes(value.toLowerCase())
    })
    if(value.length !== 0) {
      setFilterData(SearchedName);
    }  else {
      setFilterData([]);
    }
    setInputValue()
  }

  const handleErase = () => {
    setFilterData([])
    setInputValue("")
  }

  return (
    <div id="root-input">
         <div className='input-holder'>
            <input type='text' placeholder='Search...' value={inputValue} onChange={handleFilterData} />
            <i class="fa-solid fa-magnifying-glass" style={{color: "white"}}></i>
        </div>
        {filterData.length !== 0 &&  
        <div className='hidden-filter'>
            {filterData.map(data => {
              return (
                <div className='each-data'>
                  <img src={data.background_image} alt={data.slug} />
                  <Link className='linkto' to={data.slug} onClick={handleErase}>{data.name}</Link>
                </div>
              )
            })}
        </div>
        }
    </div>
  )
}

import './SearchBar.css'
// import iconSearch from '/assets/icon-search.svg'
import IconSearch from '../../src/assets/icon-search.svg?react'
import { useState, useRef } from 'react'

export function SearchBar() {

    const [searchInput, setSearchInput] = useState('')

    const inputRef = useRef(null)

    const handleInput = (e) => {
        setSearchInput(e.target.value);
    }

    const handleInputFocus = () =>{
        if (inputRef.current){
            inputRef.current.focus()
        }
    }

    return (
        <div className="search-bar">
            <IconSearch></IconSearch>
            {/* <img src={iconSearch} alt="search icon" /> */}
            <div className="custom-input" onClick={handleInputFocus}>
                {searchInput.length > 0
                    ? <p>{searchInput}</p>
                    : <p className="placeholder">Search for movies or TV series</p>
                }
                <input type="text" ref={inputRef} onChange={handleInput} />
            </div>
        </div>
    )
}
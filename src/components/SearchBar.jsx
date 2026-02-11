import './SearchBar.css'
// import iconSearch from '/assets/icon-search.svg'
import IconSearch from '../../src/assets/icon-search.svg?react'
import { useState, useRef, useEffect } from 'react'
import { useDebouncedInput } from '../customHooks/useDebouncedInput'
import { findMovie } from '../utils/dataHelper'

export function SearchBar({ filmsData, searching, setSearching, searchResults, setSearchResults }) {

    const [searchInput, setSearchInput] = useState('')
    // const [loading, setLoading] = useState(false)
    const inputRef = useRef(null)
    const debouncedInput = useDebouncedInput(searchInput)

    useEffect(() => {
        const movie = findMovie(filmsData, debouncedInput)

        if (movie) {
            let newResults = [...searchResults]
            console.log('new movie results!', newResults)
            newResults[newResults.length] = movie
            setSearchResults(newResults)
            setSearching({
                loading: false,
                search: true,
                results: 'found'
            })
            return
        }

        if (!movie && debouncedInput.length > 0) {
            setSearching(
                {
                    loading: false,
                    search: true,
                    results: 'not-found'
                }
            )
        }
        //searching function
    }, [debouncedInput])

    useEffect(() => {
        if (searchInput.length <= 0) {
            setSearching({
                loading: false,
                search: false,
                results: 'none'
            })
            setSearchResults([])
            return
        }
        if (searchInput.length > 0 && searchResults.length <= 0) {
            setSearching({
                loading: true,
                search: true,
                results: 'none'
            })
            return
        }
        setSearching({
            loading: true,
            search: true,
            results: 'none'
        })
    }, [searchInput])

    // should switch loading to false when results are here //

    const handleInput = (e) => {
        setSearchInput(e.target.value);
    }

    const handleInputFocus = () => {
        if (inputRef.current) {
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
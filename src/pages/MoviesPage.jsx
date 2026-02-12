import { SideBar } from "../components/SideBar"
import SearchBar from "../components/SearchBar"
import { RecommendedCard } from "../components/RecommendedCard"
import './MoviesPage.css'
import { useMediaQuery } from "../customHooks/useMediaQuery"
import { useWindowWidth } from "../customHooks/useWindowWidth"
import { useRef } from "react"

export function MoviesPage({ filmsData, setFilmsData, currentPage, setCurrentPage, searching, setSearching, searchResults, setSearchResults }) {

    const isSmallDevice = useMediaQuery('(max-width : 1200px)')
    const width = useWindowWidth()

    const searchbarRef = useRef(null)
    const handleUnFocus = () => {
        if (searchbarRef.current) {
            searchbarRef.current?.handleUnfocusInput()
        }
    }

    return (
        <div className={isSmallDevice ? "movie-page-small" : "movie-page-layout"}>
            {
                !isSmallDevice &&
                <div onClick={handleUnFocus}>
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                </div>
            }
            {searching.search === false
                ?
                <div className={isSmallDevice ? "main-part-small" : "main-part-movies"}>
                    {isSmallDevice &&
                        <div onClick={handleUnFocus}>
                            <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                        </div>
                    }
                    <SearchBar ref={searchbarRef} filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    <div onClick={handleUnFocus}>
                        <h2>Movies</h2>
                        <div className={isSmallDevice ? (width < 600 ? 'phone-grid' : 'movies-grid-movies-tablet') : 'movies-grid-movies'}>
                            {filmsData && filmsData.length > 0 &&
                                filmsData.map((movie, index) => {
                                    if (movie.category === 'Movie') {
                                        return <RecommendedCard key={index} movieData={movie} filmsData={filmsData} setFilmsData={setFilmsData} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                :
                <div className={isSmallDevice ? "main-part-small" : "main-part-movies"}>
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    {searching.loading === true
                        ? <>
                            <h2>Movies</h2>
                            <p>Loading...</p>
                        </>
                        : <>
                            <h2>Movies</h2>
                            {searching.results === 'not-found'
                                ? <>Nothing Found!</>
                                : searchResults.length > 0
                                    ? searchResults.map((movieData, index) => {
                                        return <RecommendedCard key={index} movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData} width={width}> </RecommendedCard>
                                    })
                                    : <>Nothing found!</>
                            }
                        </>
                    }
                </div>
            }
        </div>
    )
}
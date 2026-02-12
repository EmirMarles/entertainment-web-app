import { SideBar } from "../components/SideBar"
import SearchBar from "../components/SearchBar"
import { RecommendedCard } from "../components/RecommendedCard"
import './TvSeriesPage.css'
import { useMediaQuery } from "../customHooks/useMediaQuery"
import { useWindowWidth } from "../customHooks/useWindowWidth"
import { useEffect, useRef } from "react"

export function TvSeriesPage({ filmsData, setFilmsData, currentPage, setCurrentPage, searching, setSearching, searchResults, setSearchResults }) {

    const isSmallDevice = useMediaQuery('(max-width : 1200px)')
    const width = useWindowWidth()

    useEffect(() => {
        console.log('width inside tv series:', width)
    }, [width])

    const searchbarRef = useRef(null)
    const handleUnFocus = () => {
        if (searchbarRef.current) {
            searchbarRef.current?.handleUnfocusInput()
        }
    }

    return (
        <div className={isSmallDevice ? "tv-page-small" : "tv-page-layout"}>
            {
                !isSmallDevice &&
                <div onClick={handleUnFocus}>
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                </div>
            }
            {searching.search === false ?
                <div className={isSmallDevice ? "tv-part-small" : "tv-part-movies"}>
                    {isSmallDevice &&
                        <div onClick={handleUnFocus}>
                            <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                        </div>
                    }
                    <SearchBar ref={searchbarRef} filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    <div onClick={handleUnFocus}>
                        <h2>TV Series</h2>
                        <div className={isSmallDevice ? (width <= 900 ? "phone-grid" : "tv-grid-tablet") : "tv-grid"}>
                            {filmsData && filmsData.length > 0 &&
                                filmsData.map((movie, index) => {
                                    if (movie.category === 'TV Series') {
                                        return <RecommendedCard key={index} movieData={movie} filmsData={filmsData} setFilmsData={setFilmsData} width={width} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                : <div className={isSmallDevice ? "tv-part-small" : "tv-part-movies"}>
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    <h2>TV Series</h2>
                    {searching.loading === true
                        ? <p>Loading...</p>
                        :
                        <div className={isSmallDevice ? "tv-grid-tablet" : "tv-grid"}>
                            {searching.results === 'not-found'
                                ? <p>Nothing found!</p>
                                : searchResults.length > 0
                                    ? searchResults.map((movieData, index) => {
                                        return <RecommendedCard key={index} movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData}> </RecommendedCard>
                                    })
                                    : <p>Nothing found!</p>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}
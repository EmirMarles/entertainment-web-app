import { SideBar } from "../components/SideBar"
import { SearchBar } from "../components/SearchBar"
import { RecommendedCard } from "../components/RecommendedCard"
import './MoviesPage.css'
import { useMediaQuery } from "../customHooks/useMediaQuery"

export function MoviesPage({ filmsData, setFilmsData, currentPage, setCurrentPage, searching, setSearching, searchResults, setSearchResults }) {

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <div className="movie-page-layout">
            {
                !isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            {searching.search === false
                ?
                <div className="main-part-movies">
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    <h2>Movies</h2>
                    <div className={isSmallDevice ? 'movies-grid-movies-tablet' : 'movies-grid-movies'}>
                        {filmsData && filmsData.length > 0 &&
                            filmsData.map((movie, index) => {
                                if (movie.category === 'Movie') {
                                    return <RecommendedCard key={index} movieData={movie} />
                                }
                            })
                        }
                    </div>
                </div>
                :
                <div className="main-part-movies">
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
                                        return <RecommendedCard key={index} movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData}> </RecommendedCard>
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
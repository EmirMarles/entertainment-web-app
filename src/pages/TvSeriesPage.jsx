import { SideBar } from "../components/SideBar"
import { SearchBar } from "../components/SearchBar"
import { RecommendedCard } from "../components/RecommendedCard"
import './TvSeriesPage.css'
import { useMediaQuery } from "../customHooks/useMediaQuery"

export function TvSeriesPage({ filmsData, setFilmsData,  currentPage, setCurrentPage, searching, setSearching, searchResults, setSearchResults }) {

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <div className="tv-page-layout">
            {
                !isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            {searching.search === false ?
                <div className="main-part-movies">
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    <h2>TV Series</h2>
                    <div className={isSmallDevice ? "tv-grid-tablet" : "tv-grid"}>
                        {filmsData && filmsData.length > 0 &&
                            filmsData.map((movie, index) => {
                                if (movie.category === 'TV Series') {
                                    return <RecommendedCard key={index} movieData={movie} filmsData={filmsData} setFilmsData={setFilmsData} />
                                }
                            })
                        }
                    </div>
                </div>
                : <div className="main-part-movies">
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
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
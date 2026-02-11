import { SideBar } from "../components/SideBar"
import { SearchBar } from "../components/SearchBar"
import { RecommendedCard } from "../components/RecommendedCard"
import './TvSeriesPage.css'
import { useMediaQuery } from "../customHooks/useMediaQuery"

export function TvSeriesPage({ filmsData, currentPage, setCurrentPage }) {

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <div className="tv-page-layout">
            {
                !isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            <div className="main-part-movies">
                {isSmallDevice &&
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                }
                <SearchBar></SearchBar>
                <h2>TV Series</h2>
                <div className={isSmallDevice ? "tv-grid-tablet" : "tv-grid"}>
                    {filmsData && filmsData.length > 0 &&
                        filmsData.map((movie, index) => {
                            if (movie.category === 'TV Series') {
                                return <RecommendedCard key={index} movieData={movie} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
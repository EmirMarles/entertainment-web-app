import { SideBar } from "../components/SideBar"
import { SearchBar } from "../components/SearchBar"
import { RecommendedCard } from "../components/RecommendedCard"
import './MoviesPage.css'
import { useMediaQuery } from "../customHooks/useMediaQuery"

export function MoviesPage({ filmsData, currentPage, setCurrentPage }) {

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <div className="movie-page-layout">
            {
                !isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            <div className="main-part-movies">
                {isSmallDevice &&
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                }
                <SearchBar filmsData={filmsData}></SearchBar>
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
        </div>
    )
}
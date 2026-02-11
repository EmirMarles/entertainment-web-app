import './BookMarked.css'
import { SideBar } from '../components/SideBar'
import { SearchBar } from '../components/SearchBar'
import { useMediaQuery } from '../customHooks/useMediaQuery'
import { RecommendedCard } from '../components/RecommendedCard'

export function BookMarked({ filmsData, setFilmsData, currentPage, setCurrentPage }) {

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <div className='bookmarked-page-layout'>
            {!isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            <div className='bookmarked-main-content'>
                {isSmallDevice &&
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                }
                <SearchBar filmsData={filmsData}></SearchBar>
                <div className="bookmark-movies">
                    <h4>Bookmarked movies</h4>
                    <div className="bookmarked-movied-grid">
                        {filmsData && filmsData.length > 0 &&
                            filmsData.map((movieData) => {
                                if (movieData.isBookmarked && movieData.category === 'Movie') {
                                    return <RecommendedCard movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData} />
                                }
                            })
                        }
                    </div>
                </div>
                <div className="bookmark-series">
                    <h4>Bookmarked tv series</h4>
                    <div className="bookmarked-movied-grid">
                        {filmsData && filmsData.length > 0 &&
                            filmsData.map((movieData) => {
                                if (movieData.isBookmarked && movieData.category === 'TV Series') {
                                    return <RecommendedCard movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
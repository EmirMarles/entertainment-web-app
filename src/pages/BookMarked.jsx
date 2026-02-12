import './BookMarked.css'
import { SideBar } from '../components/SideBar'
import { useMediaQuery } from '../customHooks/useMediaQuery'
import { RecommendedCard } from '../components/RecommendedCard'
import { useWindowWidth } from '../customHooks/useWindowWidth'
import { useEffect } from 'react'

export function BookMarked({ filmsData, setFilmsData, currentPage, setCurrentPage }) {

    const isSmallDevice = useMediaQuery('(max-width : 1200px)')
    const width = useWindowWidth()


    useEffect(()=>{
        console.log('width inside bookmark page', width)
    },[width])

    return (
        <div className={isSmallDevice ? "bookmark-small" : 'bookmarked-page-layout'}>
            {!isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            <div className='bookmarked-main-content'>
                {isSmallDevice &&
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                }
                {/* <SearchBar filmsData={filmsData}></SearchBar> */}
                <div className="bookmark-movies">
                    <h4>Bookmarked movies</h4>
                    <div className={isSmallDevice ? (width <= 955 ?  "phone-grid" : "bookmarked-movied-grid-tablet") : "bookmarked-movied-grid"}>
                        {filmsData && filmsData.length > 0 &&
                            filmsData.map((movieData) => {
                                if (movieData.isBookmarked && movieData.category === 'Movie') {
                                    return <RecommendedCard movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData} width={width} />
                                }
                            })
                        }
                    </div>
                </div>
                <div className="bookmark-series">
                    <h4>Bookmarked tv series</h4>
                    <div className={isSmallDevice ? (width <= 600 ?  "phone-grid" : "bookmarked-movied-grid-tablet") : "bookmarked-movied-grid"}>
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
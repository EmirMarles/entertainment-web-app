import './HomePage.css'
import { SideBar } from '../components/SideBar'
import { SearchBar } from '../components/SearchBar'
import { Trending } from '../components/Trending'
import { getTrending } from '../utils/dataHelper'
import { useEffect, useState } from 'react'
import { RecommendedForYou } from '../components/RecommendedForYou'
import { useWindowWidth } from '../customHooks/useWindowWidth'
import { useMediaQuery } from '../customHooks/useMediaQuery'

export function HomePage({ filmsData, setFilmsData, currentPage, setCurrentPage, bookMarkedMovies, setBookMarkedMovies }) {

    const [trendingMovies, setTrendingMovies] = useState(() => {
        const tredningMovies = getTrending(filmsData)
        return tredningMovies ? tredningMovies : []
    })

    const width = useWindowWidth()

    useEffect(() => {
        console.log('new width:', width)
    }, [width])

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <div className='home-page-layout'>
            {!isSmallDevice &&
                <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
            }
            <div className="main-content">
                {isSmallDevice &&
                    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                }
                <SearchBar></SearchBar>
                {/* <Trending trendingMovies={trendingMovies}></Trending> */}
                <RecommendedForYou filmsData={filmsData} setFilmsData={setFilmsData} bookMarkedMovies={bookMarkedMovies} setBookMarkedMovies={setBookMarkedMovies}></RecommendedForYou>
            </div>
        </div>
    )
}
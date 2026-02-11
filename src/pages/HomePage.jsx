import './HomePage.css'
import { SideBar } from '../components/SideBar'
import { SearchBar } from '../components/SearchBar'
import { Trending } from '../components/Trending'
import { getTrending } from '../utils/dataHelper'
import { useEffect, useState } from 'react'
import { RecommendedForYou } from '../components/RecommendedForYou'
import { useWindowWidth } from '../customHooks/useWindowWidth'
import { useMediaQuery } from '../customHooks/useMediaQuery'
import { RecommendedCard } from '../components/RecommendedCard'

export function HomePage({ filmsData, setFilmsData, currentPage, setCurrentPage, searching, setSearching, searchResults, setSearchResults }) {

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
            {searching.search === false ?
                <div className="main-content">
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    {/* <Trending trendingMovies={trendingMovies}></Trending> */}
                    <RecommendedForYou filmsData={filmsData} setFilmsData={setFilmsData}></RecommendedForYou>
                </div>
                : <div className="main-content">
                    {isSmallDevice &&
                        <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage}></SideBar>
                    }
                    <SearchBar filmsData={filmsData} searching={searching} setSearching={setSearching} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
                    {searching.loading === true
                        ? <p>Loading...</p>
                        :
                        <div>
                            {searching.results === 'not-found'
                                ? <p>Nothing found!</p>
                                :
                                searchResults.length > 0
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
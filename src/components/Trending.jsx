import './Trending.css'
import { TrendingCard } from './TrendingCard'

export function Trending({ trendingMovies }) {

    return (
        <>
            <h4>Trending</h4>
            <div className='trending-carousel'>
                {trendingMovies && trendingMovies.length > 0 &&
                    trendingMovies.map((movieData, index) => {
                        return <TrendingCard key={index} movieData={movieData} ></TrendingCard>
                    })
                }
            </div>
        </>
    )
}
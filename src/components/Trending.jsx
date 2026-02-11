import './Trending.css'
// import img from '../../starter-code/assets/thumbnails/bottom-gear/trending/small.jpg'
import { TrendingCard } from './TrendingCard'

export function Trending({ trendingMovies }) {

    const firstMovie = trendingMovies[0]

    const movie = {
        "title": "Beyond Earth",
        "thumbnail": {
            "trending": {
                "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
                "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
            },
            "regular": {
                "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
                "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
                "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
            }
        },
        "year": 2019,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true
    }

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
import './TrendingCard.css'
// import movieCategory from '/assets/icon-category-movie.svg'
// import tvCategory from '/assets/icon-category-tv.svg'
import { useState } from 'react'


import emptyBookMark from '../../src/assets/icon-bookmark-empty.svg'
import fullBookMark from '../../src/assets/icon-bookmark-full.svg'

import iconCategoryTv from '../../src/assets/icon-category-tv.svg'
import iconCategoryMovie from '../../src/assets/icon-category-movie.svg'


export function TrendingCard({ movieData }) {

    const [bookmarked, setBookMarked] = useState(false)


    const toggleBookmarked = () => {
        setBookMarked(!bookmarked)
    }

    return (
        <div className="card">
            <img src={movieData?.thumbnail.trending.large} alt="poster" />
            <div className="bookmark-container" onClick={toggleBookmarked}>
                {bookmarked
                    ? <img src={fullBookMark} alt='full bookmark' className='bookmark' />
                    : <img src={emptyBookMark} alt="empty bookmark" className="bookmark" />
                }
            </div>
            <div className="movie-data">
                <div className="movie-subdata">
                    <p className="year">{movieData?.year}</p>
                    <p className="category-paragraph">

                        {movieData.category === 'Movie'
                            ? <img src={iconCategoryMovie} alt="movie logo" />
                            : <img src={iconCategoryTv} alt="movie logo" />
                        }
                        {/* <img src={categoryImg} alt="movie logo" /> */}
                        {movieData?.category}
                    </p>
                    <p className="age-rating">{movieData.rating}</p>
                </div>
                <h4 className="movie-name">{movieData.title}</h4>
            </div>
        </div>
    )
}
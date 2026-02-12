import './RecommendedCard.css'
import emptyBookMark from '../../src/assets/icon-bookmark-empty.svg'
import fullBookMark from '../../src/assets/icon-bookmark-full.svg'
import iconCategoryTv from '../../src/assets/icon-category-tv.svg'
import iconCategoryMovie from '../../src/assets/icon-category-movie.svg'

export function RecommendedCard({ movieData, setFilmsData, filmsData, width }) {

    const handleAddRemoveBookMark = () => {
        let newFilmsData = [...filmsData]

        const action = movieData.isBookmarked === true ? 'delete' : 'add'

        for (let i = 0; i < newFilmsData.length; i++) {
            if (newFilmsData[i].title === movieData.title) {
                if (action === 'add') {
                    newFilmsData[i].isBookmarked = true
                    break
                }
                else if (action === 'delete') {
                    newFilmsData[i].isBookmarked = false
                    break
                }
            }
        }
        setFilmsData(newFilmsData)
    }

    return (
        <div className={width < 600 ? "recom-card phone" : "recom-card"}>
            <img src={movieData?.thumbnail.regular.large} alt="poster" />
            <div className="bookmark-container" onClick={handleAddRemoveBookMark}>
                {movieData?.isBookmarked
                    ? <img src={fullBookMark} alt='full bookmark' className='bookmark' />
                    : <img src={emptyBookMark} alt="empty bookmark" className="bookmark" />
                }
            </div>
            <div className="rec-movie-data">
                <div className="rec-movie-subdata">
                    <p className="year">{movieData?.year}</p>
                    <p className="category-paragraph">
                        {movieData.category === 'Movie'
                            ? <img src={iconCategoryMovie} alt="movie logo" />
                            : <img src={iconCategoryTv} alt="movie logo" />
                        }
                        {movieData?.category}
                    </p>
                    <p className="age-rating">{movieData.rating}</p>
                </div>
                <h4 className="movie-name">{movieData.title}</h4>
            </div>
        </div>
    )
}
import './RecommendedForYou.css'
import { RecommendedCard } from './RecommendedCard'
import { useMediaQuery } from '../customHooks/useMediaQuery'

export function RecommendedForYou({ filmsData, setFilmsData }) {

    const isSmallDevice = useMediaQuery('(max-width : 900px)')

    return (
        <>
            <h4>Recommended for you</h4>
            <div className={isSmallDevice ? 'tablet-grid' : 'recommendation-grid'}>
                {filmsData && filmsData.length > 0
                    && filmsData.map((movieData, index) => {
                        return <RecommendedCard key={index} index={index} movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData} />
                    })
                }
            </div>
        </>
    )
}
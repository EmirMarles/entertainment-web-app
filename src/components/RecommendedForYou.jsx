import './RecommendedForYou.css'
import { RecommendedCard } from './RecommendedCard'
import { useMediaQuery } from '../customHooks/useMediaQuery'

export function RecommendedForYou({ filmsData, setFilmsData, width }) {

    const isSmallDevice = useMediaQuery('(max-width : 1200px)')

    return (
        <>
            <h4>Recommended for you</h4>
            <div className={isSmallDevice ? ( width < 600 ? 'phone-grid' : 'tablet-grid') : 'recommendation-grid'}>
                {filmsData && filmsData.length > 0
                    && filmsData.map((movieData, index) => {
                        return <RecommendedCard key={index} index={index} movieData={movieData} filmsData={filmsData} setFilmsData={setFilmsData} width={width}/>
                    })
                }
            </div>
        </>
    )
}
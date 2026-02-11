export function getTrending(movies){

    let trendingMovies = []
    let j = 0
    for (let i = 0; i < movies.length; i++){
        if (movies[i].isTrending === true){
            trendingMovies[j] = movies[i]
            j++
        }
    }
    return trendingMovies
}
export const getMovies = async (searchTest) => {
    try {
        const res = await fetch(`http://www.omdbapi.com/?s=${searchTest}&apikey=b4b13098`)
        const data = await res.json()
        return data
    } catch (error) {
        alert(error)
    }


}
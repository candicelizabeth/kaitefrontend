class MovieApi {
    constructor(port){
        this.baseUrl = `${port}/movies`
    }

    getMovies(){
        fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(movies => {
            for (const movie of movies){
                const i = new Movie(movie)
                i.toDOM()
            }
        })
    }
}
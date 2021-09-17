class Movie {
    static ul = document.getElementById('movie-list');
    constructor({name, id, list_id, description}){
        this.name = name 
        this.id = id 
        this.list_id = list_id
        this.description = description
        this.element = document.createElement('li');
    }

    render = () => {
        this.element.innerText = this.name 
        return this.element
    }
        
       
   

    toDOM(){
        Movie.ul.appendChild(this.render())
    }
}
const input = document.querySelector("input")
const button = document.querySelector("button")

const movieSearch = async () => {

    try {
        let movieName = input.value ;

        let url = await fetch (`https://www.omdbapi.com/?t=${movieName}&apikey=a2f5719c`) ;
        
        let data = await url.json() ;
        console.log(data);
        document.querySelector(".movieDetails").innerHTML = `
        <img src="${data.Poster}" alt="">
        <div class="info">
            <h2>${data.Title}</h2>
            <p>Released : ${data.Year}</p>
            <p>Duration : ${data.Runtime}</p>
            <p>IMDB : ${data.imdbRating}</p>
            <p>${data.Plot}</p>
            <p>Director : ${data.Director}</p>
            <p>Actors : ${data.Actors}</p>

        </div>` 

        if(data.Response == "False"){
            throw new Error ('Movie Not Found') ;
        }
        
        input.value = "" ;
    }
    
    catch (error) {
        document.querySelector(".movieDetails").innerHTML = `<div class="error">MOVIE NOT FOUND</div>`
        console.log(error) ;
    }
}


button.addEventListener("click", () => {
    movieSearch();
})

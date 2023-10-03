const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f5c0a8c2530bfc67b5d4ca6b6ffea750&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a0814a81d9e0ea8e164320078c18b3cb&query="';



const main=document.getElementById('main');
const search=document.getElementById('search');
const form= document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchTerm=search.value 
    if(searchTerm && searchTerm !==''){ 
        getMovie(SEARCH_API+searchTerm)
        search.value='';
}else{ 
    window.location.reload()
}
});




const movies=getMovie(API_URL)
async function getMovie(url) {
    const res= await fetch(url);
    const data= await res.json();
    // console.log(data);
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML='';
    movies.forEach(movie=> {
        const {title,poster_path,vote_average,overview}=movie;
        console.log(voteMin);
        console.log(vote_average);
        if (vote_average > voteMin) {

        
        const movieEl=document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML=`
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3> ${overview}
            <button onclick = "showonly(title)" style="font-size:25px; background-color: purple" >MORE INFORMATION</button>
        </div>
        `
        main.appendChild(movieEl)
        }
    });
}


function getClassByRate(vote){
    if(vote>=8){
        return "green"
    } 
    else if (vote>=5){
        return "orange"
    } 
    else {
        return "red"
    }
}



function color1(){
    col1=document.getElementById("color1").value;

    document.getElementById("main").style.backgroundColor=col1;
}

function color2(){
    col2=document.getElementById("color2").value;

    document.getElementById("main").style.borderColor=col2;
}
function select1(){
    sel1=document.getElementById("Select1").value;
    //console.log(sel1);
    document.getElementById("main").style.border=sel1;
}
function select2(){
    sel2=document.getElementById("Select2").value;

    document.getElementById("main").style.borderWidth=`${sel2}px`;
}

 let voteMin=0;
function select3(){
    voteMin = document.getElementById("Select3").value;
    console.log(voteMin);     
}

function showonly(title){
    // console.log(title.textcontent);


main.innerHTML="";

    // const {title, poster_path, vote_average,overview}=movie;
    // const movieE1=document.createElement('div');
    // movieE1.classList.add('movie');

    // movieE1.innerHTML=`<div class="m"> <img src="${IMG_PATH + poster_path}"> </div>
    // <span class="s"> Rate : ${vote_average} </span>
    // <div class="overview">
    // <h3>Overview</h3>
    // ${overview} </div>`
    
    // main.appendChild(movieE1);
}
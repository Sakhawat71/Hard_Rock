
/* document.getElementById("search-option").addEventListener("click", function(){
    console.log("clicked by event listener")
})
*/
// 1st function
const searchSong = () =>{

    const searchInput = document.getElementById("search-input").value;
    const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
    fetch(url)
    .then(res => res.json())
    .then(dataAll => displaySong(dataAll.data));

}

//2nd function
const displaySong = songs =>{
    console.log(songs);
    const songContainer = document.getElementById("");
    songs.forEach(songs => {
        const li = document.createElement('li');
        li.innerText = songs.titel;
        
    });

}
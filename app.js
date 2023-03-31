
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

    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = ``;

    songs.forEach(songs => {
        const SongsDiv = document.createElement('div');
        SongsDiv.className = "single-result row align-items-center my-3 p-3";
        SongsDiv.innerHTML = `
            <div class="col-md-9">
                <h3 class="lyrics-name">${songs.title}</h3>
                <p class="author lead">Album by <span>${songs.artist.name}</span></p>
                <audio controls>
                    <source src="${songs.preview}" type="audio/mpeg">
                </audio>
                </div>
            
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        `
        songContainer.appendChild(SongsDiv);
    });

}
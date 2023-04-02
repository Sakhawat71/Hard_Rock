
/* document.getElementById("search-option").addEventListener("click", function(){
    console.log("clicked by event listener")
})
*/
// 1st function

// const searchSong = () =>{

//     const searchInput = document.getElementById("search-input").value;
//     const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(dataAll => displaySong(dataAll.data));

// }

// 1st function useing async await
const searchSong = async() => {
    const searchInput = document.getElementById("search-input").value;
    try{
        const url = `https://api.lyrics.ovh/suggest/${searchInput}`;
        const res = await fetch(url);
        const allData =await res.json();
        displaySong(allData.data);
    }
    catch(error){
        errorShow("sorry something is worong !");
    }

}

//2nd function
const displaySong = songs =>{

    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = ``;
    lyricsDiv.innerText = ``;

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
                <button onclick="getLyrics('${songs.artist.name}','${songs.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `
        songContainer.appendChild(SongsDiv);
    });

}

// 3rd function

const getLyrics = (artist,title) => {
    // https://api.lyrics.ovh/v1/artist/title
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyrics(data.lyrics))
    .catch(error = errorShow(error));
}

// 4th function

const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById("lyricsDiv");
    lyricsDiv.innerText = lyrics;
}

const errorShow = error =>{
    const errorP = document.getElementById("errorP");
    errorP.innerText = error;
}
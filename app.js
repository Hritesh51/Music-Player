const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('previous');
const next = document.getElementById('forward');

const songs = [
    {
        name:"Khabbi Seat",
        title:"Khabbi Seat",
        artist:"Ammy Virk",
    },
    {
        name:"Talja",
        title:"Talja",
        artist:"Gur Sidhu",
    },
    {
        name:"mexico",
        title:"mexico",
        artist:"Karan Aujla",
    },
];

let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
}


const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
}

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
})

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

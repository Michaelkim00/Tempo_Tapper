import React from 'react';

function PlayRandomButton() {
    const playRandomSong = () => {
        const songs = [
            { name: "Bops Goin Brazy", bpm: 116 },
            { name: "Finesse", bpm: 105 },
            // Add more songs as needed
        ];

        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];

        const audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = `/songs/${randomSong.name}.mp3`;
        audioPlayer.play();
    };

    return (
        <button onClick={playRandomSong}>Play Random Song</button>
    );
}

export default PlayRandomButton;
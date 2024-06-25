import React from 'react';
import PlayRandomButton from './PlayRandomButton';
import AudioPlayer from './AudioPlayer';

function SongControls() {
    return (
        <div className="song-controls">
            <PlayRandomButton />
            <AudioPlayer/>
        </div>
    );
}

export default SongControls;
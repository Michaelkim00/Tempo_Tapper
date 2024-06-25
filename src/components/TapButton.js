import React, {useState} from 'react';

function TapButton() {
    const [tapTimes, setTapTimes] = useState([]);

    const tap = () => {
        const currentTime = new Date();
        setTapTimes([...tapTimes, currentTime]);

        if (tapTimes.length > 1) {
            const averageTimeInterval = tapTimes.slice(1).reduce((sum, time, index) => {
                const previousTime = tapTimes[index];
                return sum + (time - previousTime);
            }, 0) / (tapTimes.length - 1);

            const bpm = Math.round(60 / (averageTimeInterval / 1000));
            document.getElementById("bpmDisplay").textContent = `BPM: ${bpm}`;
        }
    };

    return (
        <button onClick={tap}>Tap to the Beat!</button>
    );
}

export default TapButton;

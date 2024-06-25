import React, {useState} from 'react';

function ResetButton() {
    const [tapTimes, setTapTimes] = useState([]);

    const reset = () => {
        setTapTimes([]);
        document.getElementById("bpmDisplay").textContent = "BPM: ---";
    };

    return (
        <button onClick={reset} className="reset-button">Reset</button>
    );
}

export default ResetButton;
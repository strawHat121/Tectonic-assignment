import React, { useEffect, useState } from "react";

interface ProgressBarProps {
    duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => Math.min(prev + 1, 100));
        }, duration / 100);

        return () => clearInterval(interval);
    }, [duration]);

    return <div className="progress-bar" style={{ width: `${progress}%` }} />;
};

export default ProgressBar;

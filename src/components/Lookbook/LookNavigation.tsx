import React from "react";

interface LookNavigationProps {
    onPrev: () => void;
    onNext: () => void;
    lookCount: number;
    currentLookIndex: number;
}

const LookNavigation: React.FC<LookNavigationProps> = ({
    onPrev,
    onNext,
    lookCount,
    currentLookIndex,
}) => {
    return (
        <div className="look-navigation">
            <button onClick={onPrev} disabled={currentLookIndex === 0}>
                Prev
            </button>
            <span>
                Look {currentLookIndex + 1} of {lookCount}
            </span>
            <button onClick={onNext} disabled={currentLookIndex === lookCount - 1}>
                Next
            </button>
        </div>
    );
};

export default LookNavigation;

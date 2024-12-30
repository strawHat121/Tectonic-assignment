import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import MediaViewer from "./MediaViewer";
import { Look } from "../../types/types";

interface LookbookProps {
    looks: Look[];
}

const Lookbook: React.FC<LookbookProps> = ({ looks }) => {
    const [currentLookIndex, setCurrentLookIndex] = useState(0);

    const goToNextLook = () => {
        if (currentLookIndex < looks.length - 1) {
            setCurrentLookIndex(currentLookIndex + 1);
        }
    };

    const goToPrevLook = () => {
        if (currentLookIndex > 0) {
            setCurrentLookIndex(currentLookIndex - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedUp: goToNextLook,
        onSwipedDown: goToPrevLook,
        trackMouse: true, // Enables mouse-based swipe gestures
    });

    return (
        <div {...swipeHandlers} className="lookbook">
            <div className="lookbook-scroll-container">
                {looks.map((look, index) => (
                    <div
                        key={index}
                        className="media-item"
                        style={{
                            display: currentLookIndex === index ? "block" : "none",
                        }}
                    >
                        {look.media.map((media, idx) => (
                            <MediaViewer
                                key={idx}
                                media={media}
                                products={media.products || []}
                                onMediaComplete={goToNextLook}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lookbook;

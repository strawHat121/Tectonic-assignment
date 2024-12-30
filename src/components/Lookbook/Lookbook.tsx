import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import MediaViewer from "./MediaViewer";
import { Look } from "../../types/types";

interface LookbookProps {
    looks: Look[];
}

const Lookbook: React.FC<LookbookProps> = ({ looks }) => {
    const [currentLookIndex, setCurrentLookIndex] = useState(0);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    //  const isScrolling = useRef(false);

    const currentLook = looks[currentLookIndex];
    const currentMedia = currentLook.media[currentMediaIndex];

    // Auto-scroll to next media
    const goToNextMedia = () => {
        if (currentMediaIndex < currentLook.media.length - 1) {
            setCurrentMediaIndex(currentMediaIndex + 1);
        } else if (currentLookIndex < looks.length - 1) {
            setCurrentLookIndex(currentLookIndex + 1);
            setCurrentMediaIndex(0);
        }
    };

    const goToPrevMedia = () => {
        if (currentMediaIndex > 0) {
            setCurrentMediaIndex(currentMediaIndex - 1);
        } else if (currentLookIndex > 0) {
            setCurrentLookIndex(currentLookIndex - 1);
            setCurrentMediaIndex(looks[currentLookIndex - 1].media.length - 1);
        }
    };

    // Handle swipe gestures
    const swipeHandlers = useSwipeable({
        onSwipedUp: goToNextMedia,
        onSwipedDown: goToPrevMedia,
        trackMouse: true,
    });

    // Handle auto-scroll with a timer for images
    useEffect(() => {
        if (currentMedia.type === "image") {
            const timer = setTimeout(goToNextMedia, 5000); // Auto-scroll after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [currentMedia, goToNextMedia]);

    return (
        <div {...swipeHandlers} className="lookbook">
            <div className="lookbook-scroll-container">
                {looks.map((look, lookIndex) => (
                    <div
                        key={lookIndex}
                        className={`media-item ${currentLookIndex === lookIndex ? "active" : ""
                            }`}
                        style={{
                            display: currentLookIndex === lookIndex ? "block" : "none",
                        }}
                    >
                        {look.media.map((media, mediaIndex) => (
                            <MediaViewer
                                key={mediaIndex}
                                media={media}
                                products={media.products || []}
                                onMediaComplete={goToNextMedia}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lookbook;

import React, { useRef, useState, useEffect } from "react";
import MediaViewer from "./MediaViewer";
import { Look } from "../../types/types";

interface LookbookProps {
    looks: Look[];
}

const Lookbook: React.FC<LookbookProps> = ({ looks }) => {
    const [currentLookIndex, setCurrentLookIndex] = useState(0);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const isScrolling = useRef(false); // To prevent skipping multiple items per scroll

    const currentLook = looks[currentLookIndex];
    const currentMedia = currentLook.media[currentMediaIndex];

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

    const handleScroll = (e: WheelEvent) => {
        if (isScrolling.current) return; // Prevent additional scroll actions during debounce
        isScrolling.current = true;

        const delta = e.deltaY;
        if (delta > 0) {
            goToNextMedia();
        } else if (delta < 0) {
            goToPrevMedia();
        }

        // Reset the scrolling state after a delay
        setTimeout(() => {
            isScrolling.current = false;
        }, 500); // Adjust delay as needed
    };

    useEffect(() => {
        const handleScrollEvent = (e: WheelEvent) => {
            e.preventDefault(); // Prevent default scrolling
            handleScroll(e);
        };

        window.addEventListener("wheel", handleScrollEvent, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScrollEvent);
        };
    }, [currentMediaIndex, currentLookIndex]);

    return (
        <div className="lookbook">
            <MediaViewer
                media={currentMedia}
                products={currentMedia.products || []}
                onMediaComplete={goToNextMedia}
            />
        </div>
    );
};

export default Lookbook;

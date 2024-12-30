import React, { useRef, useEffect, useState } from "react";
import ProductCarousel from "../Products/ProductCarousel";
import { Product } from "../../types/types";

interface VideoPlayerProps {
    src: string;
    products: Product[];
    onComplete: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, products, onComplete }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const productRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for products
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener("ended", onComplete);
        }
        return () => {
            if (video) {
                video.removeEventListener("ended", onComplete);
            }
        };
    }, [onComplete]);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="media-viewer">
            {/* Video Section */}
            <div className="video-container">
                <video
                    ref={videoRef}
                    src={src}
                    autoPlay
                    muted={isMuted}
                    controls={false}
                    playsInline
                />
                <button className="mute-button" onClick={toggleMute}>
                    {isMuted ? "🔇" : "🔊"}
                </button>
            </div>

            {/* Product List Overlay */}
            <ProductCarousel
                products={products}
                productRefs={productRefs} // Pass refs to ProductCarousel
            />
        </div>
    );
};

export default VideoPlayer;

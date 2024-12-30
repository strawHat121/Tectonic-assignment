import React from "react";
import ImageWithAnnotations from "../Media/ImageWithAnnotations";
import VideoPlayer from "../Media/VideoPlayer";
import { Media, Product } from "../../types/types";

interface MediaViewerProps {
    media: Media;
    products: Product[];
    onMediaComplete: () => void;
}

const MediaViewer: React.FC<MediaViewerProps> = ({
    media,
    products,
    onMediaComplete,
}) => {
    return (
        <div className="media-viewer">
            {media.type === "image" ? (
                <ImageWithAnnotations
                    src={media.src}
                    products={products}
                    onComplete={onMediaComplete}
                />
            ) : (
                <VideoPlayer src={media.src} products={products} onComplete={onMediaComplete} />
            )}
        </div>
    );
};

export default MediaViewer;

import React, { useEffect, useRef } from "react";
import AnnotationButton from "../common/AnnotationButton";
import ProgressBar from "../Lookbook/ProgressBar";
import ProductCarousel from "../Products/ProductCarousel";
import { Product } from "../../types/types";
import { IMAGE_PREVIEW_DURATION } from "../../utils/constants";

interface ImageWithAnnotationsProps {
    src: string;
    products: Product[];
    onComplete: () => void;
}

const ImageWithAnnotations: React.FC<ImageWithAnnotationsProps> = ({
    src,
    products,
    onComplete,
}) => {
    const productRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for products

    useEffect(() => {
        const timer = setTimeout(onComplete, IMAGE_PREVIEW_DURATION); // Automatically move to the next media after 5 seconds
        return () => clearTimeout(timer);
    }, [onComplete]);

    // Handle annotation click to scroll to the corresponding product
    const handleAnnotationClick = (productIndex: number) => {
        const productElement = productRefs.current[productIndex];
        if (productElement) {
            productElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };

    return (
        <div className="media-viewer">
            {/* Image Section */}
            <div className="image-container">
                <img src={src} alt="Look" />
                {products.map((product, index) => (
                    <AnnotationButton
                        key={product.id}
                        x={product.x}
                        y={product.y}
                        label={product.name}
                        onClick={() => handleAnnotationClick(index)} // Scroll on click
                    />
                ))}
                <ProgressBar duration={5000} />
            </div>

            {/* Product List Overlay */}
            <ProductCarousel
                products={products}
                productRefs={productRefs} // Pass refs to ProductCarousel
            />
        </div>
    );
};

export default ImageWithAnnotations;

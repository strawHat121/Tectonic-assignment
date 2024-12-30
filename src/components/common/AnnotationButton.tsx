import React from "react";

interface AnnotationButtonProps {
    x: number; // X-coordinate percentage
    y: number; // Y-coordinate percentage
    label: string; // Label for the product
    onClick: () => void; // Click handler
}

const AnnotationButton: React.FC<AnnotationButtonProps> = ({ x, y, label, onClick }) => {
    return (
        <div
            className="annotation-button"
            style={{ top: `${y}%`, left: `${x}%`, position: "absolute" }}
        >
            <button
                className="annotation-dot"
                onClick={onClick}
                title={label}
                aria-label={label}
            >
                •
            </button>
        </div>
    );
};

export default AnnotationButton;

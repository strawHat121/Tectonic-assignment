import React from "react";
import { Product } from "../../types/types";

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ✖
                </button>
                <img src={product.image} alt={product.name} className="modal-image" />
                <h2>{product.name}</h2>
                <p className="modal-price">€{product.price}</p>
                <a
                    href={product.shopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-shop-link"
                >
                    Go to Product Page
                </a>
            </div>
        </div>
    );
};

export default ProductModal;

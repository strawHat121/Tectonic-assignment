import React, { useState } from "react";
import ProductModal from "./ProductModal";
import { Product } from "../../types/types";

interface ProductCarouselProps {
    products: Product[];
    productRefs: React.MutableRefObject<(HTMLDivElement | null)[]>; // Refs for products
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, productRefs }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleShopClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <div className="products-container">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className="product-item"
                        ref={(el) => (productRefs.current[index] = el)} // Assign ref to each product
                    >
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <p>{product.name}</p>
                            <p className="price">€{product.price}</p>
                        </div>
                        <button
                            className="shop-button"
                            onClick={() => handleShopClick(product)} // Open modal
                        >
                            SHOP
                        </button>
                    </div>
                ))}
            </div>

            {/* Render Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default ProductCarousel;

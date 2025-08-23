import { type Product } from "@shared/schema";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="group" data-testid={`product-card-${product.id}`}>
      <div className="relative overflow-hidden rounded-xl mb-4">
        {imageLoading && (
          <div className="w-full h-60 md:h-80 bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}
        {imageError ? (
          <div className="w-full h-60 md:h-80 bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🖼️</div>
              <div className="text-sm">Image not available</div>
            </div>
          </div>
        ) : (
          <img 
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-60 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300 ${imageLoading ? 'hidden' : 'block'}`}
            data-testid={`product-image-${product.id}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
        {product.isNew === "true" && (
          <div className="absolute top-4 right-4 bg-clara-pink text-white px-3 py-1 text-sm font-medium rounded-full" data-testid={`product-new-badge-${product.id}`}>
            New
          </div>
        )}
      </div>
      <h3 className="font-medium text-gray-800 mb-1" data-testid={`product-name-${product.id}`}>
        {product.name}
      </h3>
      <p className="text-clara-pink font-semibold" data-testid={`product-price-${product.id}`}>
        {product.price}
      </p>
    </div>
  );
}

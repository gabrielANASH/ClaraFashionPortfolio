import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group" data-testid={`product-card-${product.id}`}>
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-60 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`product-image-${product.id}`}
        />
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

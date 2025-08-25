import { useQuery } from "@tanstack/react-query";
import { type Product, type Collection } from "@shared/schema";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: collections, isLoading: collectionsLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });

  const categories = [
    { id: "all", name: "All Products" },
    { id: "dresses", name: "Dresses" },
    { id: "tops", name: "Tops" },
    { id: "blazers", name: "Blazers" },
    { id: "skirts", name: "Skirts" },
    { id: "trousers", name: "Trousers" },
    { id: "sweaters", name: "Sweaters" }
  ];

  const filteredProducts = products?.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  return (
    <div className="bg-gray-50 text-gray-800 font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-clara-cream" data-testid="collections-hero">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6" data-testid="collections-hero-title">
              Our <span className="text-clara-pink italic">Collections</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="collections-hero-description">
              Discover our complete range of elegant, contemporary pieces designed to celebrate your unique style and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white" data-testid="featured-collections">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4" data-testid="featured-collections-title">
              Featured <span className="text-clara-pink italic">Collections</span>
            </h2>
            <p className="text-lg text-gray-600" data-testid="featured-collections-description">
              Our signature collections that define the Clara aesthetic
            </p>
          </div>

          {collectionsLoading ? (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-80 rounded-2xl mb-6"></div>
                  <div className="bg-gray-300 h-8 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {collections?.map((collection) => (
                <div key={collection.id} className="group" data-testid={`featured-collection-${collection.id}`}>
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={collection.imageUrl}
                      alt={`${collection.name} collection`}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-playfair text-2xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-sm">{collection.description}</p>
                    </div>
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">{collection.name}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Filters and Grid */}
      <section className="py-20 bg-clara-peach/10" data-testid="products-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-8" data-testid="products-title">
              All <span className="text-clara-pink italic">Products</span>
            </h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-clara-pink text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-clara-blush hover:text-clara-pink border border-gray-200'
                  }`}
                  data-testid={`filter-${category.id}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {productsLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-60 md:h-80 rounded-xl mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" data-testid="products-grid">
                {filteredProducts?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {filteredProducts?.length === 0 && (
                <div className="text-center py-12" data-testid="no-products">
                  <p className="text-gray-500 text-lg">No products found in this category.</p>
                </div>
              )}
              
              <div className="text-center text-gray-600" data-testid="products-count">
                Showing {filteredProducts?.length || 0} of {products?.length || 0} products
              </div>
            </>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

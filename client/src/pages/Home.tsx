import { useQuery } from "@tanstack/react-query";
import { type Product, type Collection } from "@shared/schema";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

export default function Home() {
  const [homeImageError, setHomeImageError] = useState(false);
  const [homeImageLoading, setHomeImageLoading] = useState(true);
  const [collectionImageErrors, setCollectionImageErrors] = useState<{ [key: string]: boolean }>({});
  const [collectionImageLoading, setCollectionImageLoading] = useState<{ [key: string]: boolean }>({});

  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: collections, isLoading: collectionsLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });

  const handleHomeImageError = () => {
    setHomeImageError(true);
    setHomeImageLoading(false);
  };

  const handleHomeImageLoad = () => {
    setHomeImageLoading(false);
  };

  const handleCollectionImageError = (collectionId: string) => {
    setCollectionImageErrors(prev => ({ ...prev, [collectionId]: true }));
    setCollectionImageLoading(prev => ({ ...prev, [collectionId]: false }));
  };

  const handleCollectionImageLoad = (collectionId: string) => {
    setCollectionImageLoading(prev => ({ ...prev, [collectionId]: false }));
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-poppins">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-clara-cream" data-testid="about-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="about-title">
                Our <span className="text-clara-pink italic">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-1">
                Clara was born from a passion for creating clothing that empowers women to feel confident, elegant, and authentically themselves. Our journey began with a simple belief: fashion should be both beautiful and meaningful.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="about-description-2">
                Each piece in our collection is thoughtfully designed with attention to detail, quality craftsmanship, and timeless appeal. We celebrate the modern woman who values both style and substance.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm" data-testid="stat-customers">
                  <div className="text-3xl font-bold text-clara-pink font-playfair">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm" data-testid="stat-designs">
                  <div className="text-3xl font-bold text-clara-pink font-playfair">50+</div>
                  <div className="text-gray-600">Unique Designs</div>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-clara-pink hover:bg-clara-rose text-white" data-testid="about-cta-button">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              {homeImageLoading && (
                <div className="rounded-2xl shadow-xl w-full h-96 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              )}
              {homeImageError ? (
                <div className="rounded-2xl shadow-xl w-full h-96 bg-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🖼️</div>
                    <div>Image not available</div>
                  </div>
                </div>
              ) : (
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Fashion designer working in a bright, creative studio space"
                  className={`rounded-2xl shadow-xl w-full ${homeImageLoading ? 'hidden' : 'block'}`}
                  data-testid="about-image"
                  onError={handleHomeImageError}
                  onLoad={handleHomeImageLoad}
                />
              )}
              <div className="absolute -bottom-6 -left-6 bg-clara-pink text-white p-6 rounded-xl shadow-lg max-w-xs" data-testid="about-quote">
                <p className="font-playfair italic text-lg">"Fashion is art that you can wear"</p>
                <p className="text-sm mt-2 opacity-90">- Clara, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white" data-testid="featured-collections-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="collections-title">
              Featured <span className="text-clara-pink italic">Collections</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="collections-description">
              Explore our carefully curated collections that embody elegance, sophistication, and modern femininity.
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
                <div key={collection.id} className="group cursor-pointer" data-testid={`collection-card-${collection.id}`}>
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    {collectionImageLoading[collection.id] !== false && (
                      <div className="w-full h-80 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
                        <div className="text-gray-400">Loading...</div>
                      </div>
                    )}
                    {collectionImageErrors[collection.id] ? (
                      <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="text-4xl mb-2">🖼️</div>
                          <div className="text-sm">Collection image not available</div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={collection.imageUrl}
                          alt={`${collection.name} collection`}
                          className={`w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ${collectionImageLoading[collection.id] !== false ? 'hidden' : 'block'}`}
                          data-testid={`collection-image-${collection.id}`}
                          onError={() => handleCollectionImageError(collection.id)}
                          onLoad={() => handleCollectionImageLoad(collection.id)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    )}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2" data-testid={`collection-name-${collection.id}`}>
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`collection-description-${collection.id}`}>
                    {collection.description}
                  </p>
                  <Link href="/collections">
                    <button className="text-clara-pink hover:text-clara-rose font-medium group-hover:underline" data-testid={`collection-cta-${collection.id}`}>
                      View Collection →
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Gallery */}
      <section id="collections" className="py-20 bg-clara-peach/20" data-testid="products-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="products-title">
              Our <span className="text-clara-pink italic">Latest</span> Pieces
            </h2>
            <p className="text-lg text-gray-600" data-testid="products-description">
              Discover the newest additions to our collection
            </p>
          </div>

          {productsLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-60 md:h-80 rounded-xl mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" data-testid="products-grid">
              {products?.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link href="/collections">
              <Button className="bg-clara-pink hover:bg-clara-rose text-white px-10 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg" data-testid="view-all-products-button">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-white" data-testid="accessories-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-testid="accessories-title">
              Perfect <span className="text-clara-pink italic">Accessories</span>
            </h2>
            <p className="text-lg text-gray-600" data-testid="accessories-description">
              Complete your look with our curated selection of accessories
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Handbags", price: "From $95", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" },
              { name: "Jewelry", price: "From $45", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" },
              { name: "Sunglasses", price: "From $85", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" },
              { name: "Shoes", price: "From $125", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" }
            ].map((accessory, index) => (
              <div key={index} className="text-center group" data-testid={`accessory-${accessory.name.toLowerCase()}`}>
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`accessory-image-${accessory.name.toLowerCase()}`}
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2" data-testid={`accessory-name-${accessory.name.toLowerCase()}`}>
                  {accessory.name}
                </h3>
                <p className="text-gray-600" data-testid={`accessory-price-${accessory.name.toLowerCase()}`}>
                  {accessory.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

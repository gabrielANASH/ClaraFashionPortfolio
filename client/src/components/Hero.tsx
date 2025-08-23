import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleExploreClick = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        {imageLoading && (
          <div className="w-full h-full bg-gradient-to-r from-clara-pink/40 to-clara-lavender/40 animate-pulse"></div>
        )}
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-r from-clara-pink/60 to-clara-lavender/60"></div>
        ) : (
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&h=720"
            alt="Elegant fashion model in sophisticated pink attire"
            className={`w-full h-full object-cover ${imageLoading ? 'hidden' : 'block'}`}
            data-testid="hero-image"
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-clara-pink/20 to-clara-lavender/20"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4" data-testid="hero-content">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="hero-title">
          Elegance<br />
          <span className="text-clara-blush italic">Redefined</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light max-w-2xl mx-auto" data-testid="hero-description">
          Discover Clara's exquisite collection of contemporary fashion pieces that celebrate femininity and sophistication.
        </p>
        <Button 
          onClick={handleExploreClick}
          className="bg-clara-pink hover:bg-clara-rose text-white px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          data-testid="hero-cta-button"
        >
          Explore Collections
        </Button>
      </div>
    </section>
  );
}

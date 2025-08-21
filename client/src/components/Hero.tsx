import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleExploreClick = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g2cfccf6a0f5aa7f605536f3573b37044613dbfbdbd117d7bee78c04bd5eccb142dd3b11eaed3be46ad5b54058de68e9e5adfbd58b195a6323cedd4784d7ed45d_1280.jpg"
          alt="Elegant fashion model in sophisticated pink attire"
          className="w-full h-full object-cover"
          data-testid="hero-image"
        />
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

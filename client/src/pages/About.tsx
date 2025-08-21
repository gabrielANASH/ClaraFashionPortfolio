import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-clara-cream" data-testid="about-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6" data-testid="about-hero-title">
              About <span className="text-clara-pink italic">Clara</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="about-hero-description">
              Our journey of creating timeless fashion that celebrates the modern woman's elegance, confidence, and individuality.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white" data-testid="story-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Fashion designer working in a bright, creative studio space"
                className="rounded-2xl shadow-xl w-full"
                data-testid="story-image"
              />
            </div>
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6" data-testid="story-title">
                Founded on <span className="text-clara-pink italic">Passion</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="story-paragraph-1">
                Clara was founded in 2020 with a vision to create clothing that transcends trends and seasons. Our founder, Clara Martinez, spent years working in the fashion industry before deciding to launch her own brand focused on sustainable, elegant design.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="story-paragraph-2">
                What started as a small collection of carefully crafted dresses has grown into a comprehensive wardrobe for the discerning woman who appreciates quality, craftsmanship, and timeless style.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" data-testid="story-paragraph-3">
                Every piece in our collection is designed with intention, created to make women feel confident, beautiful, and authentically themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-clara-cream" data-testid="values-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="values-title">
              Our <span className="text-clara-pink italic">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="values-description">
              The principles that guide everything we do at Clara
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm" data-testid="value-quality">
              <div className="w-16 h-16 bg-clara-pink rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We source the finest materials and work with skilled artisans to ensure every piece meets our exacting standards for quality and durability.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm" data-testid="value-sustainability">
              <div className="w-16 h-16 bg-clara-rose rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to responsible fashion practices, from ethical sourcing to sustainable production methods that minimize our environmental impact.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm" data-testid="value-empowerment">
              <div className="w-16 h-16 bg-clara-coral rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe fashion should make women feel powerful and confident. Our designs celebrate femininity while empowering personal expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" data-testid="team-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="team-title">
              Meet Our <span className="text-clara-pink italic">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="team-description">
              The talented individuals behind Clara's vision and craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="team-member-clara">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                  alt="Clara Martinez, Founder and Creative Director"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Clara Martinez</h3>
              <p className="text-clara-pink mb-4">Founder & Creative Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With over 15 years in fashion design, Clara brings her passion for elegant, wearable art to every collection.
              </p>
            </div>

            <div className="text-center" data-testid="team-member-sophia">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                  alt="Sophia Chen, Head of Design"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Sophia Chen</h3>
              <p className="text-clara-pink mb-4">Head of Design</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sophia's innovative design approach and attention to detail ensure each piece is both beautiful and functional.
              </p>
            </div>

            <div className="text-center" data-testid="team-member-maya">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                  alt="Maya Rodriguez, Sustainability Director"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">Maya Rodriguez</h3>
              <p className="text-clara-pink mb-4">Sustainability Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maya leads our sustainability initiatives, ensuring our practices align with our values of responsible fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}

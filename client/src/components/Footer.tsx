import { Link } from "wouter";

export default function Footer() {
  const collections = [
    "New Arrivals",
    "Dresses", 
    "Workwear",
    "Accessories"
  ];

  const customerCare = [
    "Size Guide",
    "Shipping",
    "Returns", 
    "FAQ"
  ];

  const about = [
    "Our Story",
    "Sustainability",
    "Careers",
    "Contact"
  ];

  return (
    <footer className="bg-gray-800 text-white py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="text-2xl font-playfair font-bold text-clara-rose mb-4">Clara</div>
            <p className="text-gray-400 leading-relaxed">
              Elevating women's fashion with elegance, sophistication, and timeless style.
            </p>
          </div>
          
          <div data-testid="footer-collections">
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-gray-400">
              {collections.map((item, index) => (
                <li key={index}>
                  <Link 
                    href="/collections" 
                    className="hover:text-clara-rose transition-colors"
                    data-testid={`footer-link-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-customer-care">
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-400">
              {customerCare.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-clara-rose transition-colors"
                    data-testid={`footer-link-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-testid="footer-about">
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-400">
              {about.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item === "Our Story" ? "/about" : item === "Contact" ? "/contact" : "#"}
                    className="hover:text-clara-rose transition-colors"
                    data-testid={`footer-link-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400" data-testid="footer-copyright">
          <p>&copy; 2024 Clara Fashion. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

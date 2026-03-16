import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Catering', href: '#catering' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-amber-600">Zarah</span>
              <span className="text-gray-900"> Foods</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Authentic biriyani and premium catering services for your special moments.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/zarah_foods_?igsh=eDJ1N2p2ejhnNW04"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-100 p-2 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="tel:7418099447"
                className="bg-amber-100 p-2 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:contact@zarahfoods.com"
                className="bg-amber-100 p-2 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-600 mt-1 flex-shrink-0" />
                <a href="tel:7418099447" className="text-gray-700 hover:text-amber-600 transition-colors">
                  74180 99447
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-600 mt-1 flex-shrink-0" />
                <a href="mailto:contact@zarahfoods.com" className="text-gray-700 hover:text-amber-600 transition-colors break-all">
                  contact@zarahfoods.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  High School Street, Melvisharam, Ranipet District
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Service Hours</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-amber-600 font-semibold">Regular Lunch</div>
                <div className="text-gray-700 text-sm">12:00 PM - 1:30 PM</div>
              </li>
              <li>
                <div className="text-amber-600 font-semibold">Ramzan Special</div>
                <div className="text-gray-700 text-sm">After 9:00 PM</div>
              </li>
              <li>
                <div className="text-amber-600 font-semibold">Catering</div>
                <div className="text-gray-700 text-sm">By Appointment</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-700 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Zarah Foods. All rights reserved.
            </p>
            <p className="text-gray-700 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-red-500" fill="currentColor" />
              <span>for authentic food lovers</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import { ChevronDown, Phone, Calendar, MenuSquare } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <div className="bg-amber-100 backdrop-blur-sm border border-amber-600/30 rounded-full px-6 py-2 mb-6">
              <span className="text-amber-800 font-semibold">Premium Catering & Authentic Biriyani</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="text-white">Welcome to </span>
            <span className="text-amber-500 block mt-2">Zarah Foods</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the authentic flavors of traditional biriyani crafted with passion and premium ingredients for your special moments
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <button
              onClick={() => scrollToSection('#menu')}
              className="group flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-2xl shadow-amber-600/30 hover:shadow-amber-600/50 hover:scale-105"
            >
              <MenuSquare size={22} />
              <span>View Menu</span>
            </button>
            <button
              onClick={() => scrollToSection('#catering')}
              className="group flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-2xl shadow-amber-600/30 hover:shadow-amber-600/50 hover:scale-105"
            >
              <Calendar size={22} />
              <span>Book Catering</span>
            </button>
            <a
              href="tel:7418099447"
              className="group flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-2xl shadow-amber-600/30 hover:shadow-amber-600/50 hover:scale-105"
            >
              <Phone size={22} />
              <span>Call Now</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-amber-700 cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

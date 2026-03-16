import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Moon, Clock, Star } from 'lucide-react';

const Ramzan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 backdrop-blur-sm border border-green-300 rounded-full px-6 py-2 mb-6">
            <Moon className="text-green-700" size={20} />
            <span className="text-green-700 font-semibold">Special Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            <span className="text-amber-600">Ramzan</span> Special
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Experience authentic biriyani during the blessed month with our special night service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/84YpGkjM/Ramadan-special-biryani.png?auto=compress&cs=tinysrgb&w=800"
                alt="Ramzan Special Biriyani"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center space-x-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-600" fill="currentColor" />
                  ))}
                </div>
                <p className="text-white text-lg italic">
                  "The perfect way to break your fast with authentic flavors"
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-green-700 text-white p-4 rounded-2xl shadow-xl">
              <Moon size={32} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white border border-amber-200 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Clock size={32} className="text-amber-600" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Night Service</h3>
                  <p className="text-gray-600">After 9:00 PM</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                During the holy month of Ramzan, we extend our service hours to offer you the perfect
                iftar meal. Our special night biriyani service ensures you can enjoy authentic,
                delicious biriyani to break your fast.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-900 font-semibold">Chicken Biriyani</span>
                  </div>
                  <span className="text-green-700 font-semibold">Available</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-900 font-semibold">Beef Biriyani</span>
                  </div>
                  <span className="text-green-700 font-semibold">Available</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-green-100 backdrop-blur-sm border border-amber-200 rounded-2xl p-6">
              <h4 className="text-gray-900 font-bold text-lg mb-3">Service Options</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-amber-600 font-bold text-lg mb-1">Dine-in</div>
                  <div className="text-gray-600 text-sm">Available</div>
                </div>
                <div className="bg-white backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-amber-600 font-bold text-lg mb-1">Take-away</div>
                  <div className="text-gray-600 text-sm">Available</div>
                </div>
              </div>
            </div>

            <div className="text-center bg-amber-100 backdrop-blur-sm border border-amber-200 rounded-2xl p-6">
              <p className="text-gray-700 mb-4">
                <span className="text-amber-600 font-semibold">Location:</span> Melvisharam (Near MMES Function Hall)
              </p>
              <a
                href="tel:7418099447"
                className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-amber-600/30"
              >
                <span>Call for Pre-order</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ramzan;

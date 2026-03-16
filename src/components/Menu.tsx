import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Star } from 'lucide-react';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const menuItems = [
    {
      name: 'Chicken Biriyani',
      description: 'Tender chicken pieces marinated in aromatic spices, layered with fragrant basmati rice',
      image: '/ref.jpg',
      popular: true,
      spicy: 2,
    },
    {
      name: 'Beef Biriyani',
      description: 'Succulent beef slow-cooked with traditional spices in layers of premium rice',
      image: '/beef_bir.jpg',
      popular: true,
      spicy: 3,
    },
    {
      name: 'Mutton Biriyani',
      description: 'Premium mutton pieces cooked to perfection with rich spices and saffron rice',
      image: 'https://i.ibb.co/wryvd46c/mutton-bir.jpg?auto=compress&cs=tinysrgb&w=800',
      popular: true,
      spicy: 3,
    },
    {
      name: 'Hyderabadi Biriyani',
      description: 'Weekend special authentic Hyderabadi-style biriyani with dum cooking method',
      image: 'https://i.ibb.co/84YpGkjM/Ramadan-special-biryani.png?auto=compress&cs=tinysrgb&w=800'   ,
      popular: true,
      spicy: 2,
      special: true,
    },
  ];

  return (
    <section id="menu" ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-semibold text-sm md:text-base tracking-wider uppercase">
            Signature Dishes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our <span className="text-amber-600">Signature Menu</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Handcrafted with authentic spices and premium ingredients for an unforgettable dining experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white border-2 border-amber-200 rounded-2xl overflow-hidden hover:border-amber-600 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/20">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.popular && (
                      <span className="flex items-center space-x-1 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        <Star size={12} fill="currentColor" />
                        <span>Popular</span>
                      </span>
                    )}
                    {item.special && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Special
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                    {item.spicy > 0 && (
                      <div className="flex items-center space-x-1">
                        {[...Array(item.spicy)].map((_, i) => (
                          <Flame key={i} size={16} className="text-red-500" fill="currentColor" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="tel:7418099447"
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-xl shadow-amber-600/30 hover:shadow-amber-600/50"
          >
            <span>Order Now</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

const Instagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const instagramPosts = [
    'https://i.ibb.co/cqKbkL1/ref.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://i.ibb.co/wryvd46c/mutton-bir.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://i.ibb.co/d0K0vLXd/beef-bir.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://i.ibb.co/0pmn54MT/hyd-bir.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://i.ibb.co/tpnJfyn9/chicken-bir.jpg?auto=compress&cs=tinysrgb&w=600',
    'https://i.ibb.co/nsv3NqYg/dess.jpg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-pink-100 backdrop-blur-sm border border-pink-300 rounded-full px-6 py-2 mb-6">
            <InstagramIcon className="text-pink-700" size={20} />
            <span className="text-pink-700 font-semibold">Follow Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            See What's <span className="text-amber-600">Cooking</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Follow us on Instagram for daily updates, special offers, and mouthwatering food photography
          </p>
          <a
            href="https://www.instagram.com/zarah_foods_?igsh=eDJ1N2p2ejhnNW04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105"
          >
            <InstagramIcon size={24} />
            <span>@zarah_foods_</span>
            <ExternalLink size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/zarah_foods_?igsh=eDJ1N2p2ejhnNW04"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <InstagramIcon size={48} className="text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 text-lg">
            Tag us in your posts with{' '}
            <span className="text-amber-600 font-semibold">#ZarahFoods</span> to get featured!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;

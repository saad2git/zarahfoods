import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, CheckCircle, Phone, Calendar } from 'lucide-react';

const Catering = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cateringFeatures = [
    'Customized menu planning for your event',
    'Professional service staff available',
    'Fresh ingredients and authentic recipes',
    'Timely delivery and setup',
    'Accommodates large gatherings',
    'Veg and Non-Veg options',
    'Competitive pricing packages',
    'Quality guaranteed',
  ];

  return (
    <section id="catering" ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-100 to-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2291597/pexels-photo-2291597.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm md:text-base tracking-wider uppercase">
            Event Catering
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Premium <span className="text-amber-600">Catering Services</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Make your special occasions unforgettable with our professional catering services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-amber-600 p-4 rounded-2xl">
                <Users size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Weddings & Celebrations</h3>
                <p className="text-gray-600">Perfect for all your special occasions</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're planning a grand wedding, a corporate event, or an intimate celebration,
              Zarah Foods provides exceptional catering services tailored to your needs. Our team
              ensures every guest enjoys authentic, delicious biriyani and other specialties.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {cateringFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="tel:7418099447"
                className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all duration-300 shadow-xl shadow-amber-600/30"
              >
                <Phone size={20} />
                <span>Call to Book</span>
              </a>
              <a
                href="https://wa.me/917418099447"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gray-100 backdrop-blur-sm text-gray-900 border-2 border-amber-200 px-8 py-4 rounded-full font-bold hover:bg-amber-50 hover:border-amber-600 transition-all duration-300"
              >
                <Calendar size={20} />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Catering service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/SX6SjfTj/cat-ref-3.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Event setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/27cJgbWm/cat-ref-1.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wedding catering"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://i.ibb.co/CpYHWyPq/cat-ref-2.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Food presentation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-amber-100 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Make Your Event Special?
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Contact us today for a customized catering quote for your upcoming event
          </p>
          <a
            href="tel:7418099447"
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-xl shadow-amber-600/30"
          >
            <Phone size={20} />
            <span>74180 99447</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Catering;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChefHat, Award, Heart, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <ChefHat size={32} />,
      title: 'Authentic Recipes',
      description: 'Traditional biriyani recipes passed down through generations',
    },
    {
      icon: <Award size={32} />,
      title: 'Premium Quality',
      description: 'Only the finest ingredients for an unforgettable taste',
    },
    {
      icon: <Heart size={32} />,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and care',
    },
    {
      icon: <Users size={32} />,
      title: 'Expert Catering',
      description: 'Professional service for all your special occasions',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-amber-50 via-white to-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-semibold text-sm md:text-base tracking-wider uppercase">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Authentic Flavors, <span className="text-amber-600">Premium Experience</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At Zarah Foods, we bring you the authentic taste of traditional biriyani, prepared with
            time-honored recipes and the finest ingredients. From intimate gatherings to grand
            celebrations, we cater to your every need with excellence and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white border-2 border-amber-200 rounded-2xl p-8 h-full hover:border-amber-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/20">
                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200">
            <img
              src="/ref.jpg"
              alt="Traditional cooking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Legacy of <span className="text-amber-600">Culinary Excellence</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our journey began with a simple mission: to serve authentic, delicious biriyani that
              brings people together. Today, we're proud to be Melvisharam's trusted choice for
              premium catering and daily lunch service.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether it's a wedding, party, or your daily meal, we ensure every plate is prepared
              with the same dedication to quality and taste that has made us a local favorite.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

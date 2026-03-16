import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Calendar, Moon, Sparkles, ShoppingBag } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Clock size={40} />,
      title: 'Regular Lunch Service',
      timing: '12:00 PM - 1:30 PM',
      description: 'Daily authentic biriyani service with dine-in and take-away options',
      features: ['Chicken Biriyani', 'Beef Biriyani', 'Mutton Biriyani', 'Desserts'],
      location: 'Near MMES Function Hall, Melvisharam',
      gradient: 'from-yellow-400/20 to-orange-500/20',
    },
    {
      icon: <Users size={40} />,
      title: 'Wedding Catering',
      timing: 'Pre-order Required',
      description: 'Premium catering service for your special day with veg & non-veg options',
      features: ['Customized Menus', 'Professional Service', 'Large Scale Catering', 'Quality Guaranteed'],
      location: 'All Locations',
      gradient: 'from-pink-400/20 to-red-500/20',
    },
    {
      icon: <Calendar size={40} />,
      title: 'Party Orders',
      timing: '1 Day Pre-order',
      description: 'Perfect for celebrations with delivery available for your convenience',
      features: ['Veg & Non-Veg Options', 'Delivery Available', 'Bulk Orders', 'Fresh Preparation'],
      location: 'Delivery Across Melvisharam',
      gradient: 'from-blue-400/20 to-purple-500/20',
    },
    {
      icon: <Moon size={40} />,
      title: 'Ramzan Special',
      timing: 'After 9:00 PM',
      description: 'Special night biriyani service during the holy month of Ramzan',
      features: ['Chicken Biriyani', 'Beef Biriyani', 'Night Service', 'Dine-in & Take-away'],
      location: 'Melvisharam',
      gradient: 'from-green-400/20 to-teal-500/20',
      special: true,
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Weekend Special',
      timing: 'Weekends Only',
      description: 'Authentic Hyderabadi biriyani prepared with traditional dum cooking',
      features: ['Hyderabadi Biriyani', 'Dum Cooking Method', 'Premium Quality', 'Limited Availability'],
      location: 'Melvisharam',
      gradient: 'from-yellow-400/20 to-red-500/20',
      special: true,
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm md:text-base tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            From daily lunch to grand celebrations, we cater to all your needs with excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative bg-white border border-amber-200 rounded-2xl p-8 hover:border-amber-600 transition-all duration-300">
                {service.special && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Special
                    </span>
                  </div>
                )}

                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>

                <div className="flex items-center space-x-2 mb-4">
                  <Clock size={16} className="text-amber-600" />
                  <span className="text-amber-600 font-semibold">{service.timing}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <ShoppingBag size={16} />
                  <span>{service.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

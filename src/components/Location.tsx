import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="location" ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm md:text-base tracking-wider uppercase">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Visit <span className="text-amber-600">Our Location</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white border border-amber-200 rounded-2xl p-8 hover:border-amber-600 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-amber-600 p-3 rounded-xl">
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600">Visit us for the best biriyani experience</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-900 text-lg font-semibold">High School Street</p>
                    <p className="text-gray-600">Melvisharam, Ranipet District</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-600">
                      <span className="text-gray-900 font-semibold">Landmark:</span> Near MMES Function Hall
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/3CdneiU3zF1eW9JWA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-700 transition-all duration-300 shadow-lg shadow-amber-600/30"
              >
                <Navigation size={20} />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-100 backdrop-blur-sm border border-amber-200 rounded-2xl p-8">
              <h4 className="text-gray-900 font-bold text-xl mb-4">Service Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Regular Lunch</span>
                  <span className="text-amber-600 font-semibold">12:00 PM - 1:30 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ramzan Special</span>
                  <span className="text-amber-600 font-semibold">After 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Weekend Special</span>
                  <span className="text-amber-600 font-semibold">Weekends Only</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-amber-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d79.2!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3OcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zarah Foods Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="text-gray-900 font-semibold">Zarah Foods</p>
                <p className="text-amber-600 text-sm">Melvisharam</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Instagram, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: <Phone size={32} />,
      title: 'Call Us',
      value: '74180 99447',
      href: 'tel:7418099447',
      description: 'Call now for orders & inquiries',
      color: 'from-green-400/20 to-emerald-500/20',
      hoverColor: 'hover:border-green-400/50',
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'WhatsApp',
      value: 'Chat with us',
      href: 'https://wa.me/917418099447',
      description: 'Quick responses on WhatsApp',
      color: 'from-green-400/20 to-teal-500/20',
      hoverColor: 'hover:border-green-400/50',
    },
    {
      icon: <Instagram size={32} />,
      title: 'Instagram',
      value: '@zarah_foods_',
      href: 'https://www.instagram.com/zarah_foods_?igsh=eDJ1N2p2ejhnNW04',
      description: 'Follow us for updates',
      color: 'from-pink-400/20 to-purple-500/20',
      hoverColor: 'hover:border-pink-400/50',
    },
    {
      icon: <Mail size={32} />,
      title: 'Email',
      value: 'contact@zarahfoods.com',
      href: 'mailto:contact@zarahfoods.com',
      description: 'Send us an email',
      color: 'from-blue-400/20 to-cyan-500/20',
      hoverColor: 'hover:border-blue-400/50',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D97706 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm md:text-base tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Contact <span className="text-amber-600">Zarah Foods</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for orders, catering inquiries, or any questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`relative bg-white border border-amber-200 rounded-2xl p-6 h-full transition-all duration-300 ${method.hoverColor}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-amber-600 font-semibold mb-2">{method.value}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-amber-100 to-orange-100 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience Authentic Biriyani?
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Whether it's a daily meal, a special celebration, or a grand event, we're here to serve you
            with the finest flavors and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7418099447"
              className="flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-xl shadow-amber-600/30 hover:shadow-amber-600/50"
            >
              <Phone size={20} />
              <span>Call: 74180 99447</span>
            </a>
            <a
              href="https://wa.me/917418099447"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-100 backdrop-blur-sm text-gray-900 border-2 border-amber-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 hover:border-amber-600 transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Shield, Clock, Heart, Facebook, Twitter, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: Shield,
      title: 'Expert Care',
      description: 'Professional veterinarians and certified pet care specialists',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your pet emergencies',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored healthcare plans for your pet\'s specific needs',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Dog Parent',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
      content: 'PawCare has transformed how I care for my Golden Retriever. The reminders and health tracking are invaluable!',
    },
    {
      name: 'Rahul Verma',
      role: 'Cat Parent',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
      content: 'The veterinary consultations and emergency support have been a lifesaver. Highly recommended!',
    },
    {
      name: 'Anjali Patel',
      role: 'Pet Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
      content: 'From grooming to health tracking, PawCare offers everything I need for my pets in one place.',
    },
  ];

  // Custom cursor animation variants
  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(168, 85, 247, 0.4)',
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        initial="default"
        whileHover="hover"
        animate={{
          x: 'var(--mouse-x)',
          y: 'var(--mouse-y)',
          transition: { type: 'spring', stiffness: 500, damping: 28 },
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-90" />
        <div className="absolute inset-0 grid grid-cols-8 gap-4 p-4">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.1, 0.3] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="h-full w-full bg-purple-200 dark:bg-purple-800 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Pet's Perfect Care Companion
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionizing pet care in India with AI-powered health tracking, expert veterinary support, and personalized care plans.
            </p>
          </motion.div>

          <motion.div
            style={{ y, scale, opacity }}
            className="relative w-full max-w-2xl mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&h=600"
              alt="Happy Dog"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose PawCare?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-purple-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Pet Parents Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.content}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-gradient-to-r from-purple-900 to-gray-900 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PawCare
                </h3>
                <p className="text-gray-300 mb-6">
                  Your trusted partner in pet wellness and care.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-white hover:text-purple-400"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-white hover:text-purple-400"
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-white hover:text-purple-400"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Quick Links */}
            <AnimatedSection delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Services', 'About', 'Contact'].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-purple-400 cursor-pointer"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-300">support@pawcare.in</p>
                <p className="text-gray-300">+91-123-456-7890</p>
                <p className="text-gray-300">Mumbai, India</p>
              </motion.div>
            </AnimatedSection>

            {/* Newsletter */}
            {/* <AnimatedSection delay={0.6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
                <p className="text-gray-300 mb-4">Stay updated with pet care tips!</p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-lg bg-gray-800 text-white border-none focus:outline-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-purple-600 rounded-r-lg hover:bg-purple-700"
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatedSection> */}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12 text-gray-400"
          >
            © {new Date().getFullYear()} PawCare. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

// Add this script to handle cursor movement
if (typeof window !== 'undefined') {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
}

export default Home;
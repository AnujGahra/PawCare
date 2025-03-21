import React from 'react';
import { Scissors, Bath, Stethoscope, Dog } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Grooming',
      description: 'Professional grooming services for all breeds',
      price: '₹999',
    },
    {
      icon: Bath,
      title: 'Spa & Treatment',
      description: 'Relaxing spa treatments for your pet',
      price: '₹1,499',
    },
    {
      icon: Stethoscope,
      title: 'Veterinary Care',
      description: 'Expert medical care and check-ups',
      price: '₹799',
    },
    {
      icon: Dog,
      title: 'Training',
      description: 'Behavioral training and socialization',
      price: '₹1,999',
    },
  ];

  return (
    <div className="space-y-8">
      <AnimatedSection>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Our Services
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <service.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Premium Membership</h3>
          <p className="mb-6">
            Get unlimited access to all services with our premium membership plan.
            Save up to 30% on all bookings and enjoy priority scheduling.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Join Now
          </motion.button>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default Services;
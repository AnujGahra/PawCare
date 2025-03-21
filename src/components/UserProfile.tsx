import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const UserProfile = () => {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-xl" />
          <div className="absolute -bottom-16 left-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors duration-200">
                <Camera className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
          <div className="absolute top-4 right-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center space-x-2 text-gray-700 dark:text-gray-200"
            >
              <Edit2 className="w-4 h-4" />
              <span>Edit Cover</span>
            </motion.button>
          </div>
        </div>
      </AnimatedSection>

      <div className="pt-20 px-8">
        <AnimatedSection delay={0.1}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">John Doe</h1>
              <p className="text-gray-600 dark:text-gray-300">Pet Parent • Mumbai, India</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Edit Profile
            </motion.button>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Pet Family
              </h3>
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=60&h=60"
                  alt="Pet 1"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800"
                />
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=60&h=60"
                  alt="Pet 2"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center border-2 border-white dark:border-gray-800"
                >
                  +
                </motion.button>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Upcoming Events
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                3 appointments this week
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Membership
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                Premium Member
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
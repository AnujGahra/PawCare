import React from 'react';
import { Calendar, Bell, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=150&h=150"
                alt="Pet"
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-100 dark:border-gray-700"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Buddy</h3>
                <p className="text-gray-500 dark:text-gray-400">Golden Retriever • 3 years old</p>
                <span className="inline-block mt-2 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Next checkup in 2 weeks
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Upcoming</h3>
              <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="space-y-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-3 bg-purple-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Vaccination</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">March 15, 2024 • 10:00 AM</p>
                </div>
                <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Health Stats</h3>
              <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Weight</span>
                <span className="font-medium text-gray-800 dark:text-white">28.5 kg</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Last Checkup</span>
                <span className="font-medium text-gray-800 dark:text-white">2 weeks ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Vaccinations</span>
                <span className="text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full text-sm">
                  Up to date
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.4}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-purple-100 dark:border-gray-700 transition-colors duration-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recommended for Buddy</h3>
            <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={`https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1200`}
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-200"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="font-medium text-gray-800 dark:text-white">Premium Pet Food</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Perfect for active dogs</p>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mt-1">₹1,299</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default Dashboard;
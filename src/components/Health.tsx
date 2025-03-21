import React from 'react';
import { Heart, Activity, Weight, Syringe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Health = () => {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Health Records
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Vital Statistics
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Heart Rate</span>
                <span className="font-semibold text-gray-800 dark:text-white">78 bpm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Temperature</span>
                <span className="font-semibold text-gray-800 dark:text-white">38.5°C</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Respiratory Rate</span>
                <span className="font-semibold text-gray-800 dark:text-white">24 rpm</span>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Weight className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Weight History
              </h3>
            </div>
            <div className="h-48 flex items-end justify-between space-x-2">
              {[28, 28.2, 28.5, 28.3, 28.5].map((weight, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${(weight / 30) * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-1/6 bg-purple-200 dark:bg-purple-900 rounded-t-lg relative group"
                >
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 dark:text-gray-400">
                    {weight}kg
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Syringe className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Vaccination History
            </h3>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Rabies', date: 'Jan 15, 2024', next: 'Jan 15, 2025' },
              { name: 'DHPP', date: 'Dec 1, 2023', next: 'Dec 1, 2024' },
              { name: 'Bordetella', date: 'Nov 15, 2023', next: 'May 15, 2024' },
            ].map((vaccine, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-purple-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{vaccine.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Last: {vaccine.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Next due: {vaccine.next}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default Health;
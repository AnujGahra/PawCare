import React from 'react';
import { User, Bell, Shield, CreditCard } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <div className="space-y-8">
      <AnimatedSection>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Account Settings
        </h2>
      </AnimatedSection>

      <div className="space-y-6">
        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-6">
              <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Profile Information
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    defaultValue="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Bell className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Notifications
              </h3>
            </div>
            <div className="space-y-4">
              {[
                'Email notifications',
                'Push notifications',
                'SMS alerts',
                'Appointment reminders',
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{setting}</span>
                  <motion.label
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                  </motion.label>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4 mb-6">
              <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Payment Methods
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      •••• •••• •••• 4242
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Expires 12/24
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Add New Card
              </motion.button>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            Save Changes
          </motion.button>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Settings;
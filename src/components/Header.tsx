import React, { useState } from 'react';
import { Bell, Menu, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import NotificationPanel from './NotificationPanel';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PawCare
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-purple-50 dark:hover:bg-gray-700 relative transition-colors duration-200"
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="h-6 w-6 text-gray-300" />
              )}
            </motion.button>
            <div className="relative">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-purple-50 dark:hover:bg-gray-700 relative transition-colors duration-200"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </motion.button>
              <NotificationPanel 
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
              />
            </div>
            <Link to="/profile">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
              </motion.div>
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 dark:text-gray-300" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
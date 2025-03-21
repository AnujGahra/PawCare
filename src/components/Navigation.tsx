import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Heart, Settings, PawPrint, LayoutDashboard } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Assume header height is 64px (adjust this value based on your header's actual height)
  const HEADER_HEIGHT = 64;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > HEADER_HEIGHT) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  // Animation variants for the navbar with slow drop effect
  const navVariants = {
    initial: {
      y: 0, // Non-sticky state, positioned normally
      opacity: 1,
      position: 'relative',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    },
    sticky: {
      y: 0, // Final sticky position
      opacity: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.6, // Slower duration for a gentle drop
        ease: 'easeOut', // Smooth easing for a natural fall
      },
    },
    enter: {
      y: -60, // Starts above the viewport (slightly more than navbar height)
      opacity: 0.5,
      transition: {
        duration: 0.6,
        ease: 'easeIn',
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        key={isSticky ? 'sticky' : 'relative'} // Trigger animation on state change
        variants={navVariants}
        initial={isSticky ? 'enter' : 'initial'} // Start from above when becoming sticky
        animate={isSticky ? 'sticky' : 'initial'}
        className={`bg-white dark:bg-gray-800 mt-1 transition-colors duration-200 ${
          isSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between md:justify-start md:space-x-10 h-14">
            {[
              { path: '/', icon: Home, label: 'Home' },
              { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
              { path: '/appointments', icon: Calendar, label: 'Appointments' },
              { path: '/health', icon: Heart, label: 'Health' },
              { path: '/services', icon: PawPrint, label: 'Services' },
              { path: '/settings', icon: Settings, label: 'Settings' },
            ].map(({ path, icon: Icon, label }) => (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={path}
                  className={`flex items-center space-x-2 ${
                    isActive(path)
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                  } transition-colors duration-200`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden md:inline">{label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navigation;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  type: 'appointment' | 'reminder' | 'update';
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  const notifications: Notification[] = [
    {
      id: 1,
      title: 'Upcoming Vaccination',
      message: 'Buddy\'s vaccination is due tomorrow at 10:00 AM',
      time: '1 hour ago',
      type: 'reminder',
    },
    {
      id: 2,
      title: 'New Feature Available',
      message: 'Try our new AI-powered health predictions',
      time: '2 hours ago',
      type: 'update',
    },
    {
      id: 3,
      title: 'Appointment Confirmed',
      message: 'Your grooming session is confirmed for next week',
      time: '3 hours ago',
      type: 'appointment',
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'appointment':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300';
      case 'reminder':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300';
      case 'update':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-purple-100 dark:border-gray-700 overflow-hidden z-50"
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Notifications
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-0 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {notification.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${getTypeStyles(notification.type)}`}>
                    {notification.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {notification.message}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {notification.time}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              className="w-full text-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium"
            >
              View All Notifications
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel;
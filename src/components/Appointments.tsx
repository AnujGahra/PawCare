import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      title: 'Vaccination',
      date: 'March 15, 2024',
      time: '10:00 AM',
      location: 'PawCare Clinic, Mumbai',
      type: 'Routine',
    },
    {
      id: 2,
      title: 'Grooming Session',
      date: 'March 20, 2024',
      time: '2:30 PM',
      location: 'PawCare Spa, Mumbai',
      type: 'Care',
    },
    {
      id: 3,
      title: 'Dental Checkup',
      date: 'March 25, 2024',
      time: '11:30 AM',
      location: 'PawCare Clinic, Mumbai',
      type: 'Checkup',
    },
  ];

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Upcoming Appointments
        </h2>
      </AnimatedSection>

      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <AnimatedSection key={appointment.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-purple-100 dark:border-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {appointment.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{appointment.location}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  {appointment.type}
                </span>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200"
        >
          Schedule New Appointment
        </motion.button>
      </AnimatedSection>
    </div>
  );
}

export default Appointments;
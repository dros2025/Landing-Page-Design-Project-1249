import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LazyImage from './LazyImage';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiTool, FiUsers, FiArrowRight, FiTarget, FiTrendingUp } = FiIcons;

const About = memo(() => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <SafeIcon icon={FiHeart} className="w-4 h-4 mr-2 text-red-500" />
              <span className="text-gray-600 text-sm font-medium">Made with passion</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              From Hobbyist to
              <span className="block text-blue-600">
                Trusted Supplier
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              What started as weekend garage experiments has grown into a business 
              serving thousands of makers worldwide. Every material we sell has been 
              tested in our own workshop first.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: FiTool,
                  title: 'Hands-On Testing',
                  description: 'Every material tested in real projects before we sell it'
                },
                {
                  icon: FiUsers,
                  title: 'Maker Community',
                  description: 'Building a supportive network of creators and innovators'
                },
                {
                  icon: FiTarget,
                  title: 'Quality First',
                  description: 'Uncompromising standards for every product we offer'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center"
            >
              Our Story
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <LazyImage
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=700&fit=crop&crop=center"
                webpSrc="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=700&fit=crop&crop=center&fm=webp"
                alt="3D printing workspace with colorful filaments"
                className="w-full h-[500px] rounded-3xl shadow-2xl object-cover"
              />
            </div>

            {/* Floating metrics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-500" />
                <span className="text-2xl font-bold text-gray-900">500+</span>
              </div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <SafeIcon icon={FiUsers} className="w-5 h-5 text-blue-500" />
                <span className="text-2xl font-bold text-gray-900">10K+</span>
              </div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
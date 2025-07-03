import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LazyImage from './LazyImage';
import * as FiIcons from 'react-icons/fi';

const { FiLayers, FiZap, FiTarget, FiShield, FiTool, FiAward, FiArrowRight, FiCheck } = FiIcons;

const Features = memo(() => {
  const features = [
    {
      icon: FiLayers,
      title: '3D Printing Filaments',
      description: 'Premium PLA, ABS, PETG, and specialty filaments engineered for consistent results.',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop&crop=center',
      color: 'from-blue-500 to-cyan-500',
      features: ['Consistent diameter', 'Superior adhesion', 'Vibrant colors']
    },
    {
      icon: FiZap,
      title: 'UV-Curing Resins',
      description: 'Professional-grade resins for ultra-detailed prints and smooth finishes.',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop&crop=center',
      color: 'from-purple-500 to-pink-500',
      features: ['Fast curing', 'Excellent detail', 'Low odor']
    },
    {
      icon: FiTarget,
      title: 'Wood & Metal Supplies',
      description: 'Premium materials for traditional crafting and hybrid maker projects.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center',
      color: 'from-green-500 to-teal-500',
      features: ['Premium species', 'Multiple grades', 'Sustainably sourced']
    }
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
            <SafeIcon icon={FiLayers} className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-gray-600 text-sm font-medium">Premium Materials</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Everything You Need
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From 3D printing to traditional crafting, we provide premium materials 
            for every step of your creative journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={feature.image}
                  webpSrc={feature.image + '&fm=webp'}
                  alt={feature.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center`}>
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="group/btn flex items-center text-gray-900 hover:text-blue-600 font-semibold transition-colors"
                >
                  Explore Collection
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: FiShield,
              title: 'Quality Guaranteed',
              description: 'Every material tested by our founder for consistent results'
            },
            {
              icon: FiTool,
              title: 'Expert Support',
              description: 'Technical guidance from fellow makers who understand your needs'
            },
            {
              icon: FiAward,
              title: 'Maker Community',
              description: 'Join thousands of passionate creators sharing knowledge'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={item.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';

export default Features;
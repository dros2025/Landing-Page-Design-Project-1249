import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LazyImage from './LazyImage';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiPlay, FiStar, FiUsers, FiTrendingUp, FiZap } = FiIcons;

const Hero = memo(() => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Content */}
        <div className="text-center max-w-6xl mx-auto pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white text-sm">Trusted by 10,000+ creators</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-none"
          >
            Create
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amazing
            </span>
            <span className="block text-gray-300 text-5xl md:text-6xl lg:text-7xl font-light">
              Things
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Premium 3D printing materials and supplies that transform your ideas into reality.
            <span className="block mt-2 text-lg text-gray-500">
              Quality tested. Creator approved.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              onClick={scrollToFeatures}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Explore Products
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="relative">
              <LazyImage
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=500&fit=crop&crop=center"
                webpSrc="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=500&fit=crop&crop=center&fm=webp"
                alt="3D printing materials showcase"
                className="w-full h-[400px] md:h-[500px] rounded-3xl shadow-2xl object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">4.9/5</span>
              </div>
              <div className="text-gray-400 text-xs">Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <SafeIcon icon={FiUsers} className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">10K+</span>
              </div>
              <div className="text-gray-400 text-xs">Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">99.9%</span>
              </div>
              <div className="text-gray-400 text-xs">Success</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Products' },
            { number: '24/7', label: 'Support' },
            { number: '99.9%', label: 'Quality' },
            { number: '48h', label: 'Shipping' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-float-delayed" />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-blue-300/8 blur-[80px] animate-float-slow" />

      {/* Floating icons */}
      <motion.div
        className="absolute top-32 left-[15%] hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-2xl glass-blue flex items-center justify-center shadow-xl">
          <Bot className="w-8 h-8 text-blue-500" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-48 right-[12%] hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-14 h-14 rounded-2xl glass-blue flex items-center justify-center shadow-xl">
          <Cpu className="w-7 h-7 text-blue-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-[20%] hidden lg:block"
        animate={{ y: [-8, 12, -8], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 rounded-xl glass-blue flex items-center justify-center shadow-xl">
          <Zap className="w-6 h-6 text-blue-400" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-blue mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-sm font-medium text-blue-700">
            AI-First Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
        >
          <span className="text-slate-900">Создаём </span>
          <span className="text-gradient">цифровые</span>
          <br />
          <span className="text-slate-900">экосистемы </span>
          <span className="text-gradient">с ИИ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Создаём платформы и мобильные приложения с внедрением искуственного интелекта, которые дают бизнесу конкурентное преимущество.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow"
          >
            Обсудить проект
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-slate-600 rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
          >
            Наши услуги
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-blue-300 mx-auto flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

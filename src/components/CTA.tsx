"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 bg-white" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-12 sm:p-16 lg:p-20">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="absolute inset-0 bg-grid opacity-5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-6">
                <MessageSquare className="w-4 h-4" />
                Начните сейчас
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Готовы создать
                <br />
                <span className="text-blue-400">ваш продукт?</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Расскажите о вашей идее — мы подготовим концепцию
                и оценку проекта бесплатно. Ответим в течение 24 часов.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@blankdigital.com"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  Написать нам
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://t.me/blankdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Telegram
                </a>
              </div>
            </motion.div>

            {/* Right content — contact info cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-blue-300 font-medium mb-1">Email</p>
                <p className="text-lg text-white font-semibold">hello@blankdigital.com</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-blue-300 font-medium mb-1">Telegram</p>
                <p className="text-lg text-white font-semibold">@blankdigital</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-blue-300 font-medium mb-1">Бесплатная консультация</p>
                <p className="text-lg text-white font-semibold">Оценка проекта за 24 часа</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

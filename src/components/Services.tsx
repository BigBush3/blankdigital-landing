"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Network,
  Brain,
  Code2,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Веб-платформы",
    description:
      "Высоконагруженные веб-приложения и SaaS-платформы с AI-модулями для автоматизации бизнес-процессов.",
    features: ["SaaS решения", "Маркетплейсы", "CRM & ERP системы"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description:
      "Нативные и кросс-платформенные мобильные приложения с интеграцией AI-ассистентов и умных функций.",
    features: ["iOS & Android", "React Native", "AI-ассистенты"],
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Network,
    title: "Бизнес-экосистемы",
    description:
      "Полноценные цифровые экосистемы, объединяющие платформы, приложения и сервисы в единую среду.",
    features: ["Микросервисы", "API-интеграции", "Единая среда"],
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: Brain,
    title: "AI-решения",
    description:
      "Интеграция LLM, компьютерного зрения, NLP и предиктивной аналитики в ваши продукты.",
    features: ["LLM интеграция", "Computer Vision", "NLP"],
    gradient: "from-blue-500 to-violet-400",
  },
  {
    icon: Code2,
    title: "AI-агенты",
    description:
      "Разработка автономных AI-агентов для автоматизации рутинных задач и принятия решений.",
    features: ["Автоматизация", "RAG системы", "Чат-боты"],
    gradient: "from-blue-600 to-sky-400",
  },
  {
    icon: BarChart3,
    title: "Аналитика и данные",
    description:
      "Системы сбора, обработки и визуализации данных с предиктивной аналитикой на базе ML.",
    features: ["Дашборды", "ML-модели", "Big Data"],
    gradient: "from-blue-500 to-teal-400",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 bg-white" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 mb-6">
            Наши услуги
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-900">Полный цикл </span>
            <span className="text-gradient">разработки</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            От идеи до масштабирования — создаём технологические продукты,
            которые трансформируют бизнес с помощью искусственного интеллекта.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/[0.02] group-hover:to-blue-600/[0.05] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

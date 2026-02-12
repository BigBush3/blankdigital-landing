"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Исследование",
    description:
      "Глубокий анализ вашего бизнеса, рынка и конкурентов. Определяем точки роста и формируем техническое задание с учётом AI-возможностей.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Проектирование",
    description:
      "Архитектура системы, UX/UI дизайн и прототипирование. Подбираем оптимальный стек технологий и AI-модели для вашего продукта.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Разработка",
    description:
      "Итеративная разработка с еженедельными демо. Параллельная работа над фронтендом, бэкендом и AI-компонентами.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Запуск и рост",
    description:
      "Деплой, мониторинг и оптимизация. Непрерывное улучшение AI-моделей на основе реальных данных и масштабирование продукта.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="relative py-32 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 mb-6">
            Как мы работаем
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-900">От идеи до </span>
            <span className="text-gradient"> масштабируемого продукта</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Выстроенный и прозрачный процесс разработки 
            с чёткими метриками и контролем на каждом этапе.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-[2px]">
                  <div className="w-full h-full bg-gradient-to-r from-blue-200 to-blue-100" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 * i + 0.5 }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-300 origin-left"
                  />
                </div>
              )}

              <div className="relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-blue-100 group-hover:text-blue-200 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

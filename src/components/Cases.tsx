"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const categories = ["Все", "Платформы", "Мобильные", "AI", "Экосистемы"];

const cases = [
  {
    title: "Greenbee",
    client: "EcoSync",
    category: "Мобильные",
    description:
      "Экосистемная онлайн-платформа для экологичных игроков в виде мобильного приложения.Greenbee свяжет сознательного потребителя с экологичным бизнесом и социальными проектами по всему миру.",
    tags: ["React Native", "NestJs","Node.js","Firebase", "PostgreSQL"],
    metrics: { label: "Рост конверсии", value: "+340%" },
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "ReachOut",
    client: "RetailMax",
    category: "Платформы",
    description:
      "Современный  минималистичный веб-сайт, основанного на анализе конкурентов и реальных потребностях пользователей.",
    tags: ["Vue.js", "Laravel"],
    metrics: { label: "Снижение оттока", value: "-62%" },
    gradient: "from-indigo-600 via-blue-500 to-violet-400",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Utorg",
    client: "CargoFlow",
    category: "Мобильные",
    description:
      "Мобильное приложение-кошелька для криптовалют - полномасштабный производственный продукт для безопасного управления цифровыми активами.",
    tags: ["React Native", "Nest.js", "Web3"],
    metrics: { label: "Экономия топлива", value: "-28%" },
    gradient: "from-blue-500 via-sky-400 to-teal-400",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "MedTech AI Assistant",
    client: "HealthHub",
    category: "AI",
    description:
      "AI-ассистент для врачей: анализ медицинских снимков, автоматическое заполнение документации и интеграция с электронными медкартами.",
    tags: ["Python", "PyTorch", "React", "FHIR"],
    metrics: { label: "Скорость диагностики", value: "×5" },
    gradient: "from-blue-600 via-indigo-500 to-purple-400",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "EcoPayz",
    client: "LearnPro",
    category: "Платформы",
    description:
      "Глобальный поставщик платежных решений, предлагающий мгновенные, безопасные и удобные платежные услуги клиентам и предприятиям по всему миру.",
    tags: ["Next.js", "Python", "LLM", "PostgreSQL"],
    metrics: { label: "Завершаемость курсов", value: "+89%" },
    gradient: "from-cyan-500 via-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },
  {
    title: "Viralyze",
    client: "Decode Viral Content",
    category: "Мобильные",
    description:
      "Мобильное приложение для анализа коротких видеороликов из Instagram, TikTok и YouTube.",
    tags: ["React Native", "Express.js", "PostgreSQL"],
    metrics: { label: "Время сделки", value: "-45%" },
    gradient: "from-blue-500 via-blue-400 to-sky-300",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "BlitzBit",
    client: "BlitzBit",
    category: "Платфомы",
    description:
      "Веб-платформа и панель администратора для полуавтоматического обмена",
    tags: ["Vue.js", "MobgoDB"],
    metrics: { label: "Время сделки", value: "-45%" },
    gradient: "from-blue-500 via-blue-400 to-sky-300",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Kegel App",
    client: "PelviFit",
    category: "Мобильные",
    description:
      "Мобильное приложения для отслеживания и анализа тренировок",
    tags: ["React Native", "Nuxt.js"],
    metrics: { label: "Время сделки", value: "-45%" },
    gradient: "from-blue-500 via-blue-400 to-sky-300",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },

  {
    title: "Карта Капитана",
    client: "QuestHub",
    category: "Мобильные",
    description:
      "Агрегатор квестов в городах России",
    tags: ["React Native", "TypeScript", "Express.js"],
    metrics: { label: "Время сделки", value: "-45%" },
    gradient: "from-blue-500 via-blue-400 to-sky-300",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
];

export default function Cases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered =
    activeCategory === "Все"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <section id="cases" className="relative py-32 bg-white" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 mb-6">
            Портфолио
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-900">Наши </span>
            <span className="text-gradient">кейсы</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Реальные проекты, где технологии и AI помогли клиентам 
            увеличить эффективность, автоматизировать процессы и масштабировать бизнес.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Case grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl bg-white border border-slate-100 overflow-hidden hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
                {/* Image header */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`}
                  />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover mix-blend-overlay opacity-60"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Metric badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold">
                    {item.metrics.value}
                  </div>

                  {/* Client */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                      {item.client}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Metric line */}
                  <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl bg-blue-50">
                    <span className="text-xs font-medium text-slate-500">
                      {item.metrics.label}
                    </span>
                    <span className="text-sm font-bold text-blue-600">
                      {item.metrics.value}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-slate-500 bg-slate-50 rounded-md border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-blue-600 rounded-full border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
          >
            Обсудить ваш проект
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

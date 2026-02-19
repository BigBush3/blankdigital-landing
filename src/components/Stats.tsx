"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Проектов реализовано" },
  { value: 100, suffix: "%", label: "Клиентов довольны" },
  { value: 40, suffix: "+", label: "AI-интеграций" },
  { value: 5, suffix: " лет", label: "На рынке" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="stats" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Floating orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-indigo-400/20 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Цифры говорят
            <br />
            <span className="text-blue-200">сами за себя</span>
          </h2>
          <p className="text-lg text-blue-200/80 max-w-xl mx-auto">
            Результаты, которые подтверждают наш опыт и экспертизу в создании
            цифровых продуктов.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.06 * i }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl" />
              </div>
              <p className="text-blue-200/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <svg
              className="w-10 h-10 text-blue-300/50 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              &quot;blankdigital создали для нас экосистему, которая объединила
              все наши бизнес-процессы. AI-интеграция сократила время обработки
              заявок в 5 раз.&quot;
            </p>
            <div>
              <p className="text-white font-semibold">Алексей Петров</p>
              <p className="text-blue-300/70 text-sm">CEO, TechVentures</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

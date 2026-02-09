"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Sparkles, Share2 } from "lucide-react";

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-6">
          {listBuffer.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  const inlineFormat = (text: string) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-800">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-sm font-mono">$1</code>');
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      flushList();
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl font-bold text-slate-900 mt-10 mb-4">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl font-bold text-slate-900 mt-12 mb-4 pb-2 border-b border-slate-100">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (/^[-*] /.test(line.trim())) {
      listBuffer.push(line.trim().slice(2));
      i++;
      continue;
    }

    if (/^\d+\.\s/.test(line.trim())) {
      const text = line.trim().replace(/^\d+\.\s/, "");
      listBuffer.push(text);
      i++;
      continue;
    }

    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        className="text-slate-600 leading-relaxed my-4"
        dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
      />
    );
    i++;
  }

  flushList();
  return elements;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-blue-500/5 py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-slate-900">blank</span>
              <span className="text-gradient">digital</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Главная
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
            >
              Блог
            </Link>
            <Link
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Начать проект
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 -mt-32">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Все статьи
          </Link>

          {/* Category badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Article body */}
          <div className="prose-custom">{renderMarkdown(post.content)}</div>

          {/* Share / CTA */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Понравилась статья?
                </h3>
                <p className="text-sm text-slate-500">
                  Обсудите ваш проект с нашей командой
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: post.title, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-600 bg-white rounded-full border border-slate-200 hover:border-blue-200 hover:text-blue-600 transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  Поделиться
                </button>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Связаться
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Footer mini */}
      <footer className="border-t border-slate-100 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight">
              <span className="text-slate-900">blank</span>
              <span className="text-gradient">digital</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} blankdigital. Все права защищены.
          </p>
        </div>
      </footer>
    </main>
  );
}

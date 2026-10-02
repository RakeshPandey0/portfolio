"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

// Theme lives on <html class="dark">; subscribe so the icon stays in sync
const subscribeTheme = (callback) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const getTheme = () => document.documentElement.classList.contains("dark");
const getServerTheme = () => false;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  const toggleTheme = () => {
    const next = !getTheme();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "research", label: "Research" },
    { id: "events", label: "Events" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/60 dark:bg-slate-100/60 backdrop-blur-md border-b border-slate-700 dark:border-slate-300 transition-colors duration-300">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2">
            <div className="logo3d">
              <span>R</span>
            </div>

            <span className="text-white dark:text-slate-900 font-extrabold text-xl hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300">
              Welcome<span className="text-blue-500 text-2xl">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className={
                    "relative transition-all duration-300 pb-1 text-gray-300 dark:text-gray-700 hover:text-blue-300 dark:hover:text-blue-600"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-300 dark:text-gray-700 text-2xl hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-slate-900/70 dark:bg-slate-100/70 backdrop-blur-md border-b border-slate-700 dark:border-slate-300 transition-colors duration-300">
            <ul className="flex flex-col gap-4 px-6 py-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block pb-1 text-lg transition-all duration-300 text-gray-300 dark:text-gray-700 hover:text-blue-300 dark:hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <style jsx>{`
        .logo3d {
          width: 45px;
          height: 45px;
          border-radius: 9999px;
          background: #9696b0;
          background: linear-gradient(
            90deg,
            rgba(150, 150, 176, 1) 0%,
            rgba(2, 12, 64, 1) 46%,
            rgba(28, 43, 31, 1) 100%
          );
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 800;
          font-size: 1.7rem;
          color: white;
          transition: transform 2.2s ease;
          transform-style: preserve-3d;
        }

        .logo3d:hover {
          transform: rotateY(360deg);
        }
      `}</style>
    </>
  );
}

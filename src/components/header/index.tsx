"use client";

import React, { useState } from "react";
import ThemeProvider from "@/providers/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <header className="top-0 left-0 w-full px-[3%] py-4 bg-white flex justify-between items-center z-[100] transition duration-300 relative">
        <Link
          href="/"
          className="relative text-[2.5rem] font-bold text-[var(--text-color)]"
        >
          GRIGO.MOTION&trade;
        </Link>

        <button
          className="md:hidden text-[var(--text-color)] z-[150]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
            onClick={() => setIsOpen(false)}
          />
        )}

        <nav
          className={`fixed top-0 left-0 w-full h-full bg-white shadow-md p-8 flex flex-col items-center text-center z-[100] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:flex-row md:w-auto md:h-auto md:p-0 md:shadow-none md:translate-x-0`}
        >
          <Link
            href="/projetos"
            className="text-[1.7rem] text-[var(--text-color)] font-semibold py-4 md:py-0 md:ml-6 transition duration-300 hover:text-[var(--alternative-color)]"
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/sobre"
            className="text-[1.7rem] text-[var(--text-color)] font-semibold py-4 md:py-0 md:ml-6 transition duration-300 hover:text-[var(--alternative-color)]"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="text-[1.7rem] text-[var(--text-color)] font-semibold py-4 md:py-0 md:ml-6 transition duration-300 hover:text-[var(--alternative-color)]"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
          <div className="mt-4 md:mt-0">
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}

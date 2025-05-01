"use client";
import Link from "next/link";
import { FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ClientHome() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-white dark:from-green-800 dark:to-gray-900">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-green-600 text-white border-b border-white">
        <h1 className="text-2xl font-bold">
          Fall<span className="text-orange-400">Developer</span>
        </h1>
        <div className="flex items-center gap-6">
          <Link href="/cv" className="hover:underline">
            CV
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow text-center mt-32">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-4"
        >
          Selamat Datang di Fall<span className="text-orange-400">Developer</span> Landing Page
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-l text-white max-w-xl mx-auto"
        >
        Dari baris kode hingga desain visual, lihat bagaimana saya mengekspresikan kreativitas di halaman Portfolio, dan pelajari perjalanan saya di halaman CV.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/cv"
            className="border border-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-600"
          >
            Lihat CV 📄
          </Link>
          <Link
            href="/portfolio"
            className="border border-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-600"
          >
            Lihat Portfolio 📂
          </Link>
        </motion.div>
      </main>

      {/* Ikon Sosial Media - dipindah ke bawah */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center gap-6 mb-4 text-white text-2xl"
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/AhmadNaufal1234/personalpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://tiktok.com/@woonyyy6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          href="https://instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-center py-6 text-sm text-gray-400"
      >
        © 2025 FallDeveloper di buat dengan Next.js
      </motion.footer>
    </div>
  );
}

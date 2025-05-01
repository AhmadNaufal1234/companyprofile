"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image"; // Importing Image component

export default function ClientHome() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">

      {/* Navbar */}
      <nav className="flex border-b border-b-yellow-400 items-center justify-between px-6 py-4 shadow-md bg-black text-white">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" 
            alt="TechFusion Logo"
            width={40} 
            height={40} // Adjust height as needed
            className="mr-2"
          />
          <h1 className="text-2xl font-bold">
            Tech<span className="text-yellow-400">Fusion</span>
          </h1>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:underline">Tentang Kami</Link>
          <Link href="/solutions" className="hover:underline">Solusi</Link>
          <Link href="/contact" className="hover:underline">Kontak</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow mt-32 px-4 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Side: Solusi and TechFusion */}
        <div className="w-full md:w-1/2 text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Solusi Teknologi Masa Depan untuk Bisnis Anda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            TechFusion membantu perusahaan beradaptasi dengan era digital melalui layanan blockchain, pengembangan aplikasi, dan solusi cloud yang scalable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 flex gap-4"
          >
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/solutions"
              className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
            >
              Lihat Solusi
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Crypto Prices and News */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-gray-800 p-4 rounded-xl"
            >
              <h3 className="font-bold text-lg mb-2">Popular</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>BTC Bitcoin</span><span>$96,485.79 <span className="text-green-400">+2.31%</span></span></li>
                <li className="flex justify-between"><span>ETH Ethereum</span><span>$1,848.37 <span className="text-green-400">+4.85%</span></span></li>
                <li className="flex justify-between"><span>BNB</span><span>$604.33 <span className="text-green-400">+1.14%</span></span></li>
                <li className="flex justify-between"><span>XRP</span><span>$2.24 <span className="text-green-400">+3.43%</span></span></li>
                <li className="flex justify-between"><span>SOL Solana</span><span>$152.29 <span className="text-green-400">+6.74%</span></span></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-gray-800 p-4 rounded-xl"
            >
              <h3 className="font-bold text-lg mb-2">News</h3>
              <ul className="text-sm space-y-2">
                <li>April NFT Sales Experience Decline Across Multiple Blockchains</li>
                <li>U.S. Unemployment Claims Reach New High in Late April</li>
                <li>World Liberty Financial Expands USD1 to Tron Blockchain</li>
                <li>U.S. GDP Decline Attributed to Inventory Backlog</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex justify-center gap-6 mt-16 mb-4 text-gray-600 dark:text-gray-300 text-2xl"
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-center py-6 text-sm text-gray-500"
      >
        © 2025 TechFusion. Dibangun dengan Next.js dan Tailwind CSS.
      </motion.footer>
    </div>
  );
}

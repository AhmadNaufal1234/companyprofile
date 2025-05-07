'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Workflow, Menu, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';  // Import framer-motion

const projects = [
    {
      title: 'Toko Online Fashion',
      description: 'Website e-commerce untuk brand fashion dengan fitur lengkap dan desain menarik.',
      image: '/images/g7.jpeg',
      link: '/project/toko-online-fashion',
      github: '#',
      demo: '#',
    },
    {
      title: 'Toko Makanan Organik',
      description: 'Situs e-commerce untuk toko makanan organik dengan integrasi pembayaran dan pengiriman.',
      image: '/images/g8.jpeg',
      link: '/project/toko-makanan-organik',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portal Berita',
      description: 'Website berita dengan fitur publikasi artikel, komentar, dan pengelolaan konten.',
      image: '/images/g9.jpeg',
      link: '/project/portal-berita',
      github: '#',
      demo: '#',
    },
    {
      title: 'Aplikasi Layanan Pelanggan',
      description: 'Sistem e-commerce berbasis layanan pelanggan dengan dashboard admin untuk analitik.',
      image: '/images/g10.jpeg',
      link: '/project/aplikasi-layanan-pelanggan',
      github: '#',
      demo: '#',
    },
];

export default function Portofolio() {
  // Menu toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="space-y-16 px-4 py-10 md:px-20 lg:px-32">
      {/* Navbar */}
      <header className="flex justify-end items-center py-1 bg-white w-full m-0 px-0 fixed top-0 right-0 z-50 border-b border-gray-200 shadow-md">
        <div className="mr-10 ml-4">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png" 
              alt="Logo"
              width={80}     
              height={10}     
              priority
            />
          </Link>
        </div>

        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </div>

        <nav className={`lg:flex space-x-6 ${isMenuOpen ? 'block mt-4' : 'hidden'} lg:block w-full ml-auto justify-end pr-5`}>
          <Link href="/" className="text-lg text-gray-800 hover:text-yellow-300 block py-2 text-right">Beranda</Link>
          <Link href="/Portfolio" className="text-lg text-gray-800 hover:text-yellow-300 block py-2 text-right">Portofolio</Link>
          <Link href="/Kontak" className="text-lg text-gray-800 hover:text-yellow-300 block py-2 text-right">Kontak</Link>
        </nav>
      </header>

      {/* Portofolio Header */}
      <motion.section
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Portofolio Kami</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Kami telah membantu berbagai UMKM Indonesia untuk memiliki website e-commerce yang profesional dan fungsional.
        </p>
      </motion.section>

      {/* Project Cards */}
      <motion.section
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="shadow-lg rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              {/* Gambar */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>

              {/* Konten */}
              <CardContent className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-2">
                    <Link href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">GitHub</Button>
                    </Link>
                    <Link href={project.demo || "#"} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">Demo</Button>
                    </Link>
                  </div>
                  <Link href={project.link || "#"}>
                    <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 ml-2">Detail</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 pt-10 pb-6 px-4 md:px-20 lg:px-32">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tentang Kami</h3>
            <p>Kami membantu UMKM Indonesia memiliki toko online yang profesional, menarik, dan mudah digunakan.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Layanan</h3>
            <ul className="space-y-1">
              <li><Link href="/#layanan-kami" className="hover:text-yellow-400">Web E-Commerce</Link></li>
              <li><Link href="/#layanan-kami" className="hover:text-yellow-400">Desain UI/UX</Link></li>
              <li><Link href="/#layanan-kami" className="hover:text-yellow-400">SEO & Optimasi</Link></li>
              <li><Link href="/#layanan-kami" className="hover:text-yellow-400">Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Navigasi</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-yellow-400">Beranda</Link></li>
              <li><Link href="/Portfolio" className="hover:text-yellow-400">Portofolio</Link></li>
              <li><Link href="/Kontak" className="hover:text-yellow-400">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Kontak</h3>
            <p>Email: oneweb@gmail.com</p>
            <p>WhatsApp: 0812-3456-7890</p>
            <p>Instagram: <a href="https://instagram.com/oneweb" target="_blank" className="hover:text-yellow-400">@oneweb</a></p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} OneWeb creator e-commerce UMKM . All rights reserved.
        </div>
      </footer>
    </main>
  );
}

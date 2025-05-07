'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X } from 'lucide-react'; // Hanya mengambil yang digunakan
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';  // Import framer-motion

export default function Beranda() {
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

      {/* Hero Section with Animation */}
      <motion.section
        className="text-center space-y-4 pt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Solusi Website E-Commerce untuk UMKM Indonesia</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Kami bantu UMKM membangun toko online yang profesional, menarik, dan terjangkau.
        </p>
        <Link href="/Kontak">
          <Button size="lg" className='mt-4'>Konsultasi gratis</Button>
        </Link>
      </motion.section>

      {/* Tentang Kami with Animation */}
      <motion.section
        id="tentang-kami"
        className="grid md:grid-cols-2 gap-8 items-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tentang Kami</h2>
          <p className="text-gray-700">
            Kami adalah tim pengembang web yang berkomitmen untuk membantu UMKM Go Digital melalui solusi website e-commerce yang efektif dan terjangkau.
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="rounded-2xl shadow-lg"
          >
            {['g2.jpeg', 'g4.jpeg', 'g6.jpeg'].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/${img}`}
                    alt={`Gambar ${i + 1}`}
                    width={800}
                    height={500}
                    className="rounded-2xl object-cover w-full h-auto"
                    priority={i === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Layanan Kami with Animation */}
      <motion.section
        id="layanan-kami"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Layanan Kami</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[{ title: 'Web E-Commerce', icon: <X className="w-6 h-6" />, desc: 'Pembuatan website toko online lengkap dengan fitur pembayaran dan pengiriman.' },
            { title: 'Desain UI/UX', icon: <X className="w-6 h-6" />, desc: 'Tampilan yang menarik dan mudah digunakan untuk meningkatkan penjualan.' },
            { title: 'SEO & Optimasi', icon: <X className="w-6 h-6" />, desc: 'Website yang mudah ditemukan di Google dan cepat diakses.' },
            { title: 'Maintenance & Support', icon: <X className="w-6 h-6" />, desc: 'Dukungan teknis dan perawatan rutin agar situs selalu optimal.' }
          ].map((layanan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }} // Add slight delay for each card
            >
              <Card className="text-center p-4">
                <CardContent>
                  <div className="mb-2 flex justify-center">{layanan.icon}</div>
                  <h3 className="text-lg font-semibold mb-1">{layanan.title}</h3>
                  <p className="text-sm text-gray-600">{layanan.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimoni Pelanggan with Animation */}
      <motion.section
        id="testimoni"
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Apa Kata Pelanggan Kami</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full max-w-3xl mx-auto"
        >
          {[{
            nama: 'Toko Online Fashion',
            testimoni: '“Website yang dibuat sangat cocok dengan visi brand kami. Fitur-fiturnya sangat mendukung untuk meningkatkan penjualan!”',
            foto: '/images/g7.jpeg',
          },
          {
            nama: 'Toko Makanan Organik',
            testimoni: '“Kami sangat puas dengan hasil kerja tim. Integrasi pembayaran dan pengiriman berjalan lancar, pelanggan kami senang berbelanja!”',
            foto: '/images/g8.jpeg',
          },
          {
            nama: 'Portal Berita',
            testimoni: '“Website berita kami sekarang lebih interaktif dan mudah dikelola. Pembaca juga merasa lebih nyaman mengakses artikel kami.”',
            foto: '/images/g9.jpeg',
          },
          {
            nama: 'Aplikasi Layanan Pelanggan',
            testimoni: '“Aplikasi yang dibuat sangat memudahkan tim kami dalam memberikan layanan pelanggan, dan dashboardnya memberikan wawasan yang sangat berguna.”',
            foto: '/images/g10.jpeg',
          },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <Card className="p-6 text-center shadow-md">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <Image
                      src={item.foto}
                      alt={item.nama}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="italic text-gray-700 mb-2">"{item.testimoni}"</p>
                  <p className="font-semibold text-gray-900">{item.nama}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* CTA Penutup with Animation */}
      <motion.section
        className="w-full text-center bg-gray-100 py-10 rounded-xl mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Siap Memulai Proyek Website Anda?</h2>
        <p className="text-gray-700 mb-4">Kami siap membantu UMKM tumbuh melalui website yang profesional dan terjangkau.</p>
        <Link href="/Portfolio">
          <Button size="lg">Lihat Portofolio Kami</Button>
        </Link>
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

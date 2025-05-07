'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone, MapPin, Video } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Kontak() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Pesan berhasil dikirim!');
    setForm({ nama: '', email: '', pesan: '' });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-20 lg:px-32">
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

      <motion.div
        className="mt-28 grid lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Form */}
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Hubungi Kami</h1>
          <p className="text-gray-600 mb-6">
            Kami siap membantu menjawab pertanyaan dan kebutuhan digital Anda.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-300"
              required
            />
            <textarea
              name="pesan"
              placeholder="Tulis pesan Anda..."
              rows={5}
              value={form.pesan}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-300"
              required
            />
            <Button type="submit" size="lg" className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-white">
              Kirim Pesan
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 text-gray-700">
            <Mail className="w-6 h-6 text-yellow-400" />
            <span>oneweb@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <Phone className="w-6 h-6 text-yellow-400" />
            <span>+62 812-3456-7890</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
  <Video className="w-6 h-6 text-yellow-400" />
  <a href="https://www.tiktok.com/@woonyyy6" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
    @woonyyy6
  </a>
</div>
          <div className="flex items-center gap-4 text-gray-700">
            <MapPin className="w-6 h-6 text-yellow-400" />
            <span>Lampung, Indonesia</span>
          </div>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-300">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4010.8019430993495!2d105.18660517117664!3d-5.359578665107044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1746627933578!5m2!1sid!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="bg-white border-t border-gray-200 mt-16 pt-10 pb-6 px-4 md:px-20 lg:px-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
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
      </motion.footer>
    </main>
  );
}

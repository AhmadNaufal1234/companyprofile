import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Workflow } from 'lucide-react';
import Image from 'next/image';

export default function Beranda() {
  return (
    <main className="space-y-16 px-4 py-10 md:px-20 lg:px-32">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Solusi Website E-Commerce untuk UMKM Indonesia</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Kami bantu UMKM membangun toko online yang profesional, menarik, dan terjangkau.
        </p>
        <Button size="lg" className="mt-4">Konsultasi Gratis</Button>
      </section>

      {/* Tentang Kami */}
      <section id="tentang-kami" className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tentang Kami</h2>
          <p className="text-gray-700">
            Kami adalah tim pengembang web yang berkomitmen untuk membantu UMKM Go Digital melalui solusi website e-commerce yang efektif dan terjangkau.
          </p>
        </div>
        <Image src="/images/team.jpg" alt="Tim Kami" width={500} height={300} className="rounded-2xl shadow" />
      </section>

      {/* Layanan Kami */}
      <section id="layanan-kami">
        <h2 className="text-2xl font-semibold text-center mb-6">Layanan Kami</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Web E-Commerce', icon: <CheckCircle className="w-6 h-6" />, desc: 'Pembuatan website toko online lengkap dengan fitur pembayaran dan pengiriman.' },
            { title: 'Desain UI/UX', icon: <Star className="w-6 h-6" />, desc: 'Tampilan yang menarik dan mudah digunakan untuk meningkatkan penjualan.' },
            { title: 'SEO & Optimasi', icon: <CheckCircle className="w-6 h-6" />, desc: 'Website yang mudah ditemukan di Google dan cepat diakses.' },
            { title: 'Maintenance & Support', icon: <Workflow className="w-6 h-6" />, desc: 'Dukungan teknis dan perawatan rutin agar situs selalu optimal.' },
          ].map((layanan, i) => (
            <Card key={i} className="text-center p-4">
              <CardContent>
                <div className="mb-2 flex justify-center">{layanan.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{layanan.title}</h3>
                <p className="text-sm text-gray-600">{layanan.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Penutup */}
      <section className="text-center bg-gray-100 py-10 rounded-xl">
        <h2 className="text-2xl font-semibold mb-2">Siap Memulai Proyek Website Anda?</h2>
        <p className="text-gray-700 mb-4">Kami siap membantu UMKM tumbuh melalui website yang profesional dan terjangkau.</p>
        <Button size="lg">Lihat Portofolio Kami</Button>
      </section>
    </main>
  );
}

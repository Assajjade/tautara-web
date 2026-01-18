import React from 'react';
import { ArrowRight, Users, Compass, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* 1. Hero Section: Platform Belajar Komunitas */}
      <section className="relative py-20 px-6 lg:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Tautara
          </h1>
          <p className="text-xl lg:text-2xl font-semibold text-slate-600 mb-8">
            Platform Belajar Komunitas [cite: 2]
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Menautkan Tujuan Perubahan dengan Proses Pembelajaran [cite: 12]
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
            Tautara adalah platform yang menjembatani lembaga, komunitas, dan fasilitator dalam merancang dan menjalankan proses belajar yang bermakna[cite: 11].
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              Jelajahi Program
            </button>
            <button className="border-2 border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </section>

      {/* 2. Filosofi Section: Taut + Antara & Taut + Arah */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Taut + Antara */}
            <div className="p-8 border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taut + Antara [cite: 6]</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Menautkan di antara para pembelajar sepanjang hayat sebagai penghubung, perantara, dan jembatan bagi komunitas Anda[cite: 7, 8, 9].
              </p>
            </div>

            {/* Taut + Arah */}
            <div className="p-8 border rounded-2xl bg-white shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Taut + Arah [cite: 16]</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Membantu penggerak perubahan bukan hanya sekadar tahu, tapi memahami ke mana harus melangkah melalui fasilitasi pertumbuhan[cite: 17, 19].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Nilai Inti Kami [cite: 20]</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><ArrowRight /></div>
              <h4 className="font-bold uppercase tracking-widest">Connector [cite: 21]</h4>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><Users /></div>
              <h4 className="font-bold uppercase tracking-widest">People-Oriented [cite: 22]</h4>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><ShieldCheck /></div>
              <h4 className="font-bold uppercase tracking-widest">Trustworthy </h4>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 flex justify-center"><Zap /></div>
              <h4 className="font-bold uppercase tracking-widest">Empower [cite: 24]</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
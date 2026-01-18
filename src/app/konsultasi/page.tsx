import React from 'react';
import { MessageSquare, Send, HelpCircle } from 'lucide-react';

export default function KonsultasiPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section  */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Jadwalkan Konsultasi Gratis</h1>
          <p className="text-slate-400">Ceritakan tantangan Anda dan temukan solusinya!</p>
        </div>

        {/* Form Konsultasi  */}
        <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
          <form className="grid md:grid-cols-2 gap-6">
            
            {/* Nama Lengkap [cite: 181, 191] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Contoh: John Doe" 
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Nomor WhatsApp [cite: 183, 201] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Nomor WhatsApp</label>
              <input 
                type="text" 
                placeholder="08123123123" 
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email [cite: 182, 193] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Perusahaan / Organisasi</label>
              <input 
                type="email" 
                placeholder="mail@email.com" 
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Nama Perusahaan [cite: 202] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Nama Perusahaan / Komunitas</label>
              <input 
                type="text" 
                placeholder="Contoh: Daimong.id" 
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Topik Pelatihan [cite: 185, 195] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Topik Pelatihan yang Diinginkan</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-400">
                <option>Pilih Topik</option>
                <option>Leadership Skills</option>
                <option>Project Management</option>
                <option>Community Development</option>
              </select>
            </div>

            {/* Topik Lainnya [cite: 186, 204] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Topik Lainnya</label>
              <input 
                type="text" 
                placeholder="Tulis topik spesifik jika tidak ada di atas" 
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Skema Pelaksanaan [cite: 187, 196] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Skema Pelaksanaan</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-400">
                <option>Pilih Pelaksanaan</option>
                <option>Daring (Online)</option>
                <option>Luring (Offline)</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* Jumlah Peserta [cite: 188] */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Estimasi Jumlah Peserta</label>
              <input 
                type="number" 
                placeholder="0" 
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Lokasi Training [cite: 205] */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-slate-300">Lokasi Pelatihan / Alamat</label>
              <textarea 
                placeholder="Contoh: Jakarta / Bandung" 
                rows={2}
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            {/* Sumber Informasi [cite: 189, 198] */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-slate-300">Tahu informasi Tautara darimana?</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-slate-400">
                <option>Pilih Sumber</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Rekomendasi Teman</option>
                <option>Lainnya</option>
              </select>
            </div>

            {/* Button Submit */}
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-blue-900/20">
                <Send size={18} /> Kirim Permintaan Konsultasi
              </button>
              <p className="text-center text-xs text-slate-500 mt-4 italic">
                Tautara akan menghubungi Anda melalui Email/WhatsApp untuk melakukan konsultasi secara asinkronus. 
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
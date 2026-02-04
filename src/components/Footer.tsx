import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#a294cf] text-white pt-12 pb-2 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-10">

          <div className="flex flex-col gap-6">
            <div className="w-fit border-2 border-white px-4 py-2 rounded-2xl font-black text-2xl tracking-tighter hover:bg-white hover:text-[#a294cf] transition-all cursor-default">
              Logo
            </div>
            <div className="flex flex-col gap-1 italic font-medium opacity-90 tracking-wide text-lg">
              <p>Access,</p>
              <p>Agency,</p>
              <p>Impact</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black tracking-tight border-b border-white/20 pb-2 w-fit">Layanan</h4>
            <ul className="flex flex-col gap-4 font-medium opacity-80">
              <li><Link href="/agency" className="hover:text-[#c1d061] hover:opacity-100 transition-all flex items-center gap-2 group">Seminar <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/agency" className="hover:text-[#c1d061] hover:opacity-100 transition-all flex items-center gap-2 group">Training <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link href="/konsultasi" className="hover:text-[#c1d061] hover:opacity-100 transition-all flex items-center gap-2 group">Konsultasi <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black tracking-tight border-b border-white/20 pb-2 w-fit">Informasi</h4>
            <ul className="flex flex-col gap-4 font-medium opacity-80">
              <li><Link href="/konsultasi" className="hover:text-[#c1d061] hover:opacity-100 transition-all">Kontak Kami</Link></li>
              <li><Link href="/about" className="hover:text-[#c1d061] hover:opacity-100 transition-all">Tentang Kami</Link></li>
              <li><Link href="/akses" className="hover:text-[#c1d061] hover:opacity-100 transition-all">Mitra Kami</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-black tracking-tight border-b border-white/20 pb-2 w-fit">Kontak</h4>
            <ul className="flex flex-col gap-5 font-medium">
              <li>
                <a href="mailto:tautara@gmail.com" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-[#c1d061] transition-all group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#c1d061]/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">tautara@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+6281213143270" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-[#c1d061] transition-all group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#c1d061]/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm">(+62) 812-1314-3270</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/tautara.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-80 hover:opacity-100 hover:text-[#c1d061] transition-all group">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#c1d061]/20 transition-colors">
                    <Instagram size={18} />
                  </div>
                  <span className="text-sm">tautara.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
          <p>© {new Date().getFullYear()} Tautara. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

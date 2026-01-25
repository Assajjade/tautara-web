import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='fixed z-50 w-full bg-primary backdrop-blur-md text-white'>
            <div className='max-w-7xl mx-auto px-6 h-15 flex items-center justify-between'>
                <div className='flex gap-5'>
                    <Link href="/" className='text-2xl font-bold tracking-tight border-2 px-2 rounded-2xl' >
                        Tautara
                    </Link>

                    <div className='hidden md:flex items-center gap-3 text-l font-semibold'>
                        <Link href="">Beranda</Link>
                        <Link href="">Tentang Kami</Link>
                        <Link href="">Program</Link>
                        <Link href="">Mitra Ajar</Link>
                        <Link href="">Ruang Belajar</Link>
                    </div>
                </div>

                <div className='hidden md:flex items-center gap-2'>
                        <Link href="">Buat Akun</Link>
                        <span>|</span>
                        <Link href="">Masuk</Link>
                </div>

                <div className="md:hidden text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}
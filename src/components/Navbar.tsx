'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from './Topbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+90 541 676 5318";

  const menuItems = [
    { title: 'Anasayfa', path: '/' },
    { title: 'Hizmetler', path: '/hizmetler' },
    { title: 'Hakkımızda', path: '/hakkimizda' },
    { title: 'Galeri', path: '/galeri' },
    { title: 'İletişim', path: '/iletisim' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
                <div className="relative h-12 w-12">
                  <Image
                    src="/logo.jpeg"
                    alt="İzmir Bulut Oto Çekici"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 48px, 48px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                    İzmir Bulut Oto Çekici
                  </h1>
                  <p className="text-xs sm:text-xs text-gray-600 leading-tight">
                    7/24 Yol Yardım Hizmeti
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Bize Ulaşın
              </a>
            </div>

            {/* Mobile menu button and call button */}
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Bize Ulaşın
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 
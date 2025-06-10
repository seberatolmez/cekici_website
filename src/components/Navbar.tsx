'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from './Topbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const phoneNumber = "+90 541 676 5318";

  const serviceItems = [
    { title: 'İzmir Çekici', path: '/hizmetler' },
    { title: 'İzmir Yol Yardım', path: '/izmir-yol-yardim' },
    { title: 'İzmir Oto Kurtarma', path: '/izmir-oto-kurtarma' },
    { title: 'İzmir Araç Kurtarma', path: '/izmir-arac-kurtarma' },
    { title: 'İzmir Oto Çekici', path: '/izmir-oto-cekici' },
    { title: 'Oto Çekici İzmir', path: '/oto-cekici-izmir' },
    { title: 'Oto Kurtarma İzmir', path: '/oto-kurtarma-izmir' },
  ];

  const menuItems = [
    { title: 'Anasayfa', path: '/' },
    { title: 'Hizmetler', path: '/hizmetler', hasDropdown: true },
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
              <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                  <Image
                    src="/logo.jpeg"
                    alt="İzmir Bulut Oto Çekici"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 40px, 48px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-sm sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                    İzmir Bulut Oto Çekici
                  </h1>
                  <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                    7/24 Yol Yardım Hizmeti
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.hasDropdown ? (
                    <div
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.title}
                      {isServicesOpen && (
                        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                          {serviceItems.map((service) => (
                            <Link
                              key={service.path}
                              href={service.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Bize Ulaşın
              </a>
            </div>

            {/* Mobile menu button and call button */}
            <div className="flex items-center space-x-2">
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="md:hidden bg-blue-600 text-white px-2 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors whitespace-nowrap ml-auto"
              >
                Bize Ulaşın
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Menüyü aç</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
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
              <div key={item.path}>
                {item.hasDropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    >
                      {item.title}
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-1">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 
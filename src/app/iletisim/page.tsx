'use client';

import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  const phoneNumber = "+90 541 676 5318";
  const whatsappNumber = "905416765318";
  const email = "bulutyolyardim35@gmail.com";
  const address = "İzmir, Türkiye";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.1234567890123!2d27.12345678901234!3d38.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjQiTiAyN8KwMDcnMjQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str";

  return (
    <div className="bg-gray-50">
      {/* Modern Page Header */}
      <div className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85" />
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  İletişim
                </h1>
                <div className="h-1 w-20 bg-blue-400 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Bizimle iletişime geçin
              </p>
            </div>

            {/* Right Side - SEO Content */}
            <div className="space-y-8 text-center lg:text-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  İzmir&apos;in Güvenilir Yol Yardım Partneri
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  7/24 profesyonel oto çekici ve yol yardım hizmetleri sunuyoruz. İzmir&apos;in tüm ilçelerinde hızlı ve güvenilir çözümler için hemen arayın. Deneyimli ekibimiz ve modern ekipmanlarımızla yanınızdayız.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="group inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhone className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Hemen Ara
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <FaWhatsapp className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <FaPhone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {phoneNumber}
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <FaWhatsapp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {phoneNumber}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <FaEnvelope className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
            <a
              href={`mailto:${email}`}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              {email}
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Button */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Bize Ulaşın</h2>
            <p className="text-blue-100 mb-6">
              7/24 hizmetinizdeyiz. Hemen arayın, en kısa sürede yanınızdayız.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              <FaPhone className="mr-2" />
              {phoneNumber}
            </a>
          </div>

          {/* Location Button */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Konum</h2>
            <p className="text-purple-100 mb-6">
              İzmir&apos;in her noktasına hizmet veriyoruz. Bizi ziyaret edin.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
            >
              <FaMapMarkerAlt className="mr-2" />
              Haritada Göster
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
} 
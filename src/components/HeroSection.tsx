import Image from 'next/image';

const HeroSection = () => {
  const phoneNumber = "+90 541 676 5318";

  return (
    <div className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photo/p16.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-[center_80%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 min-h-[120vh] flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            7/24 İzmir Yol Yardım Hizmeti
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Güvenilir, hızlı ve profesyonel çekici hizmeti ile yanınızdayız.
            Akü takviyesi, lastik değişimi ve araç kurtarma hizmetlerimiz için hemen arayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors text-center"
            >
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors text-center"
            >
              Konum Gönder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 
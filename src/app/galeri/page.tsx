import Image from 'next/image';
import { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { FaEnvelope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Galeri | İzmir Oto Çekici ve Yol Yardım Hizmetleri',
  description: "İzmir'de oto çekici ve yol yardım hizmetlerimizden görüntüler. Profesyonel ekipmanlarımız ve hizmet kalitemiz.",
  keywords: 'izmir oto çekici, oto çekici izmir, yol yardım, 7/24 çekici, profesyonel çekici, izmir çekici hizmeti',
};

const images = [
  {
    src: '/photo/p1.jpeg',
    alt: 'İzmir Oto Çekici Hizmeti',
    category: 'Oto Çekici',
    description: 'Profesyonel oto çekici hizmetimiz ile araçlarınızı güvenle taşıyoruz.'
  },
  {
    src: '/photo/p2.jpeg',
    alt: 'Yol Yardım Hizmeti',
    category: 'Yol Yardım',
    description: '7/24 yol yardım hizmetimiz ile yanınızdayız.'
  },
  {
    src: '/photo/p3.jpeg',
    alt: 'Araç Kurtarma',
    category: 'Kurtarma',
    description: 'Uzman ekibimiz ile araç kurtarma hizmeti.'
  },
  {
    src: '/photo/p4.jpeg',
    alt: 'Lastik Değişimi',
    category: 'Lastik Hizmeti',
    description: 'Hızlı ve güvenli lastik değişimi hizmeti.'
  },
  {
    src: '/photo/p5.jpeg',
    alt: 'Akü Takviyesi',
    category: 'Akü Hizmeti',
    description: 'Profesyonel akü takviyesi hizmeti.'
  },
  {
    src: '/photo/p6.jpeg',
    alt: 'Çekici Hizmeti',
    category: 'Çekici',
    description: 'Modern ekipmanlarımız ile çekici hizmeti.'
  },
  {
    src: '/photo/p7.jpeg',
    alt: 'Yol Yardım Ekibi',
    category: 'Ekip',
    description: 'Deneyimli yol yardım ekibimiz.'
  },
  {
    src: '/photo/p8.jpeg',
    alt: 'Araç Taşıma',
    category: 'Taşıma',
    description: 'Güvenli araç taşıma hizmeti.'
  },
  {
    src: '/photo/p9.jpeg',
    alt: '7/24 Hizmet',
    category: '7/24 Hizmet',
    description: 'Yılın 365 günü hizmetinizdeyiz.'
  }
];

export default function GalleryPage() {
  const email = "bulutyolyardim35@gmail.com";

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="relative min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  Galeri
                </h1>
                <div className="h-1 w-20 bg-blue-400 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                Hizmetlerimizden kareler
              </p>
            </div>

            {/* Right Side - SEO Content */}
            <div className="space-y-8 text-center lg:text-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  Profesyonel Hizmet Görüntüleri
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  İzmir'de sunduğumuz oto çekici ve yol yardım hizmetlerimizden kareler. 
                  Modern ekipmanlarımız ve deneyimli ekibimizle kaliteli hizmet sunuyoruz.
                </p>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center text-blue-200 hover:text-white transition-colors mt-4"
                >
                  <FaEnvelope className="mr-2" />
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ width: '100%', height: '100%' }}
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
                  <p className="text-sm text-blue-200 mb-2">{image.category}</p>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
} 
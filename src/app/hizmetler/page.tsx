import Image from 'next/image';
import { Metadata } from 'next';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | İzmir Oto Çekici ve Yol Yardım Hizmeti',
  description: 'İzmir&apos;de 7/24 oto çekici, yol yardım, akü takviyesi, lastik değişimi ve araç kurtarma hizmetleri. Profesyonel ekip ve modern ekipmanlarla yanınızdayız.',
  keywords: 'izmir oto çekici, yol yardım, akü takviyesi, lastik değişimi, araç kurtarma, 7/24 çekici hizmeti',
};

const services = [
  {
    title: 'Oto Çekici Hizmeti',
    description: 'İzmir&apos;in her noktasında 7/24 oto çekici hizmeti sunuyoruz. Modern ekipmanlarımız ve deneyimli ekibimizle araçlarınızı güvenle taşıyoruz.',
    image: '/photo/p10.jpeg',
    features: [
      '7/24 hizmet',
      'Hızlı müdahale',
      'Güvenli taşıma',
      'Uygun fiyatlar'
    ]
  },
  {
    title: 'Yol Yardım',
    description: 'Yolda kaldığınızda hızlı ve güvenilir yol yardım hizmeti. İzmir&apos;in her noktasına ortalama 15-20 dakika içinde ulaşıyoruz.',
    image: '/photo/p12.jpeg',
    features: [
      'Hızlı müdahale',
      'Uzman ekip',
      'Modern ekipman',
      '7/24 hizmet'
    ]
  },
  {
    title: 'Akü Takviyesi',
    description: 'Akünüz bittiğinde profesyonel akü takviyesi hizmeti. Doğru ekipmanlarla güvenli ve hızlı çözüm sunuyoruz.',
    image: '/photo/p20.png',
    features: [
      'Profesyonel ekipman',
      'Güvenli takviye',
      'Hızlı müdahale',
      '7/24 hizmet'
    ]
  },
  {
    title: 'Lastik Değişimi',
    description: 'Lastik patlaması durumunda hızlı ve güvenli lastik değişimi hizmeti. Tüm araç tipleri için profesyonel çözüm.',
    image: '/photo/p13.jpeg',
    features: [
      'Profesyonel ekipman',
      'Güvenli değişim',
      'Hızlı müdahale',
      '7/24 hizmet'
    ]
  },
  {
    title: 'Araç Kurtarma',
    description: 'Kaza, çukur veya herhangi bir nedenden dolayı mahsur kalan araçlarınız için profesyonel kurtarma hizmeti.',
    image: '/photo/p18.jpeg',
    features: [
      'Modern ekipman',
      'Uzman ekip',
      'Güvenli kurtarma',
      '7/24 hizmet'
    ]
  },
  {
    title: "Nakliye Hizmeti",
    description: "İzmir&apos;deki her noktaya hızlı ve güvenli nakliye hizmeti. Modern ekipmanlarımızla taşıyoruz.",
    image: "/photo/p14.jpeg",
    features: [
      "Hızlı müdahale",
      "Güvenli taşıma",
      "Uygun fiyatlar",
      "7/24 hizmet"
    ]
  }
];

const districts = [
  "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", 
  "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", 
  "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", 
  "Selçuk", "Tire", "Torbalı", "Urla"
];

export default function ServicesPage() {
  const phoneNumber = "+90 541 676 5318";
  const email = "bulutyolyardim35@gmail.com";

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  Hizmetlerimiz
                </h1>
                <div className="h-1 w-20 bg-blue-400 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                7/24 profesyonel yol yardım hizmetleri
              </p>
            </div>

            {/* Right Side - SEO Content */}
            <div className="space-y-8 text-center lg:text-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  İzmir'in Her Noktasında Yanınızdayız
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  İzmir'in tüm ilçelerinde 7/24 profesyonel oto çekici ve yol yardım hizmetleri sunuyoruz. 
                  Deneyimli ekibimiz ve modern ekipmanlarımızla yanınızdayız.
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

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg
                        className="h-5 w-5 text-blue-600 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Districts Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İzmir'in Tüm İlçelerinde Hizmetinizdeyiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İzmir'in 30 ilçesinde 7/24 oto çekici ve yol yardım hizmeti veriyoruz.
              Hızlı ve güvenilir çözümler için hemen arayın.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {districts.map((district, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors"
              >
                <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {district}
                </h3>
                <p className="text-sm text-gray-600">
                  Oto Çekici Hizmeti
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
} 
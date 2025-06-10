import Image from 'next/image';
import { Metadata } from 'next';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'İzmir Oto Kurtarma Hizmetleri | 7/24 Profesyonel Araç Kurtarma',
  description: 'İzmir&apos;de 7/24 profesyonel oto kurtarma hizmeti. Kaza, çukur veya herhangi bir nedenden dolayı mahsur kalan araçlarınız için hızlı ve güvenli çözümler.',
  keywords: 'izmir oto kurtarma, oto kurtarma izmir, araç kurtarma, 7/24 oto kurtarma, izmir araç kurtarma, profesyonel oto kurtarma',
};

const services = [
  {
    title: 'Oto Kurtarma Hizmeti',
    description: 'İzmir&apos;in her noktasında 7/24 profesyonel oto kurtarma hizmeti sunuyoruz. Modern ekipmanlarımız ve deneyimli ekibimizle araçlarınızı güvenle kurtarıyoruz.',
    image: '/photo/p18.jpeg',
    features: [
      '7/24 hizmet',
      'Hızlı müdahale',
      'Modern ekipman',
      'Uzman ekip'
    ]
  },
  {
    title: 'Kaza Sonrası Kurtarma',
    description: 'Kaza sonrası araçlarınız için profesyonel kurtarma hizmeti. Hassas ve güvenli bir şekilde araçlarınızı kurtarıyoruz.',
    image: '/photo/p10.jpeg',
    features: [
      'Güvenli kurtarma',
      'Hassas müdahale',
      'Profesyonel ekip',
      '7/24 hizmet'
    ]
  },
  {
    title: 'Çukur ve Mahsur Kalma',
    description: 'Çukura düşen veya herhangi bir nedenden dolayı mahsur kalan araçlarınız için hızlı kurtarma hizmeti.',
    image: '/photo/p12.jpeg',
    features: [
      'Hızlı müdahale',
      'Modern ekipman',
      'Güvenli kurtarma',
      '7/24 hizmet'
    ]
  }
];

const districts = [
  "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", 
  "Çiğli", "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka", 
  "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", 
  "Selçuk", "Tire", "Torbalı", "Urla"
];

export default function OtoKurtarmaPage() {
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
                  İzmir Oto Kurtarma Hizmetleri
                </h1>
                <div className="h-1 w-20 bg-blue-400 mx-auto lg:mx-0 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-blue-100 font-light">
                7/24 profesyonel oto kurtarma hizmetleri
              </p>
            </div>

            {/* Right Side - SEO Content */}
            <div className="space-y-8 text-center lg:text-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  İzmir&apos;in Her Noktasında Yanınızdayız
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  İzmir&apos;in tüm ilçelerinde 7/24 profesyonel oto kurtarma hizmetleri sunuyoruz. 
                  Kaza, çukur veya herhangi bir nedenden dolayı mahsur kalan araçlarınız için hemen arayın.
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

      {/* SEO Optimized Description Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              İzmir Oto Kurtarma Hizmetlerimiz
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                İzmir Oto Kurtarma hizmetimiz, şehir genelinde 7/24 profesyonel kurtarma çözümleri sunar. Modern ekipmanlarımız ve deneyimli ekibimizle, aracınızı kaza sonrası, çukurda kalma veya mahsur kalma gibi tüm acil durumlarda güvenle kurtarıyoruz.
              </p>
              <p>
                Stratejik olarak konumlandırılmış ekiplerimiz sayesinde, İzmir'in her noktasına ortalama 15-20 dakika içinde ulaşarak hızlı müdahale sağlıyoruz. Tüm araç tipleri için özel kurtarma ekipmanlarımız ve güvenli taşıma yöntemlerimizle hizmetinizdeyiz.
              </p>
              <p>
                İzmir Oto Kurtarma olarak, müşteri memnuniyetini ön planda tutuyor, şeffaf fiyatlandırma politikamızla önceden belirlenen fiyatlar üzerinden hizmet veriyoruz. Acil durumlarınızda bize ulaşın, profesyonel kurtarma hizmetimizle yanınızda olalım.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
} 
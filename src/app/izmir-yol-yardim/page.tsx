import Image from 'next/image';
import { Metadata } from 'next';
import { FaEnvelope } from 'react-icons/fa';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'İzmir Yol Yardım Hizmetleri | 7/24 Profesyonel Yol Yardım',
  description: 'İzmir&apos;de 7/24 profesyonel yol yardım hizmeti. Akü takviyesi, lastik değişimi, yakıt ikmali ve daha fazlası için hemen arayın. Hızlı ve güvenilir çözümler.',
  keywords: 'izmir yol yardım, yol yardım izmir, 7/24 yol yardım, akü takviyesi, lastik değişimi, yakıt ikmali, izmir yol yardım hizmeti',
};

const services = [
  {
    title: 'Yol Yardım Hizmeti',
    description: 'İzmir&apos;in her noktasında 7/24 profesyonel yol yardım hizmeti sunuyoruz. Deneyimli ekibimiz ve modern ekipmanlarımızla yanınızdayız.',
    image: '/photo/p12.jpeg',
    features: [
      '7/24 hizmet',
      'Hızlı müdahale',
      'Uzman ekip',
      'Modern ekipman'
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
  }
];


export default function YolYardimPage() {
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
                  İzmir Yol Yardım Hizmetleri
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
                  İzmir&apos;in Her Noktasında Yanınızdayız
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  İzmir&apos;in tüm ilçelerinde 7/24 profesyonel yol yardım hizmetleri sunuyoruz. 
                  Akü takviyesi, lastik değişimi, yakıt ikmali ve daha fazlası için hemen arayın.
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
              İzmir Yol Yardım Hizmetlerimiz
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                İzmir Yol Yardım hizmetimiz, şehir genelinde 7/24 hızlı müdahale sağlar. 
                Modern ekipmanlarımız ve uzman ekibimizle, aracınızın her türlü yol yardım ihtiyacına 
                anında çözüm sunuyoruz. Akü takviyesi, lastik değişimi ve yakıt ikmali gibi temel 
                yol yardım hizmetlerimiz, İzmir&apos;in tüm ilçelerinde aynı kalite ve hızda sunulmaktadır.
              </p>
              <p>
                Profesyonel yol yardım ekibimiz, ortalama 15-20 dakika içinde yanınızda olarak 
                sorununuzu çözüme kavuşturur. Tüm araç tipleri için özel ekipmanlarımız ve 
                deneyimli personelimizle, güvenli ve etkili yol yardım hizmeti sağlıyoruz.
              </p>
              <p>
                İzmir Yol Yardım olarak, müşteri memnuniyetini ön planda tutuyor, şeffaf fiyatlandırma 
                politikamızla önceden belirlenen fiyatlar üzerinden hizmet veriyoruz. Acil durumlarınızda 
                bize ulaşın, profesyonel yol yardım hizmetimizle yanınızda olalım.
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
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/photo/p18.jpeg"
              alt="İzmir Oto Çekici Profesyonel Ekip"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              İzmir&apos;in Güvenilir Yol Yardım Partneri
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              20 yılı aşkın tecrübemizle İzmir ve çevresinde profesyonel oto çekici ve yol yardım hizmetleri sunuyoruz. Modern ekipmanlarımız ve uzman ekibimizle 7/24 yanınızdayız.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 text-2xl font-bold mb-2">5000+</div>
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 text-2xl font-bold mb-2">15+</div>
                <div className="text-gray-600">Yıllık Tecrübe</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 text-2xl font-bold mb-2">7/24</div>
                <div className="text-gray-600">Kesintisiz Hizmet</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 text-2xl font-bold mb-2">100%</div>
                <div className="text-gray-600">Müşteri Memnuniyeti</div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/hizmetler"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Hizmetlerimizi Keşfedin
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
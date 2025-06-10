'use client';

import { FaMapMarkerAlt } from 'react-icons/fa';

const locations = [
  {
    name: "İzmir Merkez",
    description: "İzmir Merkez ve tüm ilçeler",
    isMain: true
  },
  {
    name: "Karşıyaka",
    description: "Karşıyaka oto çekici ve yol yardım hizmeti"
  },
  {
    name: "Bornova",
    description: "Bornova oto çekici ve yol yardım hizmeti"
  },
  {
    name: "Buca",
    description: "Buca oto çekici ve yol yardım hizmeti"
  },
  {
    name: "Çiğli",
    description: "Çiğli oto çekici ve yol yardım hizmeti"
  },
  {
    name: "Konak",
    description: "Konak oto çekici ve yol yardım hizmeti"
  }
];

export default function LocationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            İzmir Oto Çekici Hizmet Bölgelerimiz
          </h2>
          <p className="text-lg text-gray-600 text-center">
            İzmir'in tüm ilçelerinde 7/24 oto çekici ve yol yardım hizmeti sunuyoruz.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl transition-all duration-300 ${
                location.isMain
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  location.isMain ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <FaMapMarkerAlt className={`w-6 h-6 ${
                    location.isMain ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-semibold ${
                      location.isMain ? 'text-blue-900' : 'text-gray-900'
                    }`}>
                      {location.name}
                    </h3>
                    {location.isMain && (
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        Ana Hizmet
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 ${
                    location.isMain ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                    {location.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              İzmir Oto Çekici ve Yol Yardım Hizmeti
            </h3>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">
                İzmir'in her noktasında 7/24 oto çekici ve yol yardım hizmeti sunuyoruz. 
                Karşıyaka, Bornova, Buca, Çiğli ve Konak başta olmak üzere İzmir'in tüm ilçelerinde 
                hızlı ve güvenilir çekici hizmeti veriyoruz.
              </p>
              <p className="mb-4">
                İzmir oto çekici hizmetimizle, aracınızın güvenliğini en üst düzeyde tutarak 
                hızlı ve etkili çözümler sağlıyoruz. Deneyimli ekibimiz ve modern ekipmanlarımızla 
                İzmir'in her noktasında yanınızdayız.
              </p>
              <p>
                İzmir çekici hizmetimiz, acil durumlarınızda en kısa sürede yanınızda olmak için 
                hazır bekliyor. Aracınızın çekilmesi veya yol yardımı gerektiğinde, İzmir'in 
                her noktasına hızlı ulaşım sağlıyoruz. Güvenilir ve profesyonel çekici hizmetimizle 
                İzmir'de yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
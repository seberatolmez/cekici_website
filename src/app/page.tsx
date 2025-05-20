import Image from "next/image";
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const phoneNumber = "+90 541 676 5318"; // Telefon numarasını buraya ekleyin

  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={60}
              height={50}
              className="rounded-full"
            />
            <div className="text-2xl font-bold text-blue-600">Bulut Oto Çekici</div>
          </div>
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
            <FaPhone />
            <span>{phoneNumber}</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 pt-16">
        <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-[120vh]">
          <Image
            src="/photo.jpeg"
            alt="Bulut Oto Çekici"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
      </section>

      {/* Contact Cards */}
      <section className=" bg-gray-50 container mx-auto px-4 py-12">
  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

    {/* Telefon Kutusu */}
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow border border-blue-100">
      <div className="bg-blue-100 p-4 rounded-full">
        <FaPhone className="text-3xl text-blue-700" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">Bizi Arayın</h3>
        <a href={`tel:${phoneNumber}`} className="text-blue-700 hover:text-blue-900 font-medium text-lg">
          {phoneNumber}
        </a>
      </div>
    </div>

    {/* WhatsApp Kutusu */}
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow border border-green-100">
      <div className="bg-green-100 p-4 rounded-full">
        <FaWhatsapp className="text-3xl text-green-700" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">WhatsApp</h3>
        <a
          href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 hover:text-green-900 font-medium text-lg"
        >
          {phoneNumber}
        </a>
      </div>
    </div>

  </div>
</section>


      {/* Hizmet Tanıtımı - SEO Uyumlu */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
      İzmir Çekici Hizmeti – 7/24 Yol Yardımı
    </h2>

    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-lg">
      İzmir genelinde <strong>oto çekici,kurtarma </strong>ve <strong>acil yol yardımı</strong> hizmeti sunuyoruz. 
      Haftanın her günü <strong>7/24</strong> ulaşılabilir durumdayız. 
      Aracınız yolda mı kaldı? Hemen <strong>İzmir çekici</strong> hizmetiyle yanınızdayız.
    </p>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Oto Çekici</h3>
        <p className="text-gray-700">
          İzmir'in tüm bölgelerinde, arızalanan veya kaza yapan araçlarınıza hızlı müdahale. 
          <strong> Uygun fiyatlı, güvenli</strong> ve <strong>zamanında</strong> çekici hizmeti sağlıyoruz.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">7/24 Yol Yardımı</h3>
        <p className="text-gray-700">
          Gündüz gece fark etmeden; lastik patlaması, akü bitmesi ya da yakıt tükenmesi gibi durumlarda bizi arayarak hızlı yardım alabilirsiniz.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">İzmir ve Çevresi</h3>
        <p className="text-gray-700">
          Bornova, Karşıyaka, Konak, Gaziemir ve diğer <strong>tüm ilçelerde</strong> çekici ihtiyacınıza anında yanıt veriyoruz.
          İzmir çekici hizmeti artık çok daha hızlı!
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Nakliye Hizmeti</h3>
        <p className="text-gray-700">
          Ev ve ofis eşyalarınızı hızlı, güvenli ve özenli bir şekilde taşıyoruz.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Balıkesir ve Çevresi</h3>
        <p className="text-gray-700">
           Balıkesir ve çevresinde <strong>şehirler arası oto çekici hizmeti</strong> sunuyoruz. 
        </p>
      </div>

     
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Bulut Oto Çekici. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </main>
  );
}

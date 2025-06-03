import Image from 'next/image';
import { Metadata } from 'next';
import CallToAction from '@/components/CallToAction';
import { FaCheckCircle, FaShieldAlt, FaClock, FaSmile, FaTools, FaStar, FaBullseye } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Hakkımızda | İzmir Oto Çekici ve Yol Yardım Hizmeti',
  description: 'İzmir&apos;de 7/24 oto çekici ve yol yardım hizmeti sunan güvenilir firma. Deneyimli ekibimiz ve modern ekipmanlarımızla yanınızdayız.',
  keywords: 'izmir oto çekici, yol yardım, 7/24 çekici hizmeti, güvenilir çekici',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="relative min-h-[40vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Hakkımızda
            </h1>
            <div className="h-1 w-20 bg-blue-400 mx-auto rounded-full mb-4"></div>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
              İzmir Bulut Oto Çekici: İzmir&apos;de 7/24 güvenilir çekici ve yol yardım hizmeti.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Friendly Intro Paragraph with Old Photo */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Old Photo */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/photo/p16.jpeg"
              alt="İzmir Oto Çekici Hizmeti"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Right: SEO Paragraph */}
          <div>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-blue-800">İzmir Bulut Oto Çekici</span> olarak, İzmir oto çekici ve yol yardım sektöründe yıllardır edindiğimiz tecrübe ile, müşteri memnuniyetini ve güvenli hizmeti ön planda tutuyoruz. 7/24 kesintisiz hizmet anlayışımız, hızlı müdahale süremiz ve İzmir&apos;in tüm ilçelerine ulaşabilen geniş servis ağımız ile aracınız nerede olursa olsun yanınızdayız. Modern çekici filomuz ve uzman ekibimizle, <span className="font-semibold text-blue-800">İzmir çekici</span> ve yol yardım ihtiyaçlarınızda güvenilir çözüm ortağınız olmayı sürdürüyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Vizyon & Misyon Section with Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center mb-4">
              <FaBullseye className="w-8 h-8 text-blue-700 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Vizyonumuz & Misyonumuz</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg">
              <p><span className="font-semibold text-blue-800">Vizyonumuz:</span> İzmir&apos;de oto çekici ve yol yardım sektöründe yenilikçi, güvenilir ve lider bir marka olmak.</p>
              <p><span className="font-semibold text-blue-800">Misyonumuz:</span> 7/24 hızlı, güvenli ve kaliteli yol yardım ve çekici hizmetiyle İzmir&apos;de her zaman yanınızda olmak.</p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/photo/p12.jpeg"
              alt="İzmir Bulut Oto Çekici Vizyon"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Advantages Section - Short & Visual */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Neden İzmir Bulut Oto Çekici?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaShieldAlt className="w-9 h-9 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Güvenilir</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaClock className="w-9 h-9 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">7/24 Hızlı</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaTools className="w-9 h-9 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Modern Ekipman</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaSmile className="w-9 h-9 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Mutlu Müşteri</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaCheckCircle className="w-9 h-9 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">10+ Yıl Tecrübe</span>
          </div>
        </div>
      </div>

      {/* Services Section - Short & Visual */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaTools className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Oto Çekici</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaClock className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Yol Yardım</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaCheckCircle className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Araç Kurtarma</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaStar className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Akü Takviyesi</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaTools className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Lastik Değişimi</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center">
            <FaShieldAlt className="w-8 h-8 text-blue-600 mb-2" />
            <span className="font-bold text-blue-800">Nakliye</span>
          </div>
        </div>
      </div>

      {/* Customer Satisfaction Section - Modern */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-xl p-10 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 opacity-20 rounded-full -z-10" style={{filter:'blur(16px)'}}></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-300 opacity-10 rounded-full -z-10" style={{filter:'blur(12px)'}}></div>
          <div className="flex items-center justify-center mb-4">
            <span className="text-blue-700 font-bold text-lg md:text-xl mb-2">Berat Ölmez</span>
          </div>
          <blockquote className="text-xl md:text-2xl font-semibold text-blue-900 mb-4 leading-relaxed">
            &quot;İzmir Bulut Oto Çekici ile aracım yolda kaldığında çok hızlı ve güvenilir bir hizmet aldım. Gerçekten profesyonel ve müşteri odaklı bir ekip!&quot;
          </blockquote>
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_,i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
            ))}
          </div>
          <div className="text-gray-500 text-sm">5/5 Puan • Gerçek müşteri deneyimi</div>
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
} 
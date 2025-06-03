import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-100 border-b border-blue-100 text-sm font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        {/* Left: Slogan */}
        <div className="font-bold text-gray-900 text-center md:text-left tracking-tight text-base md:text-[1.08rem]">
          Profesyonel Çekici Hizmetleri, <span className="font-extrabold text-gray-900">Hızlı ve Etkili Çözümler</span>
        </div>
        {/* Right: Location */}
        <div className="flex items-center space-x-2 text-blue-700 font-medium">
          <FaMapMarkerAlt className="text-blue-500 w-4 h-4" />
          <span className="hidden sm:inline">İzmir, Türkiye</span>
          <span className="sm:hidden">İzmir</span>
        </div>
      </div>
    </div>
  );
} 
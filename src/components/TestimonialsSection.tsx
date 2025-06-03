import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "Çok hızlı ve profesyonel bir hizmet aldım. Ekip çok ilgiliydi ve sorunumu kısa sürede çözdüler. Kesinlikle tavsiye ederim.",
    author: "Ahmet Yılmaz",
    role: "İzmir",
    image: "/photo/p10.jpeg"
  },
  {
    id: 2,
    content: "Gece yarısı yolda kaldığımızda 15 dakika içinde yanımızdaydılar. Çok teşekkür ederiz, gerçekten güvenilir bir firma.",
    author: "Ayşe Kaya",
    role: "Karşıyaka",
    image: "/photo/p11.jpeg"
  },
  {
    id: 3,
    content: "Fiyatları çok uygun ve hizmet kaliteleri mükemmel. İzmir'de oto çekici denince akla gelen ilk firma.",
    author: "Mehmet Demir",
    role: "Bornova",
    image: "/photo/p12.jpeg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Müşterilerimizin Yorumları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Müşteri memnuniyeti odaklı hizmet anlayışımızla binlerce kişiye yardımcı olduk. İşte bazı müşterilerimizin deneyimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/galeri"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Daha Fazla Görüntüle
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
    </section>
  );
} 
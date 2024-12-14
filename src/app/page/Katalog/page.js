"use client";
import React, { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { useRouter } from "next/navigation";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const services = [
  {
    name: "Paket Pernikahan Lengkap",
    description:
      "Paket komprehensif yang mencakup semua aspek perencanaan dan pelaksanaan pernikahan dari awal hingga akhir.",
    price: "Rp 50.000.000 - Rp 100.000.000",
    features: [
      "Konsultasi desain dan tema",
      "Manajemen vendor",
      "Dekorasi lengkap",
      "Dokumentasi profesional",
      "Koordinasi hari H",
    ],
    image: "/pernikahan.jpg",
    type: "all-in-one",
  },
  {
    name: "Paket Pernikahan Hemat",
    description:
      "Solusi pernikahan yang efisien dengan layanan inti untuk pasangan yang ingin merayakan momen istimewa tanpa menghabiskan banyak biaya.",
    price: "Rp 25.000.000 - Rp 50.000.000",
    features: [
      "Konsultasi dasar",
      "Bantuan pemilihan venue",
      "Koordinasi vendor utama",
      "Pendampingan hari H",
    ],
    image: "/pernikahan.jpg",
    type: "all-in-one",
  },
  {
    name: "Paket Dekorasi Premium",
    description:
      "Transformasikan ruangan anda dengan dekorasi mewah dan detail yang memukau, menciptakan suasana pernikahan yang tak terlupakan.",
    price: "Rp 30.000.000 - Rp 75.000.000",
    features: [
      "Desain tema custom",
      "Dekorasi eksklusif",
      "Bunga dan centerpiece",
      "Lighting dan tata panggung",
      "Konsultasi desain mendalam",
    ],
    image: "/pernikahan.jpg",
    type: "decoration",
  },
  {
    name: "Paket Dokumentasi Profesional",
    description:
      "Abadikan momen terindah anda dengan tim dokumentasi berpengalaman, menghasilkan album dan video cinematik berkualitas tinggi.",
    price: "Rp 15.000.000 - Rp 40.000.000",
    features: [
      "Foto pre-wedding",
      "Dokumentasi full day",
      "Video cinematic",
      "Album premium",
      "Cetak foto berkualitas",
    ],
    image: "/pernikahan.jpg",
    type: "documentation",
  },
];

const rekening = [
  {
    bank: "Bank BCA",
    nomor: "1234567890",
    atas_nama: "PT Wedding Organizer",
  },
  {
    bank: "Bank Mandiri",
    nomor: "0987654321",
    atas_nama: "PT Wedding Organizer",
  },
];

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState("paket"); // Default to paket tab on mobile
  const [selectedType, setSelectedType] = useState("all"); // Default "all" untuk menampilkan semua
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    bukti_pembayaran: null,
  });
  const router = useRouter();

  const handleBuyClick = (service) => {
    setSelectedService(service);
    setActiveTab("paket"); // Reset to paket tab when opening modal
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pembayaran:", { service: selectedService, ...formData });
    setSelectedService(null);
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      bukti_pembayaran: null,
    });
  };

  const typeOptions = [
    { value: "all", label: "Semua" },
    { value: "all-in-one", label: "Paket Lengkap" },
    { value: "decoration", label: "Dekorasi" },
    { value: "documentation", label: "Dokumentasi" },
  ];

  const filteredServices = services.filter(
    (service) =>
      (selectedType === "all" || service.type === selectedType) &&
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      {/* Tombol back diposisikan absolute terhadap container */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center group text-gray-600 hover:text-pink-600 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-medium">Kembali</span>
        </button>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2
            className={`
              ${cormorant.className}
              text-3xl 
              font-light 
              text-black 
              tracking-wide
              sm:text-4xl 
            `}
          >
            Katalog Layanan Pernikahan
          </h2>
          <p className="mt-3 mx-auto max-w-xl tracking-wider leading-relaxed text-gray-600 px-4 sm:mt-4 sm:max-w-2xl sm:px-0">
            Temukan paket pernikahan sempurna yang sesuai dengan impian dan
            anggaran anda
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              {/* Search Input with Icon */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Cari paket pernikahan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border text-gray-600 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
                />
              </div>

              {/* Type Filter with Icon */}
              <div className="relative min-w-[200px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 appearance-none border text-gray-600 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 bg-white cursor-pointer"
                >
                  {typeOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="py-2"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
              <span className="font-medium">Filter Aktif:</span>
              <div className="flex items-center space-x-2">
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                    Pencarian: {searchTerm}
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-2 focus:outline-none"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                )}
                {selectedType !== "all" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                    {
                      typeOptions.find((opt) => opt.value === selectedType)
                        ?.label
                    }
                    <button
                      onClick={() => setSelectedType("all")}
                      className="ml-2 focus:outline-none"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 sm:gap-16 text-gray-600">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group px-4 text-center sm:px-0 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="mx-auto mb-6 h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>

              <h3
                className={`
                  ${cormorant.className}
                  mt-4
                  mb-2 
                  text-xl 
                  font-light 
                  text-black 
                  tracking-wide
                  sm:mb-3 
                  sm:text-2xl 
                `}
              >
                {service.name}
              </h3>

              <p className="mb-3 text-gray-600 px-4 sm:px-6 h-24 overflow-hidden">
                {service.description}
              </p>

              <div className="mb-4 font-semibold text-pink-600">
                {service.price}
              </div>

              <ul className="mb-6 px-4 text-left text-gray-700">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="py-1 border-b last:border-b-0 border-gray-200"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuyClick(service)}
                className="mb-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300"
              >
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Pembayaran - Improved Responsiveness */}
      {selectedService && (
        <div className="fixed inset-0 bg-black text-gray-800 bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Tombol Tutup */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2 z-10 hover:bg-gray-300 transition"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Konten Modal Scrollable */}
            <div className="flex flex-col md:flex-row overflow-y-auto max-h-[85vh]">
              {/* Sisi Kiri - Informasi Paket */}
              <div className="w-full md:w-1/2 bg-pink-50 p-6 md:p-8 overflow-y-auto">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-48 md:h-64 object-cover rounded-lg mb-4 md:mb-6"
                />
                <h2
                  className={`${cormorant.className} text-xl md:text-2xl font-semibold text-black mb-2 md:mb-4`}
                >
                  {selectedService.name}
                </h2>
                <p className="text-gray-600 mb-2 md:mb-4 text-sm md:text-base">
                  {selectedService.description}
                </p>
                <div className="font-bold text-pink-600 text-lg md:text-xl mb-2 md:mb-4">
                  {selectedService.price}
                </div>
                <ul className="space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sisi Kanan - Form Pembayaran */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
                  Form Pembayaran
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 md:space-y-4"
                >
                  <div>
                    <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">
                      Rekening Pembayaran
                    </h4>
                    <div className="space-y-2">
                      {rekening.map((rek, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 p-2 md:p-3 rounded-lg text-sm md:text-base"
                        >
                          <p className="font-semibold">{rek.bank}</p>
                          <p>No. Rekening: {rek.nomor}</p>
                          <p>A/n: {rek.atas_nama}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                      Upload Bukti Pembayaran
                    </label>
                    <input
                      type="file"
                      name="bukti_pembayaran"
                      onChange={handleInputChange}
                      accept="image/*"
                      required
                      className="w-full px-2 py-1 md:px-3 md:py-2 border rounded-md text-sm md:text-base file:mr-4 file:rounded-full file:border-0 file:bg-pink-50 file:px-2 file:py-1 md:file:px-4 md:file:py-2 file:text-pink-700 hover:file:bg-pink-100"
                    />
                  </div>

                  <div className="flex justify-between space-x-4 pt-2 md:pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="w-full bg-gray-200 text-gray-700 px-2 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base hover:bg-gray-300 transition"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="w-full bg-pink-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base hover:bg-pink-700 transition"
                    >
                      Konfirmasi Pembayaran
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

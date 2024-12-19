"use client";
import React, { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { useRouter } from "next/navigation";
import ServiceDetailModal from "./components/DetailModal/page";
import { Search, Filter, ArrowLeft } from "lucide-react";
import CatalogPage from "../Katalog/page";
import BaseLayout from "../Base/page";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
});

export default function FeaturedServices() {
  const router = useRouter(); // Add router for navigation
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");

  const services = [
    {
      id: 1,
      title: "Koordinasi Pernikahan Menyeluruh",
      packageName: "Paket Lamaran Premium",
      description:
        "Layanan komprehensif untuk merancang dan mengeksekusi pernikahan impian Anda. Kami menyediakan koordinasi profesional dari perencanaan awal hingga hari bahagia, dengan perhatian detail yang tak tertandingi.",
      highlights: [
        "Koordinator acara berpengalaman",
        "Timeline acara terperinci",
        "Koordinasi vendor terpilih",
        "Gladi bersih profesional",
        "Pendampingan penuh selama 12 jam",
      ],
      image: "/produk1.jpg",
      price: 15000000,
      type: "koordinasi",
    },
    {
      id: 2,
      title: "Dekorasi Pernikahan Eksklusif",
      packageName: "Paket Dekorasi Elit",
      description:
        "Transformasi ruang pernikahan menjadi panggung romantis yang menceritakan kisah cinta Anda. Desain khusus yang memadukan estetika dan makna personal.",
      highlights: [
        "Dekorasi pelaminan premium",
        "Area photo booth artistik",
        "Desain pathway yang memukau",
        "Instalasi standing flower",
        "Konsultasi desain personal",
      ],
      image: "/produk2.jpg",
      price: 25000000,
      type: "dekorasi",
    },
    {
      id: 3,
      title: "Dokumentasi Cinematic",
      packageName: "Paket Dokumentasi Ultra",
      description:
        "Merekam setiap momen berharga dengan kualitas sinematik tinggi. Dokumentasi profesional yang mengabadikan kenangan terindah pernikahan Anda.",
      highlights: [
        "2 Photographer profesional",
        "2 Videographer berkualitas",
        "Drone shot ekslusif",
        "Same day edit video",
        "Album foto premium",
        "Dokumentasi menyeluruh",
      ],
      image: "/produk3.jpg",
      price: 20000000,
      type: "dokumentasi",
    },
  ];

  const typeOptions = [
    { value: "all", label: "Semua Layanan" },
    { value: "koordinasi", label: "Koordinasi" },
    { value: "dekorasi", label: "Dekorasi" },
    { value: "dokumentasi", label: "Dokumentasi" },
  ];

  const filteredServices = services.filter(
    (service) =>
      (selectedType === "all" || service.type === selectedType) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.packageName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <BaseLayout>
      {" "}
      <div className="bg-white min-h-screen py-16 sm:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2
              className={`
          ${cormorant.className}
          text-3xl 
          font-light 
          text-gray-800 
          tracking-wide
          sm:text-4xl 
        `}
            >
              Layanan Pernikahan Kami
            </h2>
            <p className="mt-3 mx-auto max-w-xl tracking-wider leading-relaxed text-gray-600 px-4 sm:mt-4 sm:max-w-2xl sm:px-0">
              Solusi premium untuk mewujudkan pernikahan impian Anda dengan
              sentuhan profesional dan kreativitas tak terbatas.
            </p>

            {/* Search and Filter Container */}
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
                      placeholder="Cari layanan atau paket..."
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
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:gap-12">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group px-4 text-center sm:px-0 transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105 sm:mb-8 sm:h-56 sm:w-56 md:h-64 md:w-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3
                  className={`
              ${cormorant.className}
              mb-3 
              text-xl 
              font-light 
              text-gray-800 
              tracking-wide
              sm:mb-4 
              sm:text-2xl 
            `}
                >
                  {service.title}
                </h3>
                <h4 className="mb-2 text-lg font-medium text-gray-900">
                  {service.packageName}
                </h4>
                <p className="mb-2 text-sm text-gray-600 capitalize">
                  Tipe:{" "}
                  {typeOptions.find((opt) => opt.value === service.type)?.label}
                </p>
                <p className="mb-4 font-semibold text-pink-600 text-xl">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(service.price)}
                </p>

                <button
                  onClick={() => {
                    setSelectedService(service);
                    setIsModalOpen(true);
                  }}
                  className="rounded-lg border border-pink-300 px-6 py-2 text-pink-600 font-medium transition-all duration-300 hover:bg-pink-50 hover:shadow-md"
                >
                  Lihat Detail Layanan
                </button>
              </div>
            ))}
          </div>

          {/* Show message when no services match filter */}
          {filteredServices.length === 0 && (
            <div className="text-center mt-12 text-gray-500">
              Tidak ada layanan yang sesuai dengan pencarian atau filter Anda.
            </div>
          )}
        </div>
        <ServiceDetailModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      </div>
      <CatalogPage />
    </BaseLayout>
  );
}

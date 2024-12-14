"use client";
import React, { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import ServiceDetailModal from "./components/DetailModal/page";
import { Search } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
});

export default function FeaturedServices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    },
  ];

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.packageName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
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
          <div className="mt-8 mx-auto max-w-md relative">
            <input
              type="text"
              placeholder="Cari layanan atau paket..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
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
  );
}

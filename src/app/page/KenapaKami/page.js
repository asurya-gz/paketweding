import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="bg-gray-50 py-12" style={{ height: "66vh" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Kenapa Memilih Kami?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami adalah mitra terbaik Anda dalam merancang momen istimewa yang
            tak terlupakan. Dengan profesionalisme, perhatian terhadap detail,
            dan kreativitas, kami siap memberikan layanan terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
            <CheckCircle className="mx-auto text-pink-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Profesionalisme
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tim kami terdiri dari profesional berpengalaman yang siap
              menghadirkan layanan terbaik untuk acara Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
            <CheckCircle className="mx-auto text-pink-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Kreativitas Tanpa Batas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kami memberikan sentuhan kreatif yang disesuaikan dengan visi dan
              keinginan Anda.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
            <CheckCircle className="mx-auto text-pink-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Perhatian Terhadap Detail
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kami memastikan setiap detail acara Anda dirancang dengan hati dan
              presisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

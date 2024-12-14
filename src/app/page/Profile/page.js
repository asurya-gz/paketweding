"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, User } from "lucide-react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "Muhammad Alif Prasetyo",
    email: "alif.prasetyo@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header with background image */}
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0">
          <img
            src="/bg.jpg"
            alt="Profile Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <Link
            href="/"
            className="absolute top-4 left-4 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1
            className={`${cormorant.className} text-2xl md:text-4xl text-white font-semibold ml-12 md:ml-16`}
          >
            Profil Saya
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 md:p-8">
            {/* Profile Header */}
            <div className="mb-6">
              <h2
                className={`${cormorant.className} text-2xl md:text-3xl font-semibold text-gray-900 text-center`}
              >
                {profileData.name}
              </h2>
            </div>

            {/* Profile Information */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <ProfileField
                icon={<User size={20} />}
                label="Nama Lengkap"
                value={profileData.name}
              />
              <ProfileField
                icon={<Mail size={20} />}
                label="Email"
                value={profileData.email}
              />
              <ProfileField
                icon={<Phone size={20} />}
                label="Nomor Telepon"
                value={profileData.phone}
              />
            </div>

            {/* Logout Section */}
            <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200">
              <Link
                href="/page/Login"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span className={`${montserrat.className} text-sm font-medium`}>
                  Keluar dari akun
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Profile Field Component
const ProfileField = ({ icon, label, value }) => {
  return (
    <div className="space-y-2">
      <label
        className={`${montserrat.className} flex items-center text-xs md:text-sm font-medium text-gray-700`}
      >
        <span className="mr-2 text-gray-400">{icon}</span>
        {label}
      </label>
      <p
        className={`${montserrat.className} text-gray-900 text-sm md:text-base break-words`}
      >
        {value}
      </p>
    </div>
  );
};

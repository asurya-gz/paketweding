"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function HalamanPembayaran() {
  const router = useRouter();

  // Data pembayaran simulasi (ini bisa diganti dengan data sebenarnya)
  const paymentDetails = {
    nama: "John Doe",
    email: "johndoe@example.com",
    telepon: "08123456789",
    metodePembayaran: "E-Wallet (GoPay, OVO, Dana)",
    totalPembayaran: "Rp 500.000",
  };

  const handleConfirmPayment = () => {
    // Logika untuk konfirmasi pembayaran bisa diintegrasikan di sini
    console.log("Pembayaran dikonfirmasi");
    router.push("/page/DetailPembayaran/Success"); // Arahkan ke halaman sukses setelah pembayaran selesai
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-600">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
          Detail Pembayaran
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-gray-700 text-sm md:text-base">Nama Lengkap:</p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              {paymentDetails.nama}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm md:text-base">Email:</p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              {paymentDetails.email}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm md:text-base">Nomor Telepon:</p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              {paymentDetails.telepon}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm md:text-base">
              Metode Pembayaran:
            </p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              {paymentDetails.metodePembayaran}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-sm md:text-base">
              Total Pembayaran:
            </p>
            <p className="font-semibold text-gray-900 text-sm md:text-base">
              {paymentDetails.totalPembayaran}
            </p>
          </div>
        </div>

        <button
          onClick={handleConfirmPayment}
          className="w-full mt-6 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition"
        >
          Konfirmasi Pembayaran
        </button>
      </div>
    </div>
  );
}

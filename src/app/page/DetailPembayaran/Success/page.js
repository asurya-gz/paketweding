"use client";
import { useRouter } from "next/navigation";

export default function HalamanSuccess() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/"); // Arahkan ke halaman utama
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-600">
          Pembayaran Berhasil!
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Terima kasih telah melakukan pembayaran. Pesanan Anda sedang diproses.
        </p>

        <button
          onClick={handleBackToHome}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  ChevronDown,
  Download,
} from "lucide-react";

const OrderManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState("");

  // Sample data - in real app would come from API/database
  const orders = [
    {
      id: "ORD-001",
      customer: "Sarah Johnson",
      package: "Wedding Premium",
      date: "2024-03-15",
      amount: "Rp 15.000.000",
      status: "paid",
      paymentProof: "/api/placeholder/100/100",
    },
    {
      id: "ORD-002",
      customer: "Michael Chen",
      package: "Pre-Wedding Basic",
      date: "2024-03-14",
      amount: "Rp 8.500.000",
      status: "pending",
      paymentProof: "/api/placeholder/100/100",
    },
    {
      id: "ORD-003",
      customer: "Lisa Wong",
      package: "Engagement Premium",
      date: "2024-03-13",
      amount: "Rp 12.000.000",
      status: "confirmed",
      paymentProof: "/api/placeholder/100/100",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleDropdown = (orderId) => {
    setShowDropdown(showDropdown === orderId ? "" : orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Manajemen Pembayaran
        </h1>
        <p className="text-gray-600">
          Kelola semua transaksi pembayaran dalam satu dashboard
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm mb-1">Total Pendapatan</p>
          <p className="text-2xl font-bold text-gray-900">Rp 35.500.000</p>
          <p className="text-sm text-green-600">+12.5% dari bulan lalu</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm mb-1">Pembayaran Pending</p>
          <p className="text-2xl font-bold text-gray-900">5</p>
          <p className="text-sm text-yellow-600">Perlu konfirmasi</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm mb-1">Pembayaran Sukses</p>
          <p className="text-2xl font-bold text-gray-900">28</p>
          <p className="text-sm text-green-600">Bulan ini</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm mb-1">Total Transaksi</p>
          <p className="text-2xl font-bold text-gray-900">33</p>
          <p className="text-sm text-blue-600">Semua waktu</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari berdasarkan ID atau nama customer..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="paid">Dibayar</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Dikonfirmasi</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span className="hidden md:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  ID Order
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Customer
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Paket
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Jumlah
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Bukti
                </th>
                <th className="px-6 py-3 text-gray-600 text-sm font-semibold">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-900">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      {order.customer}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      {order.package}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{order.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      {order.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={order.paymentProof}
                      alt="Payment Proof"
                      className="w-10 h-10 rounded object-cover cursor-pointer"
                      onClick={() => {
                        /* Handle image preview */
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 relative">
                    <button
                      onClick={() => handleDropdown(order.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {showDropdown === order.id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Lihat Detail
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Konfirmasi Pembayaran
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Download Bukti
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">33</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;

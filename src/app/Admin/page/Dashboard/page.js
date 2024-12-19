"use client";
import React, { useState } from "react";

const DashboardAdmin = () => {
  // Sample data - replace with your actual data
  const analyticsData = {
    revenue: {
      total: 750000000,
      growth: 12.5,
      lastMonth: 150000000,
    },
    orders: {
      total: 30,
      active: 8,
      completed: 22,
    },
    packages: [
      {
        name: "Intimate Wedding",
        bookings: 12,
        revenue: 420000000,
        averagePrice: 35000000,
      },
      {
        name: "Traditional Wedding",
        bookings: 8,
        revenue: 600000000,
        averagePrice: 75000000,
      },
      {
        name: "Grand Wedding",
        bookings: 6,
        revenue: 900000000,
        averagePrice: 150000000,
      },
      {
        name: "Destination Wedding",
        bookings: 4,
        revenue: 800000000,
        averagePrice: 200000000,
      },
    ],
    recentOrders: [
      {
        id: "WO-001",
        client: "Putri & Adi",
        package: "Traditional Wedding",
        date: "2024-05-15",
        status: "Active",
        amount: 75000000,
      },
      {
        id: "WO-002",
        client: "Sarah & Budi",
        package: "Intimate Wedding",
        date: "2024-04-20",
        status: "Completed",
        amount: 35000000,
      },
      {
        id: "WO-003",
        client: "Maya & Deni",
        package: "Grand Wedding",
        date: "2024-06-10",
        status: "Active",
        amount: 150000000,
      },
    ],
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-600">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Dashboard Analytics
            </h1>
            <p className="text-gray-500">Ringkasan performa bisnis Anda</p>
          </div>
          <div className="mt-4 md:mt-0">
            <select className="bg-white border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option value="7D">7 Hari Terakhir</option>
              <option value="1M">30 Hari Terakhir</option>
              <option value="3M">3 Bulan Terakhir</option>
              <option value="1Y">1 Tahun</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Revenue */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-500">Total Pendapatan</h3>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  analyticsData.revenue.growth >= 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {analyticsData.revenue.growth}%
              </span>
            </div>
            <p className="text-2xl font-semibold mt-2">
              {formatCurrency(analyticsData.revenue.total)}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Bulan ini: {formatCurrency(analyticsData.revenue.lastMonth)}
            </p>
          </div>

          {/* Total Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500">Total Pesanan</h3>
            <p className="text-2xl font-semibold mt-2">
              {analyticsData.orders.total}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-green-600">
                {analyticsData.orders.active} Active
              </span>
              <span className="text-sm text-gray-300">|</span>
              <span className="text-sm text-gray-600">
                {analyticsData.orders.completed} Completed
              </span>
            </div>
          </div>

          {/* Average Order Value */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500">Rata-rata Nilai Pesanan</h3>
            <p className="text-2xl font-semibold mt-2">
              {formatCurrency(
                analyticsData.revenue.total / analyticsData.orders.total
              )}
            </p>
            <p className="text-sm text-gray-500 mt-1">Per transaksi</p>
          </div>

          {/* Conversion Rate */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500">Tingkat Konversi</h3>
            <p className="text-2xl font-semibold mt-2">68%</p>
            <p className="text-sm text-gray-500 mt-1">Dari total inquiry</p>
          </div>
        </div>

        {/* Package Performance */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              Performa Paket Layanan
            </h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-4">Nama Paket</th>
                    <th className="pb-4">Total Booking</th>
                    <th className="pb-4">Total Pendapatan</th>
                    <th className="pb-4">Harga Rata-rata</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.packages.map((pkg, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-4">{pkg.name}</td>
                      <td className="py-4">{pkg.bookings}</td>
                      <td className="py-4">{formatCurrency(pkg.revenue)}</td>
                      <td className="py-4">
                        {formatCurrency(pkg.averagePrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              Pesanan Terbaru
            </h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-4">ID</th>
                    <th className="pb-4">Client</th>
                    <th className="pb-4">Paket</th>
                    <th className="pb-4">Tanggal</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Nilai</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.recentOrders.map((order, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="py-4">{order.id}</td>
                      <td className="py-4">{order.client}</td>
                      <td className="py-4">{order.package}</td>
                      <td className="py-4">
                        {new Date(order.date).toLocaleDateString("id-ID")}
                      </td>
                      <td className="py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            order.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4">{formatCurrency(order.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
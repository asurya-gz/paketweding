"use client";
import React, { useState } from "react";
import { Calendar } from "lucide-react";

const WeddingCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample booked dates (you would fetch this from your backend)
  const bookedDates = [
    "2024-12-21",
    "2024-12-22",
    "2024-12-25",
    "2024-12-28",
    "2024-12-29",
  ];

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const isDateBooked = (year, month, day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    return bookedDates.includes(dateStr);
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dateStr = clickedDate.toISOString().split("T")[0];

    if (!isDateBooked(currentDate.getFullYear(), currentDate.getMonth(), day)) {
      setSelectedDate(dateStr);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isBooked = isDateBooked(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isSelected =
        selectedDate ===
        `${currentDate.getFullYear()}-${String(
          currentDate.getMonth() + 1
        ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(day)}
          className={`
            h-12 flex items-center justify-center cursor-pointer rounded-lg
            transition-all duration-200 relative
            ${isBooked ? "bg-red-100 cursor-not-allowed" : "hover:bg-pink-50"}
            ${isSelected ? "bg-pink-200 hover:bg-pink-200" : ""}
          `}
        >
          <span className="relative z-10">{day}</span>
          {isBooked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs text-red-600 font-medium">Booked</div>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-600">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-pink-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            Jadwal Pernikahan
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="font-medium text-gray-800">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
          <div
            key={day}
            className="h-8 flex items-center justify-center font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

      <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-100 rounded"></div>
          <span className="text-sm text-gray-600">Tanggal Sudah Dipesan</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-pink-200 rounded"></div>
          <span className="text-sm text-gray-600">Tanggal Dipilih</span>
        </div>
      </div>
    </div>
  );
};

export default WeddingCalendar;

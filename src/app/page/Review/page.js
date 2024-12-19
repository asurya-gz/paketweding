"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import BaseLayout from "../Base/page";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([
    {
      id: 1,
      name: "Sarah & John",
      rating: 5,
      date: "2024-03-15",
      review:
        "Pelayanan yang luar biasa! Tim Dewa Management sangat profesional dan membuat hari pernikahan kami sempurna.",
      package: "All-In Package",
    },
    {
      id: 2,
      name: "Anita & Budi",
      rating: 4,
      date: "2024-03-10",
      review:
        "Sangat puas dengan koordinasi tim. Dekorasi sesuai dengan yang kami harapkan.",
      package: "Standard Package",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: submittedReviews.length + 1,
      name: "Anonymous",
      rating,
      date: new Date().toISOString().split("T")[0],
      review,
      package: "Standard Package",
    };

    setSubmittedReviews([newReview, ...submittedReviews]);
    setRating(0);
    setReview("");
  };

  return (
    <BaseLayout>
      {" "}
      <div className="w-full bg-white text-gray-600">
        <div className={`max-w-4xl mx-auto py-12 px-4 ${montserrat.className}`}>
          {/* Review Form */}
          <div className="bg-white rounded-lg p-8 mb-12">
            <h2
              className={`text-3xl font-light mb-8 text-center ${cormorant.className}`}
            >
              Bagikan Pengalaman Anda
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Star Rating */}
              <div className="flex flex-col items-center space-y-3">
                <label className="text-sm tracking-widest uppercase text-gray-600">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        fill={(hover || rating) >= star ? "#B8860B" : "none"}
                        stroke={
                          (hover || rating) >= star ? "#B8860B" : "#CBD5E0"
                        }
                        className="w-8 h-8"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="space-y-3">
                <label
                  htmlFor="review"
                  className="block text-sm tracking-widest uppercase text-gray-600 text-center"
                >
                  Ulasan Anda
                </label>
                <textarea
                  id="review"
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm"
                  placeholder="Bagikan pengalaman pernikahan Anda bersama Dewa Management..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-sm tracking-widest uppercase"
              >
                Kirim Ulasan
              </button>
            </form>
          </div>

          {/* Submitted Reviews */}
          <div className="space-y-8">
            <h2
              className={`text-3xl font-light text-center mb-10 ${cormorant.className}`}
            >
              Testimoni Klien
            </h2>
            {submittedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      className={`text-xl font-light mb-1 ${cormorant.className}`}
                    >
                      {review.name}
                    </h3>
                    <p className="text-xs tracking-widest uppercase text-gray-500">
                      {review.package}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        fill={index < review.rating ? "#B8860B" : "none"}
                        stroke={index < review.rating ? "#B8860B" : "#CBD5E0"}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {review.review}
                </p>
                <p className="text-xs tracking-widest uppercase text-gray-400">
                  {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ReviewSection;

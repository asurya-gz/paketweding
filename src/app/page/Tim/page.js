import React from "react";
import { Cormorant_Garamond } from "next/font/google";
import BaseLayout from "../Base/page";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
});

const teamMembers = [
  {
    name: "Amanda Putri",
    role: "Founder & Wedding Planner",
    image: "/tim.jpg",
    description:
      "Dengan pengalaman lebih dari 10 tahun di industri wedding organizer, Amanda memimpin tim dengan visi untuk menciptakan momen pernikahan yang tak terlupakan.",
    socialMedia: {
      instagram: "https://instagram.com/amandaputri",
      linkedin: "https://linkedin.com/in/amandaputri",
    },
  },
  {
    name: "Rizky Hernawan",
    role: "Senior Wedding Coordinator",
    image: "/tim.jpg",
    description:
      "Ahli dalam koordinasi detail acara pernikahan. Rizky memastikan setiap momen berjalan sempurna dengan koordinasi yang teliti dan profesional.",
    socialMedia: {
      instagram: "https://instagram.com/rizkyhernawan",
      linkedin: "https://linkedin.com/in/rizkyhernawan",
    },
  },
  {
    name: "Siti Rahmawati",
    role: "Creative Director",
    image: "/tim.jpg",
    description:
      "Desainer berbakat yang mengubah konsep pernikahan menjadi realitas visual yang memukau. Siti memiliki keahlian dalam menciptakan tema dan dekorasi yang unik.",
    socialMedia: {
      instagram: "https://instagram.com/sitirahmawati",
      linkedin: "https://linkedin.com/in/sitirahmawati",
    },
  },
  {
    name: "Siti Rahmawati",
    role: "Creative Director",
    image: "/tim.jpg",
    description:
      "Desainer berbakat yang mengubah konsep pernikahan menjadi realitas visual yang memukau. Siti memiliki keahlian dalam menciptakan tema dan dekorasi yang unik.",
    socialMedia: {
      instagram: "https://instagram.com/sitirahmawati",
      linkedin: "https://linkedin.com/in/sitirahmawati",
    },
  },
  {
    name: "Siti Rahmawati",
    role: "Creative Director",
    image: "/tim.jpg",
    description:
      "Desainer berbakat yang mengubah konsep pernikahan menjadi realitas visual yang memukau. Siti memiliki keahlian dalam menciptakan tema dan dekorasi yang unik.",
    socialMedia: {
      instagram: "https://instagram.com/sitirahmawati",
      linkedin: "https://linkedin.com/in/sitirahmawati",
    },
  },
  {
    name: "Siti Rahmawati",
    role: "Creative Director",
    image: "/tim.jpg",
    description:
      "Desainer berbakat yang mengubah konsep pernikahan menjadi realitas visual yang memukau. Siti memiliki keahlian dalam menciptakan tema dan dekorasi yang unik.",
    socialMedia: {
      instagram: "https://instagram.com/sitirahmawati",
      linkedin: "https://linkedin.com/in/sitirahmawati",
    },
  },
];

export default function OurTeamPage() {
  return (
    <BaseLayout>
      {" "}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2
              className={`
          ${cormorant.className}
          text-3xl 
          font-light 
          text-black 
          tracking-wide
          sm:text-4xl 
        `}
            >
              Tim Kami
            </h2>
            <p className="mt-3 mx-auto max-w-xl tracking-wider leading-relaxed text-gray-600 px-4 sm:mt-4 sm:max-w-2xl sm:px-0">
              Profesional berpengalaman dengan passion untuk menciptakan momen
              pernikahan yang indah dan berkesan
            </p>
          </div>

          {/* Added container with overflow hidden to prevent content spillover */}
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 gap-y-16 gap-x-8 md:grid-cols-3 sm:gap-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="group px-4 text-center sm:px-0">
                  {/* Added relative positioning and z-index to ensure proper stacking */}
                  <div className="relative z-10 mx-auto mb-6 h-64 w-48 overflow-hidden rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-2xl sm:h-80 sm:w-60 md:h-96 md:w-72">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top grayscale-[30%] transition-all duration-300 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Added background wrapper to ensure text is readable */}
                  <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h3
                      className={`
                  ${cormorant.className}
                  mt-4
                  mb-2 
                  text-xl 
                  font-light 
                  text-black 
                  tracking-wide
                  sm:mb-3 
                  sm:text-2xl 
                `}
                    >
                      {member.name}
                    </h3>

                    <h4 className="mb-3 text-lg font-medium text-gray-900">
                      {member.role}
                    </h4>

                    <p className="mb-4 text-gray-600 px-4 sm:px-6">
                      {member.description}
                    </p>

                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href={member.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href={member.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

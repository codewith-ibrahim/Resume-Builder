"use client";
import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Frontend Developer",
    avatar: "testimonial/testimonial-1.jpg",
    text: "This resume builder saved me hours! I landed interviews quickly."
  },
  {
    name: "Daniel Smith",
    role: "Product Designer",
    avatar: "testimonial/testimonial-2.webp",
    text: "The drag-and-drop UI is brilliant. Exporting to PDF was seamless."
  },
  {
    name: "Sara Ahmed",
    role: "Marketing Specialist",
    avatar: "testimonial/testimonial-3.webp",
    text: "Loved the templates and the live preview. Highly recommended!"
  },
  {
    name: "Ali Raza",
    role: "Full-Stack Engineer",
    avatar: "/user.jpg",
    text: "Clean code, fast performance, and stunning layouts—great tool!"
  },
  {
    name: "Ali Raza",
    role: "Full-Stack Engineer",
    avatar: "/user.jpg",
    text: "Clean code, fast performance, and stunning layouts—great tool!"
  },
  {
    name: "Ali Raza",
    role: "Full-Stack Engineer",
    avatar: "/user.jpg",
    text: "Clean code, fast performance, and stunning layouts—great tool!"
  }
];

export default function Testimonial() {
  return (
    <section className="p-0 bg-gray-50">
      <div className="customContainer py-16">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-10"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-indigo-100"
                />
                <p className="text-gray-600 italic mb-4">“{t.text}”</p>
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                <span className="text-sm text-indigo-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

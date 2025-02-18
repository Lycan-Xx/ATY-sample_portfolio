import React from "react";
import Slider from "react-slick";
import background from "../assets/background-1.jpg";
import revitLogo from "../assets/revit.png";
import archicadLogo from "../assets/archiCAD.jpg";
import autocadLogo from "../assets/AutoCAD.png";
import sketchupLogo from "../assets/sketchup.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tools = [
  { name: "Revit", logo: revitLogo },
  { name: "Archicad", logo: archicadLogo },
  { name: "Autocad", logo: autocadLogo },
  { name: "Sketchup", logo: sketchupLogo },
];

const TechnologiesPage = () => {
  const settings = {
    arrows: false, // Remove arrow buttons
    dots: false, // Remove dots
    infinite: true,
    speed: 6000, // Slow speed for continuous sliding effect
    autoplay: true,
    autoplaySpeed: 0, // No delay between transitions
    cssEase: "linear", // Smooth continuous slide
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section
      id="technologies"
      className="min-h-screen flex flex-col justify-center relative py-16 overflow-hidden"
      style={{
        background: `linear-gradient(rgba(10, 25, 47, 0.9), rgba(2, 12, 27, 0.9)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-center mb-8 md:mb-12 text-yellow-400">
          Technologies I Use
        </h2>

        <div className="px-4 sm:px-8">
          <Slider {...settings}>
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex justify-center px-1 sm:px-4 focus:outline-none"
              >
                <div className="bg-white/80 p-6 rounded-xl border border-yellow-400/30 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl w-full max-w-[200px]">
                  <div className="aspect-square flex items-center justify-center mb-4">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-3/4 h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-700">
                    {tool.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesPage;

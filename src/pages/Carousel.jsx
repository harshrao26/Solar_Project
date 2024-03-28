import React, { useState, useEffect } from "react";
import Button from "../components/Button";
function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1614102073832-030967418971?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden w-full h-96 relative">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className={`object-cover w-full h-full transition duration-500 absolute top-0 left-0 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          />
        ))}
      </div>
      <div className="m-20 ">
        <div className="absolute top-1/2  -translate-y-1/2 flex items-center justify-center text-[2vw] z-[10]  py-5 px-5 text-white rounded-lg">
          <h1 className=" text-center backdrop-blur-md">
            1.2 GW Fully Automatic Manufacturing Line
          </h1>
         
        </div>
      </div>
    </div>
  );
}

export default Carousel;

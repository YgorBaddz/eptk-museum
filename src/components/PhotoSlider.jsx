"use client";
import { useState } from "react";

const PhotoSlider = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + photos.length) % photos.length
    );
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative w-full h-[340px] mt-4">
        <img
          src={
            photos[currentSlide].formats?.large?.url || photos[currentSlide].url
          }
          alt={`Teacher Photo ${currentSlide + 1}`}
          className="object-cover w-full h-full cursor-pointer"
          onClick={() => openModal(currentSlide)}
        />

        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black border-white hover:bg-white hover:border-black text-white hover:text-black duration-150 border-[1px] p-2 rounded-full"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black border-white hover:bg-white hover:border-black text-white hover:text-black duration-150 border-[1px] p-2 rounded-full"
          onClick={handleNextSlide}
        >
          &gt;
        </button>

        <div className="flex justify-center -mt-4">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-black border-white border-[1px]"
                  : "bg-white border-black border-[1px]"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Модальное окно для увеличенного фото */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-3/4 h-3/4 bg-[#CF9056] rounded-3xl"
            onClick={(e) => e.stopPropagation()} // чтобы клик по картинке не закрывал модалку
          >
            <img
              src={
                photos[modalImageIndex].formats?.large?.url ||
                photos[modalImageIndex].url
              }
              alt={`Teacher Photo ${modalImageIndex + 1}`}
              className="object-contain w-full h-full"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 text-xl font-bold hover:bg-opacity-90"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoSlider;

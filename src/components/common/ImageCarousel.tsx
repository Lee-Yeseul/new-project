import { useRef, useState } from "react";

interface CardProps {
  imageList: { id: number; url: string }[];
}
export default function ImageCarousel({ imageList }: CardProps) {
  const ref = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [style, setStyle] = useState({
    transform: `translateX(-${currentImageIndex}00%)`,
  });

  const handleSwife = (direction: number) => {
    if (currentImageIndex === 0 && direction < 0) return;
    if (currentImageIndex === imageList.length - 1 && direction > 0) return;
    setCurrentImageIndex((prev) => prev + direction);
    setStyle({
      transform: `translateX(-${currentImageIndex + direction}00%)`,
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex items-center ease-in-out duration-300 transition-all`}
        ref={ref}
        style={style}
      >
        {imageList.map((image) => (
          <img
            key={image.id}
            className={`aspect-square rounded-lg`}
            src={image.url}
          />
        ))}
      </div>
      <button
        onClick={() => handleSwife(-1)}
        className={`absolute left-2 top-1/2 w-8 h-8 bg-gray-100 rounded-full p-2 hover:shadow-lg shadow-grey-500`}
      >
        {"<"}
      </button>

      <button
        onClick={() => handleSwife(1)}
        className={`absolute right-2 top-1/2 w-8 h-8 bg-gray-100 rounded-full p-2 hover:shadow-lg shadow-grey-500 `}
      >
        {">"}
      </button>
      <div className="absolute bottom-2 w-full">
        <div className="flex justify-center items-center gap-1.5">
          {imageList.map((image) => (
            <div
              className={`rounded-full ${
                image.id === currentImageIndex
                  ? "bg-white w-2.5 h-2.5"
                  : "bg-gray-300 w-2 h-2"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

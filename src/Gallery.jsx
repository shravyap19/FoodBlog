import { useEffect, useState } from "react";
function Gallery() {
  const images = [
    "./hamburger.jpeg",
    "noodle-soup.webp",
    "fried-rice.jpeg",
    "pizza.webp",
    "samosa.jpeg",
    "green-tea.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Start fade out
      setTimeout(() => {
        const nextIndex =
          currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        setOpacity(1); // Fade in the next image
      }, 500);
    }, 1500); // Change image every 3000 milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex, images.length]); // Effect depends on currentIndex

  return (
    <div className="gallery flex items-center justify-center relative">
      <img
        className="images w-full object-cover"
        src={images[currentIndex]}
        alt="Slideshow image"
        style={{ opacity }} // Apply dynamic opacity to the image
      />
    </div>
  );
}

export default Gallery;

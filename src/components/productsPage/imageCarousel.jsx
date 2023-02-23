import { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useInterval } from "@chakra-ui/hooks";

const ImageCarousel = ({ image }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useInterval(() => {
    setCurrentImageIndex((currentImageIndex + 1) % image.length);
  }, 1000);

  return (
    <>
      {image.map((image, index) => (
        <Image
          height="100%"
          objectFit="cover"
          key={index}
          src={image}
          position={index === currentImageIndex ? "static" : "absolute"}
          opacity={index === currentImageIndex ? 1 : 0}
          width="100%"
          m="auto"
        />
      ))}
    </>
  );
};

const ImageHover = ({ image }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image
        height="100%"
        objectFit="cover"
        src={image[0]}
        width="100%"
        display={isHovering ? "none" : "block"}
        m="auto"
      />
      {isHovering && <ImageCarousel image={image} />}
    </Box>
  );
};

export default ImageHover;

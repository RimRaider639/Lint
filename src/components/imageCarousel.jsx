import { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useInterval } from "@chakra-ui/hooks";

const ImageCarousel = ({ image }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useInterval(() => {
    setCurrentImageIndex((currentImageIndex + 1) % image.length);
  }, 1000);

  return (
    <Flex>
      {image.map((image, index) => (
        <Image
          key={index}
          src={image}
          position={index === currentImageIndex ? "static" : "absolute"}
          opacity={index === currentImageIndex ? 1 : 0}
          width="50%"
          m="auto"
        />
      ))}
    </Flex>
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
        src={image[0]}
        width="50%"
        display={isHovering ? "none" : "block"}
        m="auto"
      />
      {isHovering && <ImageCarousel image={image} />}
    </Box>
  );
};

export default ImageHover;

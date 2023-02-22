import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const RatingSystem = ({ rating }) => {
  const maxRating = 5; // maximum rating value
  const percent = (rating / maxRating) * 100; // percentage value

  return (
    <Flex>
      {[...Array(maxRating)].map((_, index) => (
        <StarIcon
          key={index}
          color={index < Math.floor(rating) ? "green" : "red"}
          mr="1"
        />
      ))}
      <span>({rating})</span>
    </Flex>
  );
};

export default RatingSystem;

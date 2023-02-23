import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const RatingSystem = ({ rating }) => {
  const maxRating = 5; // maximum rating value
  const percent = (rating / maxRating) * 100; // percentage value

  return (
    <Flex>
      <Text>
        {[...Array(maxRating)].map((_, index) => (
          // <StarIcon
          //   key={index}
          //   color={index < Math.floor(rating) ? "green" : "red"}
          //   mr="1"
          // />
          <StarIcon
            key={index}
            color={index < Math.floor(rating) ? "yellow.500" : "gray.300"}
          />
        ))}
      </Text>
      <Text>({rating})</Text>
    </Flex>
  );
};

export default RatingSystem;
